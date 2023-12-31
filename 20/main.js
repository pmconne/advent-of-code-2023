
const simpleInput =
`broadcaster -> a, b, c
%a -> b
%b -> c
%c -> inv
&inv -> a`;

const sampleInput =
`broadcaster -> a
%a -> inv, con
&inv -> b
%b -> con
&con -> output`;

const realInput =
`%rp -> gq, sd
&kh -> cs
%jz -> pl, jb
%dx -> tx
%dh -> bm, sd
&zv -> ns, dx, hl, hn, fm
%xb -> ds, sk
%hv -> sk, kr
%db -> zv, zz
&sk -> rg, hh, hv, kr, kh, zl, zn
%tc -> jz
%dj -> ts, pl
%jk -> sd, vh
%fm -> dx, zv
%dp -> sd, cc
%vh -> sd
&lz -> cs
%kr -> rg
%jb -> bf, pl
%kz -> sk
%ts -> pl, bs
%gr -> ns, zv
%kc -> sd, kf
%jd -> zv
%bs -> vg
%zk -> rp
%vf -> zk
%mm -> ms, sk
%qc -> pl, dj
%fk -> qc
%bm -> vf, sd
%ds -> kz, sk
%sn -> zv, jd
%zn -> mm
%ct -> fk
%np -> sk, xb
&tg -> cs
%tx -> cm, zv
%zl -> hh
%zz -> px, zv
%ms -> zl, sk
%ns -> db
%px -> zv, sn
broadcaster -> fm, hv, kc, bv
&hn -> cs
%hh -> np
%kf -> dh
%vg -> pl, tc
%bv -> ct, pl
&pl -> bv, fk, ct, bs, tg, tc
%cm -> zv, hl
%cc -> sd, jk
%bf -> pl
%hl -> gr
&cs -> rx
%gq -> dp
%rg -> zn
&sd -> zk, kf, gq, lz, kc, vf`;

class GraphNode {
  constructor(name) {
    this.name = name;
    this.targets = [];
  }

  addTarget(targetNode) {
    if (this.targets.includes(targetNode))
      throw new Error(`Duplicate link ${this.name}->${targetNode.name}`);

    // console.log(`${this.name} => ${targetNode.name}`);
    this.targets.push(targetNode);
    targetNode.addSource(this);
  }

  addSource(_sourceNode) { }
}

class Broadcaster extends GraphNode {
  receive(signal) {
    return signal.pulse;
  }
}

class FlipFlop extends GraphNode {
  on = false;

  receive(signal) {
    if ("low" === signal.pulse) {
      this.on = !this.on;
      // console.log(`  ${this.name} is ${this.on ? "ON" : "OFF"}`);
      return this.on ? "high" : "low";
    }

    return undefined;
  }
}

class Conjunction extends GraphNode {
  memory = {};

  addSource(sourceNode) {
    // console.log(`${this.name} <= ${sourceNode.name}`);
    this.memory[sourceNode.name] = "low";
    // for (const [k,v] of Object.entries(this.memory))
    //   console.log(`  ${k} = ${v}`);
  }

  receive(signal) {
    if (!signal.source)
      throw new Error("receive expected source");

    this.memory[signal.source.name] = signal.pulse;
    for (const value of Object.values(this.memory))
      if ("low" === value)
        return "high";

    return "low";
  }
}

class Output extends GraphNode {
  addTarget() {
    throw new Error("Output node is terminal");
  }

  receive(signal) {
    // console.log(`Output received ${signal.pulse} from ${signal.source.name}`);
    return undefined;
  }
}

function parseGraph(input) {
  const nodeDefs = {};
  for (let line of input.split("\n")) {
    const type = line[0];
    if (type !== "b")
      line = line.substring(1);

    const [name, rest] = line.split(" -> ");
    const children = rest.split(",").map((x) => x.trim());
    nodeDefs[name] = { name, type, children };
  }

  const nodes = { output: new Output("output") };
  for (const def of Object.values(nodeDefs)) {
    let node;
    switch (def.type) {
      case "b": node = new Broadcaster(def.name); break;
      case "%": node = new FlipFlop(def.name); break;
      case "&": node = new Conjunction(def.name); break;
      default: throw new Error(`Unrecognized node type ${def.type}`);
    }

    nodes[def.name] = node;
  }
  
  for (const def of Object.values(nodeDefs)) {
    const source = nodes[def.name];
    for (const child of def.children) {
      // Some nodes don't actually exist, wtf.
      let target = nodes[child];
      if (!target)
        nodes[child] = target = new Output(child);

      source.addTarget(target);
    }
  }

  return nodes;
}

function pushButton(graph) {
  const counts = { low: 1, high: 0 };
  const q = [ { source: graph["broadcaster"], pulse: "low" } ];
  while (q.length > 0) {
    const signal = q.shift();
    
    // console.log(`${signal.source.name} emits ${signal.pulse}`);
    for (const target of signal.source.targets) {
      ++counts[signal.pulse];
      // console.log(`${signal.source.name} -${signal.pulse}-> ${target.name}`);
      const emit = target.receive(signal);
      if (emit)
        q.push({ source: target, pulse: emit });
    }
  }

  return counts;
}

function part1(input, numPresses) {
  let low = 0, high = 0;
  const graph = parseGraph(input);
  for (let i = 0; i < numPresses; i++) {
    // console.log(`\nButton ${i}:`);
    const result = pushButton(graph);
    low += result.low;
    high += result.high;
  }

  // console.log(`low=${low} high=${high}`);
  return low * high;
}

// console.log(part1(simpleInput, 1));
// console.log(part1(sampleInput, 1000));
console.log(part1(realInput, 1000));
