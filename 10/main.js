const sampleInput1 = `.....
.S-7.
.|.|.
.L-J.
.....`;

const sampleInput2 = `-L|F7
7S-7|
L|7||
-L-J|
L|-JF`;

const sampleInput3 = `..F7.
.FJ|.
SJ.L7
|F--J
LJ...`;

const sampleInput4 = `7-F7-
.FJ|7
SJLL7
|F--J
LJ.LJ`;

const realInput = `F-F7----F7-7-J--J--7FFL7F-7FFF77JFL|7|-L7--F77FF-FF7..-J7.F---FF7-|-JF7-J-F|-7FF|-FLL--7F-F--.--|77F|F---7-F--F7.L7F77|F----FF-F7FF.F-.L.L.J
7-L--|J|||FL-7|-|F7-LJ|F|-F7FJ|7.F-|-L7L-7LJ.-F--F.L--J---7|J|.|.LL||-|.F-|JL.FL.LLLJ7F7JL7JJ7-FL7L-F7L|J|FLJ.|JF--JFJJL7L.|LJ-|7F|-JJ77..F|
|L|.7JF|J---J|J.|F.|L7LFFFJLJFJF7F77.F7.L7L-7F|7FLFJ.|F7J|LL.--|JJ|FJF-7J7L7|F-L---7J.|.F-|-F-7.LL7.|JF--7-7L7|7||J-|JJJFF||..|L7L7FJL7777FJ
J-FJJ-L|LF7|.|-F|J-|7J7LLL--7L-J||L7.FL|JFF-J-LL-JJ.F-L7F|-FF|||L7-LF7J|F|7|F7JFJ.L|J.L7JJF77-77-LL-JL|.J|LJJL7.F|..LJ.F--.LF-|.7F|FJ7|-F--J
|FLJJ.L|F|LFF-.7J.FLJ-7.LFF7L7F-J|FJF--7|FJJF-7|-|L|-7F7-JF7F--7.--FF77-F.|FL|FJJ|7|-F7.LF-J-FJ|-.LL|.LF-7J|7LJF7L-L-F---|-F7F-|J7||.LF7LJJ.
77|FF-FL-L-7J|L|-7-||FL7.F|L-J|F7|L7|F-J7.F-FFF7.77JFFJ||J||L-7|7LFFJL7F7.LJ.|7|.F-J7FL---|J-|JJJ7F|L7F|.|FFF7J--7J|.LJ|L|.FL-LLF-J|FLL--J.|
|-F|J7L77-7J7|7L-|-J---JFFL7F-J|||FJ||F777JF.FJ|F7F-77-FF7||7J|L--7|F-J|L7|F7LJ-7J7.F7-7LLF-FJ-|JFJ|FL|J7L|JL|LL|JLJ7.FL-77LJ|L7.L|FLJL||-|J
|LJJ|LJ--.L.LJ||LL|J|FLFF--JL7FJ|||-||||-|7JFL7||||FJF-7||||F7L7F7LJL7FL7|7|--|F--7FJLL|7FJF||L77JLFJLL7FF|.F7LL|-JJL7LJF.J7.77L-FL--7.L|7|J
FF7L|JJF|7..JFLF-JFFJJ-LL---7|L7LJL-J||L-77FF7|||||L7|FJ|LJLJL7LJL-7FJF7||7||FFJJ-L7J7JJ|.FF-77LF..LF.LFF-JLL|-7L.F--J7FF7|LFJJ--JJ.F7-L77L-
FJ|||--JLJ.FJF-JF-.F7L7.LF7FJL7|F----J|F-J--|LJLJLJFJ||FJF----JLF--JL7|LJL7-|7||.F|LF7-F777L7L77F-7.F7F77.FF|JL7JF-JFJ-FJJ.F.F7.F7|FJL|JL|||
77J||.77.LLF.J7F|----7JLFJLJF7|||7F7F7||F7|.L-----7L7||L7L-7.FF7L---7LJF-7|||-77.F7.L|.FJLF7L7L-JFJFJLJ|-F-F-7F---7|77FL-J-77LF7|7|7..|.FFF-
|J7|L7L|77.-7J7LJJ|7|LFJ|F7FJ|LJL7|||LJLJL7F-7F7F7L7LJ|FJF-JF7|L7LF7|F-J.LJF7|L|L7.-7FF7-FF77|F--J||F--J||-LJ|||JLLJJL|.LJ.J7FJ--7L-7-J7.LL|
|FL7F|7|L77LJ7FJ7.LF||J.LJLJFJF-7|||L7F--7|L7||LJ|-L7FJL7|F-JLJFJ7|LJL-7F77|L7J|LLF-FF||-||L-JL7F--JL--7-|L|L|7|7.|7.FF7|||JF7.LJL7||FF-7.FJ
.F7L7.--7|LF7F.||-7L-7JFJF--JFJF||||F|L-7LJFJ|L-7|F7|L7F|||F---JF7L-7F-J||FJFJ-F--J-LFJ|7FL--7FJL-7F---JF77|LF-7L7FLL7LJ-J|.L|F|.|LFL7JJL7||
J|L.|F-JLL.LJ-|7|.L7|J7LFL--7|F-JLJ|FJF7L-7L7L--JLJLJFJFJLJ|F-7FJ|F7|L-7|||FJ7J.|7||||FJF7F--J|F7FJ|F-7JF-7FFJFJF7JLF7J|.|LJLF-J--.7LJ.F.|L7
F||FLJ7|FL-JL.LF-F7F77JF---7LJL7F--JL7|L--JJL7F-----7|-L7F-J|FJL7LJ||F7||LJ|F7F7F7-F-J|7|||F-7|||L7LJFJFJFJFJFJ||||FFJ-J-L7|F|FJJ|F-7LJ--|.-
FLF7.LL77F|.FL7L---|L77L--7|F7FJL--7FJL--7.F7LJF7F-7|L-7||F7||F7|F7LJ|LJ|F-J|||||L7|F7L7||LJFJ||L-JF-JFL7|.L7|F7|L7F-7-LF7F7FF|LFF7.FJLL-7.J
F-F-7F||F||--.-7|JF|FJ7JF-JLJLJF7F-JL7F--JFJ|F-J|L7||F7||LJ|||||LJ|F7L--JL7||||||FJLJ|FJ|L7FJFJL7F-JF-7FJ|F7|||LJFJ|FJ.F-JLLLJ|FLLJ-|-LLLL7.
F.|--7F7L|J7|FFF7L-|L7F7L7F----J||F7FJ|F-7|FJL-7|FJ|||LJL-7|||||F7LJL7F7F7L7|||||L-7FJL7L7|L7L--JL--JFJ|FJ|||LJF-JJ|L7FL-J|7|-LF.F|J..|FLL|7
||J7.L7.7JF7-F7-|LLL7LJL7LJF7JF7|LJ|L7|L7LJL7.FJ|L7|||FF-7|LJLJLJ|F77||LJ|FJ|LJ||F-JL7FJFJL-JF--7F---JJ|L7||L7FJ.F7L7L7JFJFJLF7JFJLF.F777F|.
FJ7-LF-7||F.FJL.LFL7L--7|JFJL-J||F-JFJL-JF--JFJFJFJLJL7L7||F-----J||FJL-7LJFL-7||L7|FJL7L7F--JF7|L7F7F7|FJ|L-JL--J|J|FJF77.|7FJ7JL-LL7J|L7|L
|7|JL|JJ-|.7LJ7FF|FF---JL7L7F7FJ||F7L7F--JF7-L7L-JF-7FJFJLJ||F--7FJ|L7F-JF7FF-J|L7|FJF-JFJ|F--J||FJ||||||LL7F-----JFJL7||J..|||77F7LJ|-7FJJJ
FF7-J|JJFJ.L|L|FFJFL7F--7L7LJ|L-J||L-JL--7|L7JL--7L7||LL--7L7|F-JL7|FJ|F-JL-JF-JFJ|L7L-7L-JL--7LJL-J||LJ|F-J||F7-F-JF-J||LFFLJ-77|LJFL7LF.|7
|J|L7J|F7-|.F7|F-F-7LJF7L7|F7L--7|L--7F--J|FJF7F7L7|LJF---JFJ|L-7L|||FJL7F---JF7L7L7L-7L-7F7F7L-7F--JL7FJL-7|FJL-JF-J7FJL7F-77LLJ-L.77FJF7||
L.|-F7-L|.LJ|7J-FL7|F-JL-JLJL7FFJL-7FJ|F-7|L7|LJ|J|L7LL---7L-JF7|FJ|||.FJL--7|||FJFJF7|F-J||||F7||F7LFJ|F7FJLJF---JF-7L-7|L7|7J||-L7LLL7|-||
L|.FL--JJ7F-JL|LF-J|L-------7L7L-7FJL7LJFJ|FJL-7L7L7L7F-7|L-7FJLJL7|||FJF---JFJLJFJ7||||F7|||||||LJL7L7||||F--JF7F7|FJF7|L-JL7.L---77F7J|.JJ
F77|7.|LFF|L|77.L-7|F7F7F--7|FJF-JL77|F-JFJ|F77L7L7|FJL7|F--J|F7F-J||||FJ.F7|L--7|7FJ||||||||||LJF--JFJ||||||F7|||LJ|FJLJF---J7LJ7L|7L|.LJ7.
LJ-F7J|F-LJ-7|LF7FJ||||||F7LJ|7L-7FJFJ|F7L7|||F7L7LJL7FJ|L--7|||L7FJ|LJL--J|F--7||FJFJ||||||||L-7L7F7L7||||L7||||L-7LJF--J-F--77L||L|-J77||7
L-JLJLFL|7F|FF-J|L7LJLJ|LJL-7|F7-||7L7|||FJLJ|||FL-7FJ|FJF7FJ|||FJ|FJF--7F-JL-7|||L7|FJLJLJ||L--JFJ||7|LJ||FJ|||L7FJF7L----JF7|77.7-LL|J.|.7
-7-F|F77|JF7-L-7|FJF--7L7F--JLJL-JL7FJ||||F--J||F7FJL-JL7||L7LJLJFJL7L-7||F-7L|||L7|LJF----JL---7|FJL-JF-J|L7|||FJ|FJL-----7|LJJ-|L7||.F-JF7
LLJ.|F77.F7JLF7||L-JF7|FJL--------7||FJ||||F7-|LJ|L---7FJ|L-JF7F-JF-JF-JLJL7|FJLJFJ|F-J-F7F7F---J|L---7L7||FJ||||.|L----7F7LJF7-J|7.|F77-J-|
-.F-7-|J-FJ-FJLJL---JLJL----------JLJL-J||||L7|F-JF---JL7L7F7|LJF7L7FJF-7|FJ|L--7|FJL7F7|LJ|L--7FJ-F7FJFJFJL-JLJL-JF7F--J|L--J|JFJJ.L|L77|L7
.LFJJ7L7FJLFJF--7F-7F7F----------7F7F7F-J|||FJ||F7L--7F-J7||LJF7|L7||FL7L7|FJF--J|L-7LJ||F-JF7L|L7FJ|L7L7L7F-----7FJ|L-7F|F---J-7-F7F---7.|J
FL|--JLJ7-LL7|F-J|-LJLJF--------7LJLJ||F7|LJL7||||F7FJL7F-JL7FJ||FJ|L7.L7||L7L--7|F7|F-J|L7FJ|FJFJL7L7L7|FJL----7|L7L-7L7|L7F-77|.L-LJ.F-7J-
|..7F|7F7.|FLJL-7|F----JF7F-7F-7L7FF7||||L-7FJ||||||L7FJL-7FJL7||||L7|F7|||FJF7|||||||F7|FJL7|L7|F7L7|||||F-----JL-JF7L-J|FJL7L--777|7FL|J..
LF-|FJ|7|FFF----J||F7F-7|LJFJ|JL7L-J||||L7FJL7|LJ||L7|L-7FJL7FJ||L7FJ||||||L7||FJLJLJ||LJ|F-J|FJ||L7|L7|LJL7F7F7F7F7||F7FJL7J|F--J7F7.7-F7-J
F|7L77LLF7|L-----JLJ|||LJF-JFJF7L--7LJ||7|||FJL-7|L7||F-JL-7|L7||JLJ-LJ|||L7||||F----J||FJL-7||FJL7||FJ|LF7LJLJ||LJLJLJLJF7L-J|7J-77JF-FJ.L|
L-J7.|-J|||7F------7LJF--JF7L7|L-7LL-7|L7LJFJF7FJ|FJ||L-7F-J|FJ||F7|F7FJ||FJLJ||L-7F-7L7L7F7||||F7|LJ|FJFJL---7LJF7F7F---J|F-7L-7-L7|F--F-F7
|||F7JJFJFJFL-7F--7L-7L---JL-JL-7L---J|FJF-JFJ||-||JLJ|FJL7FJL7LJ|L-JLJFJ|L--7||F-J||L7L7||LJ||LJ|L7|LJLL7F7F7L--JLJ|L---7LJ|L--J77LF--J...|
F--7JF7LFLFJF||L7FJF7L---7F7F7F7L----7|L7L7FJ7|L7LJF---JF7|L7FJF7L--7F7L7|F7FJLJL-7L-7|FJ|L-7LJ7FJFJF77F7LJLJL-----7|F--7L--7-|FLFL|L7||J7|7
F-LFFLJ.|J|J-FJFJ|FJ|F--7LJLJLJL7F---J|FJFJL-7L-JF7L---7|LJFJL-JL7F-J|L7|LJ|L7F---JF7|||7L-7|F--JFJJ|L7|L-7F7F7F---JLJF7L---JF-77|LJFJJ|F-||
L|FLFJF|L-||LL7L7|L7LJF-JF---7F7|L---7|L7L-7FJF7FJL----JL77L7F---JL7FJFJL-7|FJL--7FJ|||L7F7||L7F7|F7L7|L-7LJLJ|L--7F7FJL---7LJF-L77.L.F77.F|
L-JFL-7JF.J-7FJFJL-JF7L--JF--J||L----JL-J7FJL7|LJF7F--7F7L-7|L7F--7|L7L7F7||L--7FJ|L||L7LJ||L7||LJ||FJL--JF-7LL---J||L7F---J-LJFF|-F-J.L-F7J
F|F--||-JJ7.FL-J|F7FJL--77L7F-JL----77F7F7L--JL7FJ||F-J||F7|L7LJF7|L7|FJ|||L7F7|L7L7LJFL7FJ|FJ||F-JLJF7F--JFJF7LF-7|L7|L----77FF7JFLJ7F|-FF7
LF-J.F-7.L|7LJ7F-J|L-7F7|F7LJFF7F---JFJLJ|F---7LJ7||L-7|||LJFL7FJLJ7LJL7||L7||||J|FJ7F--JL7|L7LJL-7F7|||JF7L-JL7L7||FJ|F----JJ7F7|LJFF7L-7L7
JJ|J.7L77-LF-|-L-7|F7LJ|||L---J|L----JF--JL7F-JF--J|F7|||L-7F7|L----7-FJ||FJ||||FJL-7L7F7FJL-JF---J|LJ||FJ|F-7FJFJLJL-JL-----77|L7L-FL|.|J||
..FJLF.F7-FJFFJLL|LJL--JLJF---7L------JF7F-J|F7L--7LJ||||F7LJ||F---7|FJFJLJFJ||||F7FJFLJ|L---7L---7L7FJ|L7|L7|L-JF7F7F7F-----JFJFJLLJ.|7F.-J
FF|7.JFJ|--F|J-J.L-7F-7F7FJJF7L----7F--J||F7LJL7F-JF-J|||||F7||L-7J||L7L7F7|FJLJ|||L-7F-JF---JJF--JFJL-JFJL-JL---JLJLJ|L7-F-7FJFJFF|J-|F-F77
F77F.|-|77.LJJ||F|JLJ7LJLJF-JL----7LJF--J||L---J|F7|F-J|||LJ||L-7L7|L7|FJ|LJL--7||L7FJ|F7|F-7F7L---JF--7L-7F---------7L7L7L7||FJF77-.|L-.L7-
LF7L-L7JF7.|---F7F77F--7F7L------7L--JJF7||F7F-7||||L7FJ|L-7LJF-JFJ|FJ||.L7F-7FJ||LLJFJ||||FJ||F-7F7L-7L7FJ|F--------J-L7L7|LJL-JL7J-J-L--J7
L|.-J|.|||L..FFJLJL-JF7LJL-------JF7JF-JLJLJLJFJ||||FJ|FJF7L7LL7FJ|||.LJF7||-||7||F--JFJLJ||FJ|L7LJL-7|FJL-JL-7F----7F7FL-J|F7F---JJ.|JF7JFJ
.77|.LL7-L7--FJF-----JL-7F-7F-----JL-JF-------JJLJ||L7||FJL7L-7|L7FJL7F-JLJL7|L7LJL--7|F--J|L7|FL---7|||-F7F--J|F---J||F-7L||LJF7F7-|7FLJFFJ
FL7-777|7.F-7L-JF-------J|FJ|F--------JF----7F7F7FJ|FJ||L7FJF-J|FJ|F7||F-7F-J|FJF7F7FJ|L7F7L-JL-----JLJL-J|L---JL-7F-JLJFJFJL-7||||-|F7.FF-J
J7L|L7-|J.LFFJ|-L---7F---JL-JL7F-7F----JF---J|LJ|L7|L7|L7|L7L-7LJFJ|||LJFJL7FJ|F|LJ|L-J7LJL7F7F7F-7F-7F7F7L-------J|F---JFJF--J|LJL--J|7LL|-
|.FLJJFJJ|7FJ7LFF7F7LJF7-F7-F7||7LJF7F-7L--7FJF7L7|L7|||||||F7L77L7|LJF-JF7||FJFJF7L-7F7F7JLJLJLJ.||FJ|LJL---------JL---7|FJF7FJF7F7F7|LFFJ|
LFFF|J..L|-7.FF-JLJL--JL-JL-J|LJF--JLJFJF-7LJFJ|FJ|FJ|L7LJFJ|L7L-7|L7FL-7|||LJFJFJL-7LJLJL---7F7F7LJ|FJF7F7F7F7F--------J||FJLJFJ||LJLJ.7JL7
7|L-7.-7.L-|-FL-------------7L-7L--7F7L-JFL--JFLJ.LJFJFJF-JFJ-|F-J|FJ-|7LJ|L-7L-JFF7|F-7F7F-7LJLJL7JLJFJLJLJLJLJ7F-------JLJF-7L7LJJJ|J-F-|J
FJ7LL-|JF-LJ.||F7FF7F7F7F--7L-7|F7|LJL--------7JF7F7L-J7L7FJ|FJL-7LJ..F-F-JF-JF---JLJ|-LJ||JL7F7F7L---JF--7F7F7|FJF7F-------JFJFJLLJ-L-JLJ|.
|FJF|-|-|.LJ7JFJL-JLJLJLJF7L7FJLJL------------JFJLJL-7F7FJL-7|F-7|F7F-7L|F7L-7L7F7F-7|F--JL7|LJLJL-----JFFJ|LJL-JFJ|L-------7|FJ7L7|.|J.|-LF
L|FJJL|.|J|.|JL---7F-----JL7LJF-7F------------7|F----J||L-7FJ|L7|LJLJFJFLJ|F-JFJ||||||L7F--JF7F7FF7F----7L-JF----JFJF--7F-7FJ||.|LL--J..L7FL
JL-JF7LF7-FF--7JF7LJF-----7L-7L7LJF-----7F---7LJL---7FJL-7||FJFJL7F7FJJFLFJL7|L-JLJFJL7LJF7L|LJ|FJLJF7F7|F7FJLF--7L7L-7|L7LJ-LJF-7|7FF7F.7J7
..|7|LF||FFJF7L-JL--JF--7FJF7L-JF7L-7F-7|L7F7L------J|F--J|||FJ7.LJ||J-|JL-7|7F7JF-JF-J7FJL7L-7LJF7FJ|||LJLJF-JF-JFL--JL-JF--7LFJF7LFJ-LLJL-
FFLJ-JL-|L|FJL7F-----JF-JL-JL---JL--J|FJL7LJL---77F7.||F77LJ|L777.LLJL7.L|.LJFJ|FJF-JF--JF7L-7L--JLJFLJL-77FJF-JF--7F----7L7FJJF77L-7J7F|F.J
||L|J7FLJLLJJ|LJF-----JF-------------JL7JL--7F-7L-JL-JLJL--7L-J-7JF|JFF|-7--|L7||FJF-JF7FJ|F7L7F7JF------JFJFJ7FJF-J|F---JFJL--JL7.FJ7-77|77
L-JL||JJJ7L7-FF7L------JF-------------7L7F-7||FJF-7F-7F----JJ|J7|F7L7JL--|||F7||LJFL--J||FJ|L7LJL7L-------JFJF-JFJF7|L-7F-JF7F--7|F7LJ-JJ--7
FJ.--|.|-L-L-FJL--------JF--7F7F7F---7L7LJFJLJL7L7|L7|L-----7J--7-JFJ|.J7-F-JLJL------7LJL7|7L7F7L7JF7LF7F-JLL-7|7|LJF7LJF7||L-7LJJ-7.F|J-J|
.LLL7J.J7|F|.L---------7FJF7LJLJ||F--JFL-7L7F7FL-JL-JL------J7|F77.JFJFL7.L--7F7F----7L---J|F-J|L7|FJ|FJ|L--7|FJL-JF-JL7FJLJL--J|FL-F|J.|JLJ
|-||F77|LLF---7-F7F-7F-J|FJL---7LJL-7F--7L7LJL------------7L|-JF.77.L-7-LF---J|||F-7FL----7||F7|FJ|L7||FJF-7L-JF--7L--7|L-7F--7J|-JFF7777F7J
|--7JLLJ7LL--7L-J|L7|L--JL--7F7|-F--J|F-J7L-7F---7F-------JF7-FF-J|7JF7.|L---7|LJL7L-----7LJLJ||L7L-JLJL-JJL7F7L7LL---JL--J|F-JJ||FFFF-7--J.
-7.|FF7-L.|F7L--7L-JL-7F7F-7LJ|L7L---JL----7|L--7|L----7F--7|.L|JF|J-L|7J-LFLLJF7JL--7F-7L-7F-J|LL7F7F-7F--7LJL7L-----7F7F7|L-7.|LF7FJFJ|.F7
F|-|7LJ7.F-J|F7FJF7F-7|||L7L7FJFJF7F------7||F--J|F7F--J|F-J7-|L-7J7|LLF..LJJJFJL--7LLJ7L-7LJF7|F-J|||FLJF7L--7|F-7F--J|||||F-J.||||L7L77F7|
7J||.FFJ-L-7LJLJFJLJL||||-L7|L7L7||L-----7LJLJF-7|||L7F-JL7...--7|7.--7L777L7FL7F-7L7F-7F7L--JLJL-7|LJF--JL--7||L7||F-7|||LJ|F7FF7|L-JFJJJ77
J.L..--|F|FJF--7L7LF-J|||F7|||L7LJL-7F---JF7F7|FJLJL-J|F--J..7|.-F77LLLF.FJ.7-FLJJL7LJFJ||F7F--7F7LJ-FJF--7F7LJL-JLJ|FJ|LJF7LJL7||L7F-J7|L7-
|-LFJ7|L-FL7L7FJFJFJF7LJLJ|||F7L7F-7|L----J||||L-7F-7FJL--77FLJ77.---JF-777F|7F----JF7L-JLJLJF7LJL7F7L-JF-J|L---7F-7||FJF7|L---J|L7|L--7J-LJ
J7FJ|||--J7L-JL-JLL-JL---7|||||FLJ7||F7F--7LJLJF-JL7||F---J|L|LFJ7-|FL-7L7F|-FL-----JL7F7F-7FJL7F7LJ|.F7L-7|F7F-J|FJ|||FJLJJF-7JL7||F--J|.|F
||L7-|L-7.F----7F7F------JLJLJL----J|||L-7L---7L---JLJL--7F77|J|FJ.F--L7-L-F7|JF------J|||FJL7FJ|L-7L-JL--J||||F7||FJLJL-7F7|FJF-J|||F7F7-7|
L-JL-L-7|F|F--7|||L-------7F-7F-7F-7LJL--JF--7L7F--7F-7F7LJ|7|.|J...|L|J|LFJFLFJF-7F---JLJL7FJL7L-7L7F-----J|LJ|||||F---7LJ||L7L-7LJLJLJ|-|-
||FL7JFJJ-LJF-JLJL-7F-----JL7|L7LJJL---7F-JF-J-|L-7||JLJL--JF-7J-|FJ|F7F|7|FJ7|FJFJ|F----7-|L7JL7FJFJ|F-----JJFJLJLJL--7L--J|FJF7|F--7F-J..|
|FF||7|.LF--JF7F--7|L-7F7F7FJL-JJF-----JL7FJF-7|F-JLJF7F7F--JFJJ.J7LF|F7||LJ-FJL7L7||F--7L-JFJF7LJ-L-JL-------JF-7F-7F7L----JL7|LJL-7LJ7.7FJ
F-LFJ-FL-L--7|||F-JL--J|||||F----JF--7F-7|L-JFJ|L----JLJLJF-7|JJ.||FF.L-L7|FFL--JL||||F-JF-7|FJL-7-F7F-7F----7FJ7|L7|||F7F-7F7LJF--7L--7F7-J
L|L|L-J7.J.L||LJ|F-7F7FJ|||||F---7|F-J|FJ|F--J||F7F---7F--JJLJJ-|7|F7FJ7JLF7F-7F-7LJLJL--JL|||F-7|FJ|L7|L-7F7LJF-JFJ||||LJF|||F7L-7|F-7LJ|.|
FL77.|F-F7--LJF7|L7||||FJ|||LJFF-J|L--JL7||F7F7LJ|L7F7|L7..||J-L|LFF-7.L7|||L7LJFJ-F77LF7F7LJLJFJLJFJFJL--J|L-7L-7L7LJ||7F7LJ|||F-J|L7L-7L77
L|.|F-FFJJ7FF-JLJFJLJLJL7|||F--JF-JF-7F-J|LJLJL-7L7LJ|L7|J-F||7.7LFJFJ7FF7||FL-7|F7|L7FJLJL7F7FJF-7L-JF7F--JF7L-7|FJF7|L-JL-7LJ|L7-L-JFLL-J|
--7|7|.J.J7F|F7F7|F7F--7LJLJL7F-JF-JJLJF7|F----7L7L--J7LJ-FLJ|F-JLL7|F7FJ|||F--JLJLJFJL---7LJLJFJ7L7F7|LJF--JL--JLJ-||L7F---JF-JFJF7JJLJJLJ7
FLLJF|7F-.FFJ|||LJ||L-7L--7F7LJF-JF7F7FJLJL7FF7L-JF-------7J--FJ-FF||||L7|||L----7F-JF----JF--7L7F7LJLJF7L----7F7-F7|L7|L--7F|F7L-J|7F|.|7L7
L7|F-J-LJ7LL-JLJF7||F-JF7FJ||F7L--JLJLJF7F7L-JL7F7|F------JJ-||7.J7||||FJ||L7F---JL-7L7F---JF7L-J||F---JL-7F-7LJL-JLJFJL--7L7LJL7F7L7F-77FF-
.JJJ|7LJ7L||F77FJLJLJF7||L7|LJL--------JLJL7F-7LJLJL7|F7F7F77-F777FJ|||L7|L7|L--7F--JFLJF---J||F7||L-7F7F7LJFL--7F-7FJF--7L-JFF-J|L7LJFJF7JJ
7.--FJJ77-FFJL-JF-7F-JLJL7|L-7F-------7F7F7LJJL7F--7L7|LJLJL7J|L7FJFJ||FJ|FJL7F-JL7F-7F7L---7|FJLJ|F7LJLJL----7-LJ7|L-JF7L7F-7L--JFJF7L-J|JL
|-|F7J|F|FFJF---J|LJLF---JL--J|F------J|LJL---7|L-7|FJ|F---7L7L7|L7|FJ||FJ|F7|L7F-JL7LJ|LF--JLJF-7LJ||F7F--7F-JF--7|F7FJL-JL7L-7F7L-J|F7FJJ|
|7J|L7||L-L-JF7F----7L-------7||F--7F7-|F---7FJL--JLJFJL7F7|FJ7|L7||L7|||FLJ||FJL-7FJF7L7L---7FJJL-7L-J|L-7LJF7|F-J||LJF--7FJF7LJL7|L||LJ7F7
L7J|.7L|LF-F-J|L---7L7|F7F7F7LJLJF7LJL7|L7F7LJF7F7-F7L-7|||LJLFL7LJ|FJLJL-7FJ|L7F-JL-JL7|F-7||L77F7L--7L--JF7||||F7LJF7L7FJ|FJL---JF7||JL|||
7F7J.|-J.77L-7|F7F7L7L-JLJLJL7F7-||F--JL7LJ|F7|LJL7||F-JLJL-7FF7|F-JL7F7F-JL7|FJL-7-F7F||L7L7L-JFJL7F7|F---J||LJLJL--JL7||FJL------J|LJJ-FJJ
LJ|F-JLF-|LJ7|LJLJ|FL-------7|||FJLJ-F--JF7LJLJF--J|||F--7F-JFJ||L7F7LJ|L-7F||L-7FJFJL7||FL7L7F7|F7LJ|||F---J|F----7F-7LJLJF-7F---7FJJLF-J|L
LL|JF|7FF7JF7|F--7L-7F7F----J|||L----JF7FJL----JF-7|LJL-7LJF7L7||FJ|L7FJF-JFJ|F7|L7L-7||L7FJFJ||LJL-7|LJL----JL7|F7LJFL--7FJ7|L--7LJL|F7|F|J
F|L.FF--JL7||LJF7L-7|||L-7F-7LJL7F--7FJ|L---7F7J|FJL-7F-JF-J|FJ||L7L7|L7L-7L7|||L7|F7|LJFJL7L7|L-7-FJL--------7L-JL7LF--7||.FJF--JJF--LJ-|J.
7JL--L---7||L7FJ|F-J|||F7LJFJF-7LJF7LJ-L-7F-J||FJ|F7FJL-7L-7||FJ|FJFJ|7|F-J.||||J||||L-7L7||FJ|F7|FJF7F------7|F7F7L-JF7||L7L7L--7.LLJL.L7.|
||L||LF--J|L7|L7LJF7LJLJ|F7|FJJ|F7|L----7LJF7||L7||||F-7|F7||||FJL7L7|FJL7F-JLJL7|LJ|F7L7L7|L7||||L7|LJF-----JLJ|||F7FJLJL7L7L7F7|JL|..JJ|-L
||-F-.L--7L-JL7L--JL-7F7LJLJ|F7LJLJF----JF7|||L7|LJ||L7|||LJLJ||F-JFJ|L7FJ|F7F--J|F-J|L-JFJ|FJ||LJ.LJF7|F7F7F7F7LJLJLJ.F-7|FJ7||LJ.F-F-J---|
F|F|LFJJLL-7F7L------J||F7F-J||F---J.F7.FJLJ|L7||F-JL7|LJL7F--J|L-7L7|||L7LJ||F7FJL7LL--7L7|L7||F7F--J|LJLJLJLJL7F7F--7|FJLJF7LJ7|F-7L77-.FF
-JLF-FJ|.F-J|L--7F-7F-JLJLJF7||L-----JL-JF--JFJ|||F7FJL7LFJL-7FJF-JFJL7L7L7FJLJ|L-7L7F7FJFJ|FJ|LJ|L--7L---------J|LJF7LJL---J||LLLJ|||L7|F-J
|.|J-LFF7L-7|F--J|FJ|F-7JF-JLJL7F---7F--7L-7FJFJ|||||F-JFJF--JL7|F7L7FJF|FJL--7|F7|FJ||L7|FJL7|F-JF7FJF---------7|F-JL---7F7FJ7|F-J|L||.F7.-
L-L7.-F||F7||L-7FJL-JL7L7L----7|L--7|L7FJF-JL7L7|||||L-7L7|F7F-J|||FJ|F-J|F7F7||||||FJL7|LJF-J|L7-||L-JF--7F7F-7LJ|F----7LJLJ7F7-LFJ7|F-LF|J
|7||FJL|LJLJ|F-J|F---7|FJF7F--JL---J|FJL-JF7FJFJ|||||F-J.||||L-7||||FJ|F-J|||||||||||F-JL-7L-7L7L7||F7J|F7LJLJ|L-7LJF--7L7F7F7||J.-JL-J-.LL.
LFJ7LFLL-7F7|L--JL7F7LJ|7||L7F7F---7LJF-7FJ|L7L7|LJ||L7F7|||L7FJ||LJ|FJ|F7|||LJ||||LJL7F7FJF-JFJFJ|||L7LJL-7F7F-7L7FJF7L-J|LJLJL77.F-L|LFFJ|
LL7F-7|F7LJ||F--7LLJL-7L-JL-J|LJF7FJF7|FJ|FJ.|FJL7FJ|FJ|||||FJL7|L7FJL7||||||F-J||L-7FJ|||FJF7L7|F|||FJF7F7LJLJFJFJ|J||7F7L7F---JF7-J.|-|.F|
F.FL7L7||F7LJL-7|F----JF7F-7FJF-JLJFJ||L7|L7FJ|F7||FJ|FJLJ||L7FJ|FJ|F7|||LJ||L7FJL7FJL7|LJL-J|FJL7|||L7|||L7F--JLL7L-JL-JL-JL----J|J.||.LF||
.LJ|L7LJ|||F---J|L--7F7|LJFJL7L-7F7L7LJFJL7|L7LJ||LJFJ|-F-JL7LJFJ|FJ|||||FFJ|F||FFJL-7||F-7F-J|F-J|||FJ||L7|L--7F7|F7F------7F--7FJ-F|J7LLJF
FF77LL-7LJ|L---7|F7FJ||L-7L7FJF7LJ|FJF-JF7||FJF-JL-7L7L7L-7FJF-JFJL7|LJ|L7L7|FJL7L7F-J|LJFJ|F7|L-7|LJL7|L-J|F--J||LJ|L-----7|L-7LJJ.7JF7-|FJ
L7||-||L-7|F7F7|LJLJFJL7FJL||FJL--J||L-7|||||7|F7F7|FJFJF-JL7|F7L7F|L-7L7|JLJ|F7L7|L-7L7FJFJ|||F-JL--7|L7F-JL---J|F7L7F----JL--JLL--J.-7.|7J
LLLJ7F---JLJLJLJF-7FJ.FLJFFJ|L-7F-7|F-7||LJ||FJ|||||L-J7L-7FJ||L7|FJF7L7|L7F-J||FJL7FJJ||FJFJ|||F-7F-J|FJL7F-7F-7LJL7LJF7F7F7F7.F|-|JFJJ.||7
.F|FF|F7F7F7F7F7L7|L-7F--7L-JF-JL7LJL7LJL7FJ|L7||||L-77F7|||FJ|FJ||FJ|FJ|FJ|F7||L7FJ|F7LJL7L7LJLJFJL-7LJF-JL7|||L7F7L-7|||||||L7-7FJ|||F7-J-
FFJFJLJLJ||LJ|||FJ|F7||F7L---JF7FJF--JF--JL7|FJ|||L-7L7|L7LJL7|L-J|L7LJ||L7|||||FJL7LJL--7|FJF---JF-7L-7L7F7||L-7|||F-J|LJLJLJFJF7JL77L||FFJ
LF---JF--JL-7LJ|||||||||L7F--7||L7L--7L--7LLJ|FJ|L-7L7|L7L--7LJF--JFJF--JFJLJ|||L-7|F7F7FJLJ-L---7L7|F7|FJ|||L7FJ|||L--JF-7F-7L-J|J-JJ|LFJ7.
LFJ|J-L-7F7FJ|FJL7||||||-LJF7|||FJF--JF7FJF--JL7|F7L7LJFJF-7L--JF-7|JL--7|F--J|L7FJLJ||||F7F7F---JFJLJ||L-J|L7|L7|||F-7FJLLJFJF7FJJJJ.7..|J7
|LFJ777L||||F-JF7|LJ||LJF--JLJ||L7|S7FJ|L7|F7F7|LJL7L-7L7L7|F-7FJFJL-7F7||L--7|FJL-7LLJ|LJ|||L--7FJLF-JL-7FJFJ|FJLJ|L7|L7F-7L7|LJJ|J.F--FF-L
L.JFL77LLJLJL--JLJF7LJF7L----7||FJLJ||FJFJLJ||LJF--JF7L7|FJ|L7||7L7F7||LJL--7LJL7F7L--7L7FJ|L---JL-7L----JL7L7|L-7FL7|L7LJFJF|L7J-|L--|.J|JJ
LFJF.L7.LLJ|LF----J|F-J|F7F--J||L-7|||L7|F--J|F7|F7FJ|FJLJ7|FJ|L-7||LJL7F--7L-7FJ||F-7|FJ|FJF--7F-7L------7|FJ|F7L-7|L7L--JF7L-JJFL-L77FFJ7.
7-.---JL-|7L.L----7|L-7LJLJF7FJ|F-JFJ|-LJ|F-7LJ|||||L||F---J|FJF7|||F--JL7||F-JL7|||FJ||FJ|FJF-JL7|F7F7F7FJ||FJ||F7|L-JF7F7||F77-L7FFL|-7.LF
L7-|.FFJL-7.-F----JL7L|F--7|||FJL-7L7|F--J|FJF7||||L7||L-7F7||FJLJLJL-7F7L7|L-7-||||L7|||FJL7L7F7|LJ|||||L7LJ|FJ|||L---JLJLJLJL77L-LJLJL--7J
L7.7FF|77-J--L-----7L-JL7FJ||||F7FJFJ|L--7|L7||||||FJ||F-J|||LJF---7F-J|L-JL-7L7LJ|L7|||||F7|FJ|LJF-J|||L7L-7|L7||L-7F-7F-7F7F7L7L|.LF7F|L|J
F|.F-LJFJ7.L|F-----JF-7FJL7|LJ|||L7L7|F--J|L||||LJLJFJ||F7||L-7L--7|L-7|F---7L7L7FJFJLJ||||||L7L-7L-7||L7|F7|L7||L-7|L7|L7||LJL-J.|7.L-|JF||
|J-|JL-L--JLFJF--7F7L7||JFJ|F-J|L-J|LJL7F7L7||LJF--7L-JLJ|||F-JLF-JL--JLJF7FJFL7|L7|F7FJ||||L7L7FJ7FJ|L7|||LJ-LJL7FJ|FJ|FJ|L--7J|7L--J--JLF7
L7-F7|FJJ.|7L-JF-J||FJ|L7L7||F7L--77F7JLJL7||L--JF7|F7F7JLJLJF7|L---7F7F7|||JF7|L7|LJ||FJ|||FJJ|L-7L7L7|||L777.F-J|FJ|JLJFL7F-J7LFF|7|FJFJLJ
LF-JFJ-7L---L7LL--J||FL7|7||||L7F7|FJL----J||F7F7||LJLJL--7F7||F----J|||||LJFJLJFJL--J||F|||L7FJF-J||FJ||L7L-7.|F7|L7L---7FJ|J-FJ||L|-JF---.
L|-LLJJF7LFJ-|.LF--JL77LJFJ||L7LJLJ|F--7F-7|LJLJ||L7F-7F-7||LJLJF-7F7||||L-7L--7L----7|L7LJ|FJL7L7F-JL7LJFJF-JFJ||L7L7F7FJL-J7JL7||JLLLJ7-.J
|.L7|LFL7.|.F--FJF7F7L--7|FJL7|7F--JL-7LJFJL77F7LJ7||FJL7||L--7FJFJ||||||F7L7F-JF7F--JL7|F7|L-7L7|L7F-JJ-L7L7FL-J|FJL||LJJ|L.-.LJ7|.F..||.FJ
LJFLFJ.LJ-7F|.|L-J||L7F-JLJ-L||FJF7F7FJF-JF7L-JL-7FJ||F-JLJFF-JL7L-J||||||L7|L7FJ|L---7|LJ||F7|FJL7|L-7J|LL7L-7-L||J|LJLLF|JF|-|7|L.----|LJJ
|F7.|.F||.-7|-F|LJLJFJ|JJJL||||L7|LJLJ7L-7||F7F7FJ|FJLJ.|7LFJF7FJF--J|||LJFJ|FJ|FJF-7FJL7FJLJLJL7FJ|F-JF7FFL7FJ-JLJ.J.J.FF7..L7L-JFL-J7|JJ.|
|FF7L7|.77.-|7-|.FFLL-JJ--.F-LJ|LJF---7F7LJ||||LJLLJFJJF-J|L7|||7|F-7||L-7|FJL7||FJFJL7-|L7JF7F7||FJL--JL7-.LJJ.|.|F|7F7-F|-F7L-|7F7.LJ.|LJJ
F-J-|7|||JJ-LJ.L-77J-|J7777LJJ.|FLL--7LJL--J|LJL|-|JJ7L|.LLL||||FJ|FJ||F7|||F-J||L7L7FJ7|FJF|LJLJ|L7F----J7F7J|-LJ.|..JJFF|F7JJ.|L7-|LLL77|.
LL--LL|-|J.F|J..LJJJ7JL7||--|.7LJ--FFL7F---7L-77-FJ-LL7L--L7LJLJ|FJ|FJ||LJ||L-7|L7L7LJ-FJ|.FL7F-7L7|L--7JF-L7-7FF|.L7FJ7-LLFJL7777.FF-JL|--7
LL||JFL-|7-77FL--F|.JFFLJJL-L-J-|7LFFFJ||F-JF7||7LJ|.LF7.|LJLJL|||FJ|FJL7LLJJ-||-L7|J.LL-J-F-JL7L-JL7F7L-7|FLJ|-|-J.|7JFF.|L7FLJ-JF|J|F7J.L.
|.7--L|7JF-JLF7LFL..F7J|.|-L|-JFFJ-JJL7|FJF7||L-7JJL7L---7FJ7L-F||L-JL7FJJ.||.LJ-L|L77L|7|JL-7FJ7|L7LJL--J7-J-7-J7JF77FF7---J|J|7.-J|FLL7FLF
F-|7F.F--JLF7L77L.---JJL-J7.L--LLJ7JFFJ||FJ|||F7|J7|JFL7JLJF7|LLLJL|F-J|LF-F7-L||||FJ-.LF|7JJLJJL7LLJFL|-|LJLFJLF--JJJFJ|JFF7J--|-J.LJ-|.7-F
F.||-7L|..7F--JF|FL7|.7.FJ|FJ7LJ7LJ-|L-JLJ.LJLJLJ-7|JF-J-7|L-7.FLJJLL-7L7LFLL-J|L-LJLJ7FL|7.|LJJFJ.|FF7|.7JJ--7F||.L-7L-.-7JF---|JJ.LJL|-|.J
|-L|FL-77-||JL77J|7|F.JJJF-.77|J|J|L-|L|JJ.|L|7.|L|7.F-|.LL.JLL7|JLF|J|FJ.|J-7L7|J.L7LL-.LL-L-L7-J-FFJFJL7|.F7LF--7LFL77..|.|J|.|||FLF-L7|J.
J.L|-|F|LL||JL|J.LJ-L7.FJ-|7|L-.|F7..--F7-FL.LJ7L.J|F7FLFJ7..J.|7JL7||LJJ--F---L-F-J|.L||7|F--|F-L7|J.J7.|FJ7L7J.L|7J7.L.F|-L---7FF|7.|.||.-
FJ7.L-|J7-LL7.7.F|7.L|7L-|FF|.JF-JL77.JLF--F-..7.-L7LJJ|J7F-J|FL-7-|L-JL|.LF.|-J7L---F.LF--J7J||F-L-77LJJL7--7-.7||J.F7J.-7LL-|.LFJ.L|-FJ-JJ
LJ-LF-|L7-L|.FLFF-.|FLFJ.|-J|L.L|7..7F|FL7.L7FF7--F.LFFJ7F|J.L--LJ7F-J7.J7.JFLJ|F7.FL|-L|.LFJ.|F77L-7FLJFJ....L--7-7-F-F|LJL|.-F-JL7|LFJ|.|J
J7LL.FJLJ--J-7-|--F-J-JJ-7.LLJF--7.----|L7-J|L|.L-7.--JL-F-F|J.L|-JJJ.-|LJ-LLJ-JJLJ7----|-LL--F7L--.J-J-LJ-LJ.-JF.L|.LJLF7J.|7.JJ7JJL-|-F-LJ`;

const deltas = {
  N: [0, -1],
  S: [0, 1],
  E: [1, 0],
  W: [-1, 0],
};

function getTileCoords(start, direction) {
  const delta = deltas[direction];
  return { x: start.x + delta[0], y: start.y + delta[1] };
}

function getTile(rows, coords, direction) {
  if (direction)
    coords = getTileCoords(coords, direction);

  if (!rows[coords.y])
    return undefined;
  
  return rows[coords.y][coords.x];
}

function getDirections(tile) {
  const directions = {
    "|": ["N", "S"],
    "-": ["E", "W"],
    J: ["W", "N"],
    L: ["E", "N"],
    "7": ["W", "S"],
    F: ["E", "S"],
  };

  return directions[tile] ?? [];
}

function getExitDirection(tile, entranceDir) {
  switch (tile) {
    case "|": return entranceDir === "S" ? "S" : "N";
    case "-": return entranceDir === "W" ? "W" : "E";
    case "J": return entranceDir === "E" ? "N" : "W";
    case "L": return entranceDir === "W" ? "N" : "E";
    case "7": return entranceDir === "E" ? "S" : "W";
    case "F": return entranceDir === "W" ? "S" : "E";
    default: throw new Error(`Unhandled entrance direction ${tile}`);
  }
}

// => { x, y, tile: PipeSymbol, direction: N|S|E|W }
function findStart(rows) {
  const start = { };
  for (start.y = 0; start.y < rows.length; start.y++)
    if (-1 !== (start.x = rows[start.y].indexOf("S")))
      break;

  if (-1 === start.x || -1 === start.y)
    throw new Error("no starting tile");

  let neighbors = [];
  if (getDirections(getTile(rows, start, "N")).includes("S"))
    neighbors.push("N");
  if (getDirections(getTile(rows, start, "S")).includes("N"))
    neighbors.push("S");
  if (getDirections(getTile(rows, start, "E")).includes("W"))
    neighbors.push("E");
  if (getDirections(getTile(rows, start, "W")).includes("E"))
    neighbors.push("W");

  if (2 !== neighbors.length)
    throw new Error("Starting tile should have exactly two connecting pipes");

  const startingTiles = {
    N: {  S: "|", W: "J", E: "L" },
    E: { W: "-", N: "L", S: "F" },
    W: { E: "-", N: "J", S: "7" },
    S: { N: "|", E: "F", W: "7" },
  };

  const tile = startingTiles[neighbors[0]][neighbors[1]];
  if (!tile)
    throw new Error("Failed to identify pipe type at starting tile");
    
  console.log(`neighbors: ${neighbors} starting tile: ${tile}`);

  return { x: start.x, y: start.y, direction: neighbors[0], tile };
}

function part1(input) {
  const rows = input.split("\n");
  const start = findStart(rows);

  let dist = 0;
  let dir = start.direction;
  let coords = start;
  while (true) {
    dist++;
    coords = getTileCoords(coords, dir);
    const tile = getTile(rows, coords);
    if (tile === "S")
      break;

    dir = getExitDirection(tile, dir);
    // console.log(`${dist} (${coords.x},${coords.y}) ${tile} => ${dir}`);
  }

  return dist / 2;
}

function expandMap(rows) {
  const map = [];
  for (let i = 0; i < rows.length; i++) {
    const mapRow = ["."];
    const row = rows[i];
    for (let j = 0; j < row.length * 2; j++)
      mapRow.push(".");

  map.push(mapRow);
  map.push([...mapRow]);
  }

  map.push([...map[0]]);

  const expandTile = (tile, pos) => {
    const x = pos.x * 2 + 1;
    const y = pos.y * 2 + 1;
    map[y][x] = tile;
    const directions = getDirections(tile);
    if (directions.includes("E"))
      map[y][x+1] = "-";
    if (directions.includes("S"))
      map[y+1][x] = "|";
  };
  
  const start = findStart(rows);
  
  let dir = start.direction;
  let coords = start;
  while (true) {
    coords = getTileCoords(coords, dir);
    const tile = getTile(rows, coords);
    if (tile === "S")
      break;

    expandTile(tile, coords);
    dir = getExitDirection(tile, dir);
  }

  
  expandTile(start.tile, start);
  return map;
}

function part2(input) {
  const inputMap = input.split("\n");
  const map = expandMap (inputMap);

  let stack = [0, 0];
  const maybePush = (x, y) => {
    const row = map[y];
    if (row && row[x] === ".") {
      stack.push(x);
      stack.push(y);
    }
  };
  
  while (stack.length > 0) {
    const y = stack.pop();
    const x = stack.pop();
    maybePush(x + 1, y);
    maybePush(x - 1, y);
    maybePush(x, y + 1);
    maybePush(x, y - 1); 
    map[y][x] = "*";
  }

  console.log(map.map((x) => x.join("")).join("\n"));

  let numInside = 0;
  for (let y = 0; y < inputMap.length; y++) {
    const row = inputMap[y];
    for (let x = 0; x < inputMap[y].length; x++)
      if (map[y * 2 + 1][x * 2 + 1] === ".")
        ++numInside;
  }

  return numInside;
}

// expect 4, 4, 8, 8
// console.log(part1(sampleInput1));
// console.log(part1(sampleInput2));
// console.log(part1(sampleInput3));
// console.log(part1(sampleInput4));
// console.log(part1(realInput));

// Encloses 4 tiles
const sampleInput5 = `...........
.S-------7.
.|F-----7|.
.||.....||.
.||.....||.
.|L-7.F-J|.
.|..|.|..|.
.L--J.L--J.
...........`;

// Encloses 4 tiles
const sampleInput6 = `..........
.S------7.
.|F----7|.
.||OOOO||.
.||OOOO||.
.|L-7F-J|.
.|II||II|.
.L--JL--J.
..........`;

// Encloses 8 tiles.
const sampleInput7 = `.F----7F7F7F7F-7....
.|F--7||||||||FJ....
.||.FJ||||||||L7....
FJL7L7LJLJ||LJ.L-7..
L--J.L7...LJS7F-7L7.
....F-J..F7FJ|L7L7L7
....L7.F7||L7|.L7L7|
.....|FJLJ|FJ|F7|.LJ
....FJL-7.||.||||...
....L---J.LJ.LJLJ...`;

const sampleInput8 =
`FF7FSF7F7F7F7F7F---7
L|LJ||||||||||||F--J
FL-7LJLJ||||||LJL-77
F--JF--7||LJLJ7F7FJ-
L---JF-JLJ.||-FJLJJ7
|F|F-JF---7F7-L7L|7|
|FFJF7L7F-JF7|JL---7
7-L-JL7||F7|L7F-7F7|
L.L7LFJ|||||FJL7||LJ
L7JLJL-JLJLJL--JLJ.L`;

// console.log(part2(sampleInput1));
// console.log(part2(sampleInput2));
// console.log(part2(sampleInput3));
// console.log(part2(sampleInput4));
console.log(part2(sampleInput5));
console.log(part2(sampleInput6));
console.log(part2(sampleInput7));
console.log(part2(sampleInput8));
console.log(part2(realInput));
