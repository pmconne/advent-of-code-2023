const sampleInput =
`2413432311323
3215453535623
3255245654254
3446585845452
4546657867536
1438598798454
4457876987766
3637877979653
4654967986887
4564679986453
1224686865563
2546548887735
4322674655533`;

const realInput =
`222343122415245553243251316124223234134666332224124211645376775672443247264263475261513546522316162532215534453661231232515522214351143451211
422125443253354142511545636246664666565355152246453231651172747635424163415626462753445445312334225221624336126244661514234445544425223533122
131212112421423414125516356342555542626661163526211536677376523712262371162153644117776261645533664544366146314432523222515425314231311544521
131334344235153415214541223454455223563154114267331524774136127715554416125273543276346471735741663351266324144422511534542234341513351345352
314541545523112111131565114333211153312641614321771374726154434476767125613311254537363422511721275135434164664442151263234241114111121141334
435153335153513534132112326653656626231351436457153446433363235565156156723233715473535244413451723176561153261562445512312413413513135513241
235243535523134543445216214455445352435554624255171271225755313626173154112144673146273747537614771377613244145436355342536323123434425211113
132552152551514515631323412533333446136243376366556365574745474652757277632216317677316551253673465513776336664225626313216456312542531241352
311415311541314143614162642634556464574541744355655753776632763662153656721435137347422375344242225276244673434333351454464536453212424421425
453351344131342126143165264626543453632747531417235617257564537542611276314542732241535726557435722271523761452243145343543365433423153132344
424354321333252642533513531241416236636427325176724425161362563217173773414665312244155777552374513335344162564462411154332652126231133233331
433224533551436134314641523151361154615353522622137441214134673454347752343853221756746664765556521762762464233333523123643145626644231443435
243311313556533564523443331214721572253144611715156456321767676655457736255732864573164467712433421256325731135656541255561161224441152415141
511211214252345356344156642436611545463224342452742717585325436325574336455336582448256836717741726221177352616311422112513255165441212221131
244253443163544142511413446172632624762126756145146775348573476557644782564438437852836725866452746165474553473737534665123425113435563332453
232155346345514313654314235557517112176174776332136456448427547478426265844263882743533766568854547675464477171376662424251312612162632514355
424114441642564135264345176163444365144163124128832285838626688224834432458556377773645427653638562736676174576737574642156232566466636441124
543244331213246512421551417132132647763461226245235583478358556478588445828784366325778587856624776125647332126411416416253326543252561355453
513411632124243263566153173255453461117356682265475822242236525286334354628536868726586284535383867467645552277715213631624352612331534144225
234513324414264131211345613416736552211115685767773523645885727834464346536233245827443237753783724626566246761647646475456131431415434413214
132312323255146664114745115275443572754326543474673247542856435836784453584863735676475556838547655484787272216413226712176641452341133361621
324445311115236332563161165371142354332783687877726543524347444677384655338335874866474624655543543466338566764524432633543363631622335214314
452146561262254136627644671525514257523265444635773245326674352228844844533536247443486645863647324742823822411266212747246263222143515531123
323443456261326564347757145611113632534754323645837762327643383533554795688333775647234446628482555868382485343642524356327477353226234131236
323566623463524644662155345214734554448367587534458465333783778836737748873896436675564776876254472473382773351746477537426351164321556552155
411624314463555226413151162214157826642348553426375774773937688356445778864665387877397647688288645648488526683635462551221145364643422311353
632541423444624336526576464457777686224586376437338832948677343497666833369685846994446858346385546773453274862246234173462724342631561154224
353552612514333121215745416727247272652423544685753368594647394695658845883548858535734584333432476287445274435882257755366724515216151451335
532166314441574113623175262414284358754786632434337878589943898388748395969493754638344944356356855723827482463322173565111471477266643531656
116644351623354144151425116542234543365536844644456554366885339853375594997998864974865377578863643354482658652565456654732562467462642222633
425265565534525427323521564886284475834357765873953575557676864375449896735695696945686539933897587748627756658646775714547636543542445454453
535223341313647443711526456446656284686644344893747447894898636684595668686646634379736944587367734766868686525582828566224141647377452234555
363661154543263115262561162483434662346246798873478436638737549697754638834495375733735333645433574877375276735684662372751455123234415466135
233425541263155564422777566657463284532222644739657858356574964435535676435594635788954898867344838753677578547362236357265747553176223645334
516113313346251471245336736766463235445577574763999559496983357388779634999695985559489635746544658453383775634426265623615715313624324613363
325162436525537742416463226466422582452664444569687695737766869564846698477563438574369658749388443473974527623665566388541124766765465414216
246532424466452274271137247462733834328375758733755764656833968984956876697799766884997394499744585594587876625677723447244217267426213343664
164356325132241765153442235356485242287535595375398869579646888545895757975449659944533834737579865398575662388572336243423321763313272155166
563615555622724634724833866443433524894838958833799835363644977657658578544664475868679458747866349983337933858733558557637772576116524351364
415635136113175137578553536586564768643559866697595733497557879468449998976698759797676436636689587877974934738258785642847435574452213713115
611145153512463742256332755487858466583796497738685664885658748948569545664445888744947857868589779795933867483673776857358564657524755764663
235565633417713142257732254688636564985938796475899556649457697557496557466787887559566976984578789695478656638728764846466352277661663613361
621414363456434251274757622526573747939964946885796964745598945469487687577499977988878866574434454755956575894225366755752223145132155653231
345131227736331632753528624737877993467633874573544566489488585879587798745544677645759486797999989373758553748378762622865225676664655255241
211147374365347566347683538644229836375367399779966469889799674657475784657559849567645885568589949973844765649576234674566626355732735375222
123377577423217135757464227844458664877347575684876765589445958984848645558957589999985649678755757487567997496322362828232445742466637677526
664165716524474573468574845478963396633746335989586478477469677874488696466969855457589699479795777786993453995866655558838835473455711456363
645354217411347423778226725287476938984748595969986859957845897656645797969945967774756979786597495489759753559534884668577746471267563715146
641123731653617153523878786635997676839634584755798896844786989789997886975976877949768456676679545757849946967975863276534664727276625714772
115172313432542554343534322666684547383747359496846665858866986576677885977798965677465955688547658777937483437698822255673227856674321437423
412316124234335666538374784464654983653484498444688865778477997658875656978599866558669858496479969969883747883595375635748886535531163731666
126215534552633672772444476653659865338587448788645985679486758768567978966789759768556688875958549895757653789978826784367383554244325537527
252471722164728674273366346869733763887789597776444684764998985757556667899857586887855996664484555498483585754587755247628423684671244526734
616643241174113524686752733973994433637977478579974486858559967566675596878985789668957757945476696698659695977366876442282382768473657366141
433715625621658365787576378559966694694594565764577974766866977599956779776859687775695787565694987685963787977966448785772368444344613132341
542654365337336826434765643879738646353964647955974749776876686976656857777555965796959755779797949695874357763646457888473355582731254116326
461216754736354442526774233456439439344649448885449769679668978899596596779679669865776767595846454969558697477357393642534444663773547743151
242515737157657333842228548349875463457585648494866999577597668698587656558567788999587689857767876885764484449548964773473277753231345166735
654521345226446835568566235799768737539786475876888887965595966585598966967969975867759665599758868667576445864433979732538253832712175534524
115512724255847238822523769738898864344596868468594857859588665686578579798878998656799555798598889485694534558457599364226342568753677472213
111524524557584843753648338688446565566879945758747566968678858898688798787995576956865896565768766698768659698554344826255288878683415552615
775523534424885336584535598468769386864885649976596679699998877966986778776767559667869889767766556949956568378399476985828735885425764761532
617234235723887272453554398456849533986998847969886896697596899979688786876777696866697569685659688446949473894494359678374775655237573674227
731315731775542663287374348536374735499748575465485866966768699899697997797776666566989778755777686999847946948853933693544267753841326646546
722426246522232587267567746363433367778759685487558796666966958776698867986668698666876866775886659846776955633755765593638285378256357434712
174725351666826552875547497865663863549888789874668876958895676696978768897788786788566955869997548858768874638777786742243328886625132571731
611354237262464432722652894576534365759676599966965877965957687768769888968769696957679665987557457444944459839769348686383583662783465636276
435775645554577458385385799454458446877466964957585556758766679978876698869886969697899756896864788684659949467367797467452464686586746747527
326715157438852348356648795697795987947557758498877979757678677886679987996677668886868888557795864545877549896579885386328386465786533157726
453273273424255488663856445483976736667859995777897779896656697978997888787987898778776958957796758748894869487957534497554376546868722122324
224573216435873475783673336556553645879964994546857977556976898696968678989979687688777875655579994576659674597887987885384834758677414425113
356241135726344637684746374354974769468887978766569659956588999669799779786678667886579699675678884889486587434679643859352582448655434457222
466565323122567376356874397989745956794895966548765989989778688799697678896789997978696969665976575677558444868875986457762338452225134143337
362264215456463347238855743779549969969487765646768855768895876877976886666866799968989767688568764586578687569679978449782326532643416155546
671362724447463788282378857469553747694544454845755975585656699878677799678797776968799697957896898878765444867363549353272748888443452166364
632542654733754847425787585687488755596748847964799999775985798869786789699666867675565568797969676665954954838875438688564548862244145146171
333723417316447367476286584684499973896998895898557855668598997699996977697796768788767776689759949696664864687338847464274357245662617625121
732722335132788573566373398994377893654688989578766978658865988697879899789898877758688978567997675756877983739477395738266566365866553224517
147177514747474242267782783587784747967985778647866665897959877679967669667689876857669669767556998597597497483549887695587764775634662343617
152744472376652374322667687839455953897495766449899756875956679668789688868676978978876787578985556849965685833354883453248267842384616432657
217227543612352346346455856939488455758985798868598588765697888677977868879697796686766696678556576857569777547694747435272652536672167123712
744625215616674868776537785459394998859647888485449778786556769796876987889777989756758976977758496584958578978633843394583557326773745211217
353354332722486863626455784779737558677796677557648786868756998567779997999757769989968679778794444858495938377534839655447657354377534537617
351162251452745473452566496983484689397949849568679798775655588857855767769795678968695766898846549555848585493436735966444566758545364773274
546334341147183722785558798496869978864895677895756565879578585766957665575757696669676677769768545948765446463585354842584745473612425647573
235615763364478535767825263879546994497978874484569465769576969857869669765659777668868977865946966479776587987999955433355672374557554754214
162177325222163583735436483646438894396659587698644456886655596959879587966867768858997789444759867989565846639353845278562446263633245724416
324535255452483383635664425784958857579867676497445879975595969977679879855779697798889657664476857564676937793853344868547244368834643131142
121347276513238722442368557665693779499584456766988769868757758795788956896585869778678687556788794995887699638544336543625582864246234111541
357771157266317334828437783465549356369747964978875778866775965679685977988796799568586768676664767564576835757749675276226376757244531177246
336664616327762746632336856333359783983467896468668468658857596888666655696975568657694759566847599666396674475446532283582787232143364371132
644533212754142233635788744897443835653636699755644785889878558985567878858696858779788657475547995487649399794638387758824355331366214575725
222217676717612667687783367437478679946969645869469768494864887557985785659965856994457654994548995554598868743539788752855264561637271324324
356452154463414577848785374339498366535638544946846765677495769785557579699659788879447959897745467466459849543743454246822537753427335371562
343351256333451586862433643627656985753774749546555768998795848687576559887698545798748988498774696693748665338953758884323743215516455337651
511156433162323673647444877388393898578477588665844949845684789786485757669794987664595874795599974455755347864958728824643583546532455523751
156124537652656126446766564883685565845949468648655489495444579455874554846945778967786444756587898964737436487344256846452377111452125151424
515264356113762652852852632686537484556764597765774578755556886965448899978985694964457598494775673883444869546887836668355228143455736361562
263512646525146141226625365446528679473694599878945468469659775468694555669548954648468546665655847884688365888823562232347546127534712221733
631415241711525626678448673422265459959576695493999586674865475767744965494946497644686744965594334353963643655244478563353652375272512755651
233341711151632262167275682837682337594668593834657957999678754665457846558698875995554875885564465558544593484682334467458266753354353656363
222614621174264456548568855775763264556684446457483755666594465554896878549965797747587445795345639937745754468637877328233727712145444373316
551136576466563613374865837744634548656596546959875864946578986489646467467887584454698786369755639588797883757583882864432762672266561742114
311433545766254471655428367633528758869667674337353886355568568977559794557448545869856978986385835684993879575657778365536445625371464633155
223612464456771261577683747465843843667648368983574634838577897765496687876598844667977633334687854753563787465237347324763236171472235426346
411245121677351625555347323585443444334598696449339998397379788744556985684748696646376458494657966586849537253887746577841254462522431254352
344346233632636772414765673728476885836598589955558748979779588656646877576889768598337348786569379345443684386546372358847445714773517622512
155323536362462251246768675874228887274856495665585569666835536867574987794867838438565638693854398377677783434776265675564455312663443423541
331566446775752674417132753235465665833378447847639386878845593445734945386694688999635777683567968539426228468486664337643254264256612362121
243564654224225645722672382353864676463257496747548887493585987546678658735985743376384577953533946647357564447863573451724364472125432653566
342315614225414552353574355435638346877654437484463854837898965395385547754648364866393337683989446882326338262227448314144441743477561422165
513316635431624236671443348277886572254832458877847668477593794644585888563857755634797589885668862754772785358487877315135613177367144545513
463143244643262172563515774358878556748352525757567987986693359853994963575439443448643467386743366524235883462535432614464455735443452664134
365641135114444646623465131227245648484522527682468766639838853356859443957586854538395483886846572325432336737857272623363152162131551135414
416313341334271754356764361744638674522648825426627539586358437534848469663986377869797354638474474353788632454247175546246417444136416435644
224353155431264253763746646441542886447853826453463553364576374757797585985553484899859547773742768633328427884282476754133441524461616242643
141663652631255115673535171111246265842334873322667887864398959494389595436394448689564435578232373254536888873517235136312276614212451451513
124131511566566612435515461237554545678463532355284383577958338477334574565899548354995646534573786226335788675417311262514713363312364535154
423124641651141434731445642547213258886735546328578275442562699767675575457466479427885838355373878586875834224154546773247146645646322335264
412644326632526437735316412561445417468882886666655743427476665574794946797787288666754744722668682487625266217525212752446411411125122652443
533453646465125514654252753512273714342227373732733663723654553522224855828427587263828376724486786422622551345652174733731235533661345526462
431416626556561415256423726364711356216462533453778624228776264745488556248346558664685886255267664468734267241413666377354236365315112133322
115242144546551242654657115464153653733572255453735867582743877872748475375858445224247557346684865447435434415136572343667245436453541641214
211445545143351463615353774344215444543156828652686467572385233427763332873666832447256386848435536242337137777716372765516254142315334335233
345124663224645321264314114673647256557756426376735374628552375257437773764536467386624358238642865332573246663566211211655655563524242452555
314351264524343426135362454521352527263736457447533445374485277766767738682474542365754582457568722614424111744153725635141565436222616112315
525142531331665442641251651451342365334554162254374267466577736465886625773232626738363773743786773241666727445735231415436342625513255235151
543245142256442454155334231734217734761146755176638778856523266374354672783363252424683478557527343237227211135754547531342136551132351221533
241355115114515145351235241342577311663523713245571552423844478483444456674576776374774635321762611146175633416417526461446534624524525232351
413212231435125464562416642131514721163172662635774761555772466528432746222877628357558463622434577676277711461224526611415645224221334321153
424114552242412235261232556412366663124614547557116436567672766285253724382874567666431356536715216512355113511563132462412461555112225422135
322324544333135432235125224253374616723165212337472223432464246434784434268261665524555163346167575177573432151165141342526636661664333152245
533322454514225135644666511564116113743567665217446774461763723457213436114546254524754413534661176555531123216654634336153535555615455221351
345114245113253556125335351622625171466165175642167753751336711273734343723253343654164414153211641676412352766561245653215262351455523141451
142421541514212154334545211465656444644552463442357616615277117635256363621723512341776351424463622726131565431516465664346151153212233245553
444314343434312135211364665242441535527647475416223551347736416724264751235567161762631557147415445546211321423221136662344161541525343455425
513343214231252255165411335621632642146147645756642561211667322537371252122672641421372561555336143123644446534414131135624333443543522413531
151133414553422411155141354122545416221132657162133367556711163132611352466177573117122527412137673543111622364234433423115531533515415532534
344341433553215433332561124312211661162315615567541645475225431414323527474442612165214546553775576346352241352363416414626442233143123431324
312334123334252355135521123323245125516132154636463653576675247514555746177477533534522123547665145656414436131454466514531422525141331441324
221234522113214232242154165523542235561622643243233434644217742623556626525264626677654256257462621433131425222466152534235213545112335523443`;

// From @itwin/core-bentley
class PriorityQueue {
  _array = [];

  /**
   * Constructor
   * @param compare The function used to compare values in the queue. If `compare(x, y)` returns a negative value, then x is placed before y in the queue.
   * @param clone The function used to clone a value for insertion onto the queue. The default implementation simply returns its input.
   * @note If the criterion which control the result of the `compare` function changes, then [[PriorityQueue.sort]] should be used to reorder the queue according to the new criterion.
   */
  constructor(compare) {
    this._compare = compare;
  }

  /** The number of values in the queue. */
  get length() { return this._array.length; }

  /** Returns true if the queue contains no values. */
  get isEmpty() { return 0 === this.length; }

  /** Returns an iterator over the contents of the heap suitable for use in `for-of` loops. */
  [Symbol.iterator]() { return this._array[Symbol.iterator](); }

  _swap(a, b) {
    const temp = this._array[a];
    this._array[a] = this._array[b];
    this._array[b] = temp;
  }

  _heapify(index) {
    let candidate = -1;
    while (true) {
      const right = 2 * (index + 1);
      const left = right - 1;
      if (left < this.length && this._compare(this._array[left], this._array[index]) < 0)
        candidate = left;
      else
        candidate = index;

      if (right < this.length && this._compare(this._array[right], this._array[candidate]) < 0)
        candidate = right;

      if (candidate !== index) {
        this._swap(candidate, index);
        index = candidate;
      } else {
        break;
      }
    }
  }

  /**
   * Reorders the queue. This function should only (and *always*) be called when the criteria governing the ordering of items on the queue have changed.
   * For example, a priority queue containing graphics sorted by their distance from the camera would need to be reordered when the position of the camera changes.
   */
  sort() {
    for (let i = Math.ceil(this.length / 2); i >= 0; i--)
      this._heapify(i);
  }

  /**
   * Pushes a value onto the queue according to the sorting criterion.
   * @param value The value to insert
   * @returns The inserted value, cloned according to the [[CloneFunction]] supplied to this queue's constructor.
   */
  push(value) {
    const clone = value;

    let index = this.length;
    this._array.push(clone);

    while (index !== 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this._compare(this._array[index], this._array[parent]) < 0) {
        this._swap(index, parent);
        index = parent;
      } else {
        break;
      }
    }

    return clone;
  }

  /** Pushes a value onto the back of the queue without making any attempt to enforce ordering.
   * After using this function, you must manually invoke sort() to ensure the queue is sorted again.
   * @param value The value to append
   * @returns The appended value, cloned according to the [[CloneFunction]] supplied to this queue's constructor.
   */
  append(value) {
    const clone = value;
    this._array.push(clone);
    return clone;
  }

  /** Returns the element at the front of the queue, or `undefined` if the queue is empty. */
  get front() {
    return this._peek(0);
  }

  /**
   * Removes the front-most element off of the queue and returns it.
   * @returns The front-most element, or undefined if the queue is empty.
   */
  pop() {
    return this._pop(0);
  }

  /** Removes all values from the queue. */
  clear() {
    this._array.length = 0;
  }

  /**
   * Removes the value at the specified index from the queue and reorders the queue.
   * @param index The index of the value to remove
   * @returns the value at the specified index, or undefined if the index is out of range.
   */
  _pop(index) {
    if (index < 0 || index >= this.length)
      return undefined;

    const root = this._array[index];
    this._swap(index, this.length - 1);
    this._array.length--;

    this._heapify(index);
    return root;
  }

  /**
   * Returns the value at the specified index in the queue.
   * @param index The index of the value to retrieve
   * @returns the value at the specified index, or undefined if the index is out of range.
   */
  _peek(index) {
    if (index < 0 || index >= this.length)
      return undefined;
    else
      return this._array[index];
  }
}

function makeNode(x, y, dir, steps) {
  const key = `(${x},${y}) ${dir}${steps}`;
  return { x, y, dir, steps, key };
}

const directions = { E: [1, 0, ">"], S: [0, 1, "v"], W: [-1, 0,"<"], N: [0, -1,"^"] };

function move(pos, dirName) {
  const dir = directions[dirName];
  return { x: pos.x + dir[0], y: pos.y + dir[1] };
}
  
function shortestPath(weights, minSteps, maxSteps) {
  const q = new PriorityQueue((a, b) => a[0] - b[0]);
  const distances = {};
  const previous = {};

  const endX = weights.length - 1;
  const endY = weights[0].length - 1;
  
  function getNeighbors(node) {
    const neighbors = [];
    const addNeighbor = (pos, dirName, steps) => {
      pos = move(pos, dirName);
      if (pos.x >= 0 && pos.y >= 0 && pos.x <= endX && pos.y <= endY)
        neighbors.push(makeNode(pos.x, pos.y, dirName, steps));
    };
    
    // for (let steps = node.steps + 1; steps <= maxSteps; steps++)
    //   addNeighbor(node, node.dir, steps);
    if (node.steps + 1 <= maxSteps)
      addNeighbor(node, node.dir, node.steps + 1);

    if (node.steps >= minSteps) {
      const turns = directions[node.dir][0] ? ["N", "S"] : ["E", "W"];
      for (const turn of turns)
        addNeighbor(node, turn, 1);
    }

    return neighbors;
  }
  
  const s0 = makeNode(0, 0, "E", 0);
  const s1 = makeNode(0, 0, "S", 0);
  distances[s0.key] = distances[s1.key] = 0;
  q.push([0, s0]);
  q.push([0, s1]);

  while(!q.isEmpty) {
    // console.log(q._array);
    let smallest = q.pop()[1];

    if(smallest.x === endX && smallest.y === endY) {
      const pathLength = distances[smallest.key];
      const path = [];

      while(previous[smallest.key]) {
        path.push(smallest);
        smallest = previous[smallest.key];
      }

      const map = weights.map((row) => row.map((wt) => `${wt}`));
      for (const node of path)
        map[node.y][node.x] = directions[node.dir][2];
      
      console.log(map.map((row) => row.join("")).join("\n"));
      return pathLength;
    }

    const neighbors = getNeighbors(smallest);
    for(const neighbor of neighbors) {
      // console.log(neighbor);
      const alt = distances[smallest.key] + weights[neighbor.y][neighbor.x];

      if(undefined === distances[neighbor.key] || alt < distances[neighbor.key]) {
        distances[neighbor.key] = alt;
        previous[neighbor.key] = smallest;

        q.push([alt, neighbor]);
      }
    }
  }
}

function part1(input) {
  const weights = input.split("\n").map((row) => row.split("").map((wt) => Number.parseInt(wt)));
  const path = shortestPath(weights, 0, 3);
  console.log(path);
}

function part2(input) {
  const weights = input.split("\n").map((row) => row.split("").map((wt) => Number.parseInt(wt)));
  const path = shortestPath(weights, 4, 10);
  console.log(path);
}

console.log(part1(sampleInput));
console.log(part1(realInput));

const sampleInput2 =
`111111111111
999999999991
999999999991
999999999991
999999999991`;

console.log(part2(sampleInput));
console.log(part2(sampleInput2));
