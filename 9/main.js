const sampleInput = `0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45`;

const realInput = `12 18 39 90 199 424 889 1853 3829 7788 15539 30516 59516 116587 231569 468274 961829 1992697 4128498 8487217 17211396
6 26 54 89 142 246 466 909 1734 3162 5486 9081 14414 22054 32682 47101 66246 91194 123174 163577 213966
18 17 13 13 40 154 478 1234 2819 5997 12354 25259 51691 105438 212416 419411 808936 1526204 2831565 5207158 9577518
-2 -4 -1 30 125 342 785 1661 3410 6978 14348 29530 60395 122135 243969 482431 947966 1857996 3641345 7139438 13984281
-6 -12 -20 -21 5 95 320 827 1936 4359 9672 21278 46299 99252 209263 434480 891273 1813673 3673875 7424016 14974344
6 11 32 93 241 557 1160 2213 3955 6802 11600 20215 36892 71363 145807 309911 672132 1461785 3147068 6650177 13724091
13 37 69 105 153 244 440 839 1577 2827 4795 7713 11829 17394 24646 33791 44981 58289 73681 90985 109857
-6 6 41 117 261 519 973 1758 3068 5143 8254 12777 19622 31667 57675 121960 286920 703727 1723333 4133596 9653013
4 4 14 43 100 194 334 529 788 1120 1534 2039 2644 3358 4190 5149 6244 7484 8878 10435 12164
1 2 -6 -14 15 167 618 1719 4158 9252 19462 39290 76813 146238 272027 495346 883843 1546066 2652206 4463310 7371679
11 3 -14 -44 -91 -159 -252 -374 -529 -721 -954 -1232 -1559 -1939 -2376 -2874 -3437 -4069 -4774 -5556 -6419
-8 -14 -9 21 90 212 401 671 1036 1510 2107 2841 3726 4776 6005 7427 9056 10906 12991 15325 17922
-4 -4 5 29 78 172 343 636 1132 2061 4154 9511 23448 58041 138420 313292 671700 1368666 2663131 4972505 8949186
16 29 45 65 83 89 80 96 326 1377 4878 14713 39359 96088 218283 468063 958308 1891929 3633371 6840301 12705899
22 28 26 12 -7 -2 89 372 1008 2224 4324 7700 12843 20354 30955 45500 64986 90564 123550 165436 217901
5 23 53 107 209 404 780 1515 2979 5956 12123 25068 52420 110247 232023 486632 1013797 2092093 4265901 8575465 16961551
28 38 41 30 6 -12 32 273 1016 2920 7341 16922 36532 74648 145222 269947 480588 820618 1344721 2113702 3180866
1 8 13 23 62 180 466 1065 2199 4192 7499 12739 20732 32540 49512 73333 106077 150264 208921 285647 384682
2 5 11 33 98 247 535 1031 1818 2993 4667 6965 10026 14003 19063 25387 33170 42621 53963 67433 83282
10 13 12 13 35 121 359 931 2222 5032 10936 22838 45802 88397 165204 302015 546910 993235 1825048 3402511 6414793
-2 9 41 116 275 592 1198 2322 4355 7938 14074 24300 41098 69090 118319 212289 405700 820299 1712351 3592328 7426957
14 27 54 95 150 219 302 399 510 635 774 927 1094 1275 1470 1679 1902 2139 2390 2655 2934
14 25 47 96 198 398 774 1467 2758 5255 10314 20950 43778 93089 199189 424822 896078 1857825 3768449 7454360 14350782
30 40 51 66 94 169 380 924 2202 4995 10792 22401 45072 88555 170969 326447 621016 1186536 2293467 4504702 8993652
8 17 41 101 235 511 1052 2094 4119 8139 16272 32888 66888 136235 276865 559821 1123210 2229813 4367419 8417863 15933113
13 38 77 124 173 223 283 377 549 868 1433 2378 3877 6149 9463 14143 20573 29202 40549 55208 73853
4 -3 1 35 119 265 467 694 905 1144 1858 4752 14817 44748 123996 316504 754367 1700344 3662392 7601942 15311204
27 48 85 152 284 560 1141 2345 4799 9739 19597 39162 77912 154755 307749 614147 1231834 2484713 5036876 10241939 20828399
5 5 11 38 118 305 675 1317 2311 3693 5413 7293 8976 9807 8481 2104 -15991 -60787 -164249 -390768 -863222
6 16 35 83 194 428 890 1751 3259 5720 9436 14646 21707 32229 52913 105894 253228 650052 1652977 4030837 9359416
17 37 72 130 229 409 749 1392 2587 4773 8758 16088 29759 55501 103959 194214 359229 653973 1167172 2037862 3478177
5 3 13 44 115 275 637 1435 3113 6455 12765 24106 43607 75847 127325 207025 327085 503579 757421 1115400 1611355
15 19 28 45 76 143 303 683 1567 3609 8296 18847 41808 89689 185087 366849 698951 1282903 2274636 3906985 6519052
3 12 36 89 189 363 663 1203 2232 4270 8355 16481 32352 62637 118988 221179 401841 713408 1238054 2101593 3492535
3 26 71 145 255 408 611 871 1195 1590 2063 2621 3271 4020 4875 5843 6931 8146 9495 10985 12623
0 5 25 62 127 265 591 1337 2910 5961 11465 20812 35909 59293 94255 144975 216668 315741 449961 628634 862795
15 36 75 142 253 430 701 1100 1667 2448 3495 4866 6625 8842 11593 14960 19031 23900 29667 36438 44325
30 47 75 125 209 342 554 914 1575 2868 5504 10986 22388 45725 92217 181841 348668 648597 1170225 2049731 3490803
9 20 49 120 263 520 962 1717 3009 5208 8891 14914 24495 39308 61588 94247 141001 206508 296517 418028 579463
-6 -7 -8 -9 -10 -11 -12 -13 -14 -15 -16 -17 -18 -19 -20 -21 -22 -23 -24 -25 -26
0 6 11 26 78 223 567 1288 2645 4959 8569 13825 21311 32726 53209 96379 194017 413423 888018 1873343 3857139
19 21 31 76 210 529 1199 2511 4980 9508 17634 31897 56341 97194 163756 269534 433665 682671 1052593 1591554 2362804
9 30 62 108 188 353 694 1343 2467 4264 6995 11154 18042 31379 61365 134155 312696 740461 1729967 3937075 8697223
8 14 36 79 148 248 384 561 784 1058 1388 1779 2236 2764 3368 4053 4824 5686 6644 7703 8868
11 9 4 -4 -15 -29 -46 -66 -89 -115 -144 -176 -211 -249 -290 -334 -381 -431 -484 -540 -599
24 41 64 110 210 408 771 1433 2713 5368 11076 23324 49067 101929 208484 420488 838110 1652611 3222068 6201358 11758704
13 22 36 62 122 259 559 1213 2664 5914 13108 28585 60737 125334 251599 493465 950415 1805498 3393052 6316012 11643260
10 7 0 -5 2 44 189 613 1697 4153 9163 18501 34591 60434 99314 154167 226468 314459 410506 497335 542856
1 -3 -6 0 38 163 489 1233 2795 5915 11980 23596 45592 86685 162107 297577 535093 941121 1617870 2718464 4466954
12 23 53 114 218 388 691 1296 2561 5162 10312 20221 39194 76275 151329 308304 642921 1358791 2879044 6065724 12646689
18 26 27 15 -14 -48 -35 151 754 2190 5111 10479 19650 34468 57369 91495 140818 210274 305907 435023 606354
24 44 82 160 314 599 1090 1875 3033 4579 6343 7744 7445 2962 -9511 -34459 -74434 -123498 -153568 -88896 238228
8 19 44 79 130 226 432 862 1692 3173 5644 9545 15430 23980 36016 52512 74608 103623 141068 188659 248330
6 9 15 34 102 300 781 1818 3901 7937 15648 30330 58271 111423 212566 405505 775296 1487829 2865325 5525814 10632276
14 36 83 176 354 694 1345 2584 4914 9241 17192 31687 58009 105957 194507 362358 692042 1364298 2777445 5800942 12295392
-1 3 27 86 195 381 712 1346 2608 5112 9970 19197 36570 69484 132837 256751 501093 981409 1913149 3684080 6968709
25 41 64 110 202 368 647 1108 1885 3229 5576 9628 16442 27520 44891 71174 109609 164041 238840 338738 468562
-1 8 19 28 42 105 335 963 2364 5081 9887 18038 32080 57927 109468 217730 447657 926890 1892567 3764108 7252194
15 32 68 136 250 425 677 1023 1481 2070 2810 3722 4828 6151 7715 9545 11667 14108 16896 20060 23630
20 34 58 99 168 277 448 760 1470 3259 7680 17935 40207 85962 175981 347495 666874 1252206 2313360 4222637 7638148
-7 3 36 105 232 466 914 1795 3546 7041 14045 28150 56700 114741 233074 474497 966175 1963527 3975538 8009671 16048904
10 14 19 19 18 40 138 404 982 2085 4022 7266 12667 22090 40138 78376 164878 364388 818513 1821977 3961172
10 27 54 91 138 195 262 339 426 523 630 747 874 1011 1158 1315 1482 1659 1846 2043 2250
5 24 55 98 153 220 299 390 493 608 735 874 1025 1188 1363 1550 1749 1960 2183 2418 2665
26 40 66 126 251 481 865 1461 2336 3566 5236 7440 10281 13871 18331 23791 30390 38276 47606 58546 71271
19 39 67 112 206 418 869 1745 3320 6029 10680 18984 34755 66474 132591 272270 566809 1181587 2446509 5006652 10097228
3 10 42 117 262 529 1026 1974 3817 7451 14726 29547 60207 124111 256939 529789 1080323 2167996 4269934 8244141 15602088
18 48 93 153 228 318 423 543 678 828 993 1173 1368 1578 1803 2043 2298 2568 2853 3153 3468
21 38 60 86 115 146 178 210 241 270 296 318 335 346 350 346 333 310 276 230 171
1 8 39 110 236 435 741 1226 2031 3406 5759 9714 16178 26417 42141 65598 99677 148020 215143 306566 428952
15 25 40 63 104 192 392 826 1699 3353 6442 12479 25309 54599 123366 283205 643909 1430068 3089176 6500428 13384176
5 20 60 147 310 588 1043 1784 3000 4997 8231 13326 21063 32323 47964 68609 94319 124122 155366 182861 197772
26 35 52 91 162 261 360 417 447 728 2262 7674 22841 59788 141984 314582 665324 1368645 2779484 5630809 11440904
7 16 25 42 92 222 506 1050 1997 3532 5887 9346 14250 21002 30072 42002 57411 77000 101557 131962 169192
9 20 46 99 197 386 777 1596 3239 6330 11808 21129 36790 63646 112088 205474 397034 807305 1704831 3675616 7969988
-3 1 17 65 173 380 749 1391 2497 4371 7453 12317 19625 30014 43889 61091 80405 98869 110841 106777 71669
18 23 29 40 62 102 182 386 969 2579 6696 16518 38790 87564 191679 408893 850984 1725399 3399343 6490000 11977186
11 26 52 85 133 227 439 922 2002 4371 9461 20145 42053 86071 173095 342953 670729 1295700 2470942 4645625 8597393
6 22 42 62 90 170 426 1141 2891 6756 14631 29680 57068 105382 189835 339882 617164 1156551 2257064 4577467 9545926
5 13 32 83 209 500 1136 2467 5163 10498 20908 41120 80436 157250 307707 601799 1172485 2267159 4336764 8187181 15231743
16 34 66 127 257 550 1193 2510 5009 9449 16992 29592 50917 88355 157154 288765 547542 1064231 2103612 4202702 8456877
4 9 23 52 122 290 664 1455 3093 6453 13260 26772 52861 101590 189290 341041 593732 1001627 1652171 2714838 4579750
-3 -5 -7 -9 -11 -13 -15 -17 -19 -21 -23 -25 -27 -29 -31 -33 -35 -37 -39 -41 -43
16 43 82 131 182 214 197 134 189 983 4203 13800 38324 95475 220920 485118 1024762 2100247 4198584 8214533 15764894
9 15 38 103 258 586 1217 2340 4215 7185 11688 18269 27592 40452 57787 80690 110421 148419 196314 255939 329342
9 23 48 82 123 169 218 268 317 363 404 438 463 477 478 464 433 383 312 218 99
10 22 45 88 160 265 397 537 664 829 1417 3857 12282 37096 102277 259886 618222 1395200 3017029 6295774 12740092
0 -3 -12 -37 -79 -118 -106 44 493 1576 4047 9615 22024 49101 106467 224030 457030 904383 1738502 3252819 5936091
0 0 -2 -7 -13 0 100 469 1555 4402 11298 26931 60312 127886 258712 503831 954970 1784524 3332918 6297189 12126161
28 49 76 108 144 183 224 266 308 349 388 424 456 483 504 518 524 521 508 484 448
8 7 15 40 89 175 343 730 1674 3887 8707 18444 36835 69623 125275 215854 358060 574455 894887 1358128 2013741
2 17 40 78 141 239 376 536 669 710 700 1120 3590 12125 35202 89045 202924 428147 854216 1638942 3065059
16 37 79 164 322 592 1023 1675 2620 3943 5743 8134 11246 15226 20239 26469 34120 43417 54607 67960 83770
7 11 24 62 143 292 557 1047 2005 3942 7895 15958 32429 66346 137115 286896 607468 1297506 2782511 5961371 12704000
20 40 67 101 142 190 245 307 376 452 535 625 722 826 937 1055 1180 1312 1451 1597 1750
19 32 58 118 259 565 1173 2299 4277 7608 13003 21381 33747 50823 72234 94958 110631 101152 31856 -158688 -573445
4 19 38 56 68 69 54 18 -44 -137 -266 -436 -652 -919 -1242 -1626 -2076 -2597 -3194 -3872 -4636
7 19 39 64 92 123 170 293 686 1886 5241 13876 34546 81011 180041 382163 781429 1553025 3026631 5830784 11175116
7 17 40 89 179 340 648 1275 2555 5059 9668 17629 30575 50486 79564 119991 173535 240965 321232 410369 500059
5 13 18 14 1 -8 29 229 888 2681 7017 16648 36698 76380 151814 290555 538695 971725 1710740 2946050 4970831
3 4 20 59 135 282 584 1228 2596 5446 11309 23377 48421 100730 209809 434768 890211 1791446 3531992 6815949 12886773
7 11 22 53 130 292 593 1105 1917 3116 4717 6476 7484 5453 -4202 -28748 -75725 -142351 -185544 -51369 673542
6 15 36 76 159 348 778 1697 3522 6952 13265 25098 48318 96102 197134 410992 855450 1752689 3504446 6810100 12846789
17 29 43 56 69 93 162 357 840 1899 4035 8219 16672 34971 77128 176838 410915 946033 2128939 4655986 9884247
6 16 42 87 154 246 366 517 702 924 1186 1491 1842 2242 2694 3201 3766 4392 5082 5839 6666
14 22 30 38 46 54 62 70 78 86 94 102 110 118 126 134 142 150 158 166 174
1 7 25 59 129 295 690 1562 3325 6619 12379 21913 36989 59931 93724 142128 209801 302431 426877 591319 805417
26 52 98 167 271 455 826 1581 3026 5574 9703 15844 24153 34099 43771 48770 40506 3664 -87464 -274163 -620469
5 7 18 54 152 386 896 1946 4037 8128 16076 31514 61587 120363 235543 461695 906251 1779882 3492090 6828453 13272628
-4 0 16 60 169 411 895 1781 3290 5714 9426 14890 22671 33445 48009 67291 92360 124436 164900 215304 277381
12 19 33 55 83 112 134 138 110 33 -113 -351 -707 -1210 -1892 -2788 -3936 -5377 -7155 -9317 -11913
12 13 11 16 49 143 359 844 1976 4669 10955 25036 55144 116830 238836 473653 916464 1738721 3246503 5979540 10874967
11 13 8 4 33 176 608 1672 4000 8715 17780 34625 65306 120664 220298 399693 722609 1301905 2333416 4149402 7300535
-4 -9 -22 -41 -48 -2 165 554 1316 2693 5100 9269 16480 28908 50119 85752 144428 238931 387710 616755 961904
20 34 47 65 107 214 476 1098 2546 5859 13297 29632 64593 137261 283590 568719 1106352 2088232 3827635 6821875 11840055
-8 -18 -34 -44 -28 42 218 616 1498 3435 7618 16422 34395 69984 138601 268195 509504 954848 1771994 3263660 5969098
15 28 48 80 138 258 512 1016 1923 3393 5536 8331 11534 14601 16668 16649 13535 7002 -1536 -7262 522
11 18 25 32 39 46 53 60 67 74 81 88 95 102 109 116 123 130 137 144 151
7 18 39 66 111 226 532 1261 2831 5986 12045 23316 43743 79866 142186 247039 419095 694610 1125571 1784886 2772783
2 4 8 22 68 183 417 835 1535 2710 4824 9055 18297 39223 86207 188300 400968 824944 1635336 3125084 5767986
9 15 25 37 54 92 200 508 1327 3335 7907 17717 37929 78748 161083 329014 676321 1400503 2907865 6009253 12270348
19 34 60 97 145 204 274 355 447 550 664 789 925 1072 1230 1399 1579 1770 1972 2185 2409
18 43 74 102 114 93 18 -136 -398 -801 -1382 -2182 -3246 -4623 -6366 -8532 -11182 -14381 -18198 -22706 -27982
14 33 82 183 361 640 1048 1652 2655 4597 8711 17493 35552 70812 136143 251502 446668 764657 1265904 2033299 3178163
20 22 24 41 95 218 459 888 1587 2611 3898 5122 5544 4064 -24 -4507 2174 55440 245400 780103 2112461
23 35 55 94 184 389 812 1597 2924 5008 8162 13111 22030 41378 88797 208654 505149 1209995 2816745 6342242 13829812
17 29 55 105 194 355 673 1367 2967 6659 14903 32467 68064 136829 263929 489661 876461 1518321 2553191 4179029 6674254
2 12 37 79 135 192 222 177 -16 -460 -1293 -2693 -4883 -8136 -12780 -19203 -27858 -39268 -54031 -72825 -96413
3 -4 -13 -22 -29 -32 -29 -18 3 36 83 146 227 328 451 598 771 972 1203 1466 1763
24 41 80 156 280 462 732 1205 2237 4746 10805 24653 54315 114073 228087 435528 797654 1407335 2401614 3977978 6415106
10 12 11 7 0 -10 -23 -39 -58 -80 -105 -133 -164 -198 -235 -275 -318 -364 -413 -465 -520
17 39 79 149 282 553 1122 2318 4792 9777 19500 37805 71105 129965 232063 408188 714603 1257915 2243053 4061685 7448172
19 48 92 151 225 314 418 537 671 820 984 1163 1357 1566 1790 2029 2283 2552 2836 3135 3449
19 30 41 52 63 74 85 96 107 118 129 140 151 162 173 184 195 206 217 228 239
14 26 47 85 152 270 487 916 1808 3678 7542 15419 31437 64205 131669 270655 555102 1130310 2276581 4526365 8877434
13 25 36 36 23 12 40 167 473 1051 1996 3390 5283 7670 10464 13465 16325 18509 19252 17512 11919
-5 1 29 86 186 363 689 1306 2485 4727 8921 16572 30108 53269 91573 152844 247775 390485 599013 895674 1307182
12 20 37 87 210 468 952 1789 3164 5411 9300 16763 32478 67013 142730 304567 639492 1311358 2622763 5123191 9794178
7 13 22 34 49 67 88 112 139 169 202 238 277 319 364 412 463 517 574 634 697
23 50 87 136 205 314 513 919 1789 3664 7651 15983 33169 68426 140882 290661 602193 1252409 2608614 5423820 11220481
29 44 55 66 89 144 259 470 821 1364 2159 3274 4785 6776 9339 12574 16589 21500 27431 34514 42889
2 -1 -9 -27 -56 -78 -31 226 968 2707 6397 13844 28537 57379 114375 228522 460429 936294 1914726 3912558 7931017
17 31 62 123 231 409 696 1183 2104 4036 8314 17859 38762 83178 174374 355157 701395 1342949 2495070 4504195 7913113
9 21 53 121 262 552 1140 2315 4638 9205 18179 35865 70835 139980 275920 539995 1044151 1986493 3707177 6773737 12107980
4 18 55 129 254 444 713 1075 1544 2134 2859 3733 4770 5984 7389 8999 10828 12890 15199 17769 20614
6 7 6 16 74 248 645 1426 2834 5241 9220 15648 25846 41762 66203 103122 157966 238091 353250 516160 743154
7 13 27 63 139 281 544 1060 2128 4382 9125 19025 39588 82272 171016 355734 739621 1532931 3155655 6427251 12905953
23 26 31 53 115 248 491 891 1503 2390 3623 5281 7451 10228 13715 18023 23271 29586 37103 45965 56323
12 27 42 57 72 87 102 117 132 147 162 177 192 207 222 237 252 267 282 297 312
6 15 41 112 286 674 1469 2987 5741 10604 19188 34689 63636 119238 227339 436388 833511 1570500 2908426 5302545 9580309
13 16 12 9 32 137 446 1228 3067 7177 15954 33928 69471 138092 269240 520918 1011421 1987670 3969448 8046095 16469558
10 11 9 4 -10 -36 -43 100 741 2645 7348 17818 39746 84133 172495 347187 691344 1366147 2678055 5195940 9948506
1 17 44 87 159 291 556 1113 2277 4621 9116 17315 31587 55407 93708 153301 243369 376041 567052 836495 1209671
22 31 52 90 144 206 260 281 234 73 -260 -836 -1740 -3072 -4948 -7501 -10882 -15261 -20828 -27794 -36392
4 4 19 63 150 293 512 863 1511 2885 5978 12915 28077 60497 129253 275786 591649 1279463 2783451 6063189 13158929
1 1 4 25 81 195 417 874 1868 4057 8800 18866 39981 84276 177924 377758 806705 1727855 3696370 7865317 16590231
16 34 74 147 263 431 659 954 1322 1768 2296 2909 3609 4397 5273 6236 7284 8414 9622 10903 12251
20 37 69 122 202 315 467 664 912 1217 1585 2022 2534 3127 3807 4580 5452 6429 7517 8722 10050
5 26 63 134 271 526 989 1834 3435 6632 13278 27272 56400 115496 231740 453391 864005 1605366 2914217 5180830 9042145
9 16 29 47 77 153 359 851 1873 3762 6937 11867 19013 28739 41187 56111 72665 89140 102645 108727 100925
10 32 74 155 314 617 1175 2188 4039 7490 14092 27037 52896 105076 210502 422145 841788 1660128 3225306 6156675 11528586
19 23 29 46 88 179 372 792 1713 3679 7679 15386 29470 53995 94910 160644 262815 417063 644017 970406 1430324
5 18 44 92 186 373 739 1451 2868 5812 12176 26184 56828 122340 258145 530879 1063323 2079530 3987708 7533220 14079322
18 36 83 180 369 729 1390 2557 4584 8178 14875 28036 54795 109698 221256 443356 874494 1689172 3187587 5871968 10560597
9 8 11 29 94 269 660 1431 2827 5232 9337 16578 30162 57342 114424 237964 510133 1115940 2469615 5484891 12131926
4 26 63 115 182 264 361 473 600 742 899 1071 1258 1460 1677 1909 2156 2418 2695 2987 3294
21 32 47 66 89 116 147 182 221 264 311 362 417 476 539 606 677 752 831 914 1001
8 31 68 135 270 552 1125 2217 4139 7259 11985 18884 29269 47026 83358 167882 372738 861959 1987586 4468637 9711368
20 31 57 114 228 451 882 1699 3221 6044 11349 21598 42073 84156 172012 355589 734834 1503109 3022529 5951162 11452946
11 15 19 23 27 31 35 39 43 47 51 55 59 63 67 71 75 79 83 87 91
14 22 32 43 69 149 353 795 1677 3405 6851 13920 28793 60700 130112 282392 617355 1352152 2952932 6406510 13772894
2 8 18 34 60 113 242 554 1258 2757 5852 12192 25244 52314 108584 224814 461378 932758 1848622 3580286 6764844
25 49 99 202 411 815 1554 2861 5171 9357 17172 31993 59997 112022 206751 376841 681781 1235517 2264585 4225568 8031767
27 51 80 122 193 308 482 753 1244 2304 4815 10828 24804 55901 121991 256453 519329 1015233 1921578 3532374 6325227
9 16 23 30 37 44 51 58 65 72 79 86 93 100 107 114 121 128 135 142 149
5 19 57 136 279 527 979 1871 3704 7442 14836 29004 55528 104538 194564 359377 659639 1201973 2169083 3865840 6787845
29 56 109 215 429 849 1631 3004 5285 8894 14369 22381 33749 49455 70659 98714 135181 181844 240725 314099 404509
12 22 43 85 159 273 428 614 806 960 1009 859 385 -573 -2214 -4780 -8560 -13894 -21177 -30863 -43469
13 31 68 128 213 322 460 661 1019 1701 2896 4672 6854 9455 15134 36958 117818 372651 1071743 2793982 6695916
8 13 22 32 41 43 18 -83 -358 -979 -2222 -4502 -8413 -14773 -24674 -39537 -61172 -91843 -134338 -192044 -269027
11 12 9 -1 -20 -44 -52 25 380 1487 4386 11154 25631 54481 108679 205526 371305 644702 1081127 1758081 2781726
19 47 89 145 218 321 500 893 1857 4215 9706 21765 46826 96462 190938 365345 680788 1245864 2259296 4095678 7477459
-4 -7 -10 -12 1 85 389 1235 3232 7433 15558 30327 55975 99078 169982 285600 475624 797452 1372918 2477577 4751361
13 31 59 88 109 133 231 600 1662 4204 9568 19901 38476 70096 121594 202443 325491 507837 771865 1146454 1668383
14 24 44 91 202 442 913 1764 3212 5606 9603 16580 29482 54406 103348 198697 380250 715748 1316198 2357553 4110674
10 12 22 40 74 146 289 530 854 1144 1092 76 -3002 -9922 -23401 -47402 -87502 -151324 -249038 -393936 -603086
4 4 20 62 149 316 626 1212 2384 4837 9979 20344 39929 74052 127948 202873 288279 349472 313887 69354 -488752
-6 -15 -22 -20 11 117 384 953 2036 3933 7050 11918 19213 29777 44640 65043 92462 128633 175578 235632 311471
19 47 102 206 403 783 1522 2954 5714 11038 21395 41779 82229 162487 320133 623962 1194545 2233309 4059052 7144760 12134891
26 39 54 86 161 321 651 1349 2874 6235 13544 29088 61461 127903 263247 538395 1098130 2237175 4549698 9215482 18532449
15 18 17 21 53 161 440 1069 2377 4969 9963 19424 37172 70380 132953 252957 489034 966028 1950110 4002213 8281814
5 7 5 -1 -11 -25 -43 -65 -91 -121 -155 -193 -235 -281 -331 -385 -443 -505 -571 -641 -715
12 19 26 33 40 47 54 61 68 75 82 89 96 103 110 117 124 131 138 145 152
2 6 22 58 122 222 366 562 818 1142 1542 2026 2602 3278 4062 4962 5986 7142 8438 9882 11482
-5 -7 -13 -32 -80 -178 -347 -601 -939 -1324 -1584 -1028 2744 16985 61237 183615 494629 1234977 2908251 6536470 14145702
-5 -8 -8 -4 6 44 197 711 2178 5893 14520 33329 72509 151541 307557 611434 1198786 2329137 4497031 8636027 16483917
2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40 42
-6 -3 8 43 130 317 700 1494 3193 6899 14945 31993 66855 135363 264703 499728 911876 1611441 2764078 4612567 7505016
13 19 40 101 241 513 984 1735 2861 4471 6688 9649 13505 18421 24576 32163 41389 52475 65656 81181 99313
12 25 52 103 205 419 881 1894 4112 8871 18736 38347 75661 143701 262937 464438 793948 1317053 2125620 3345703 5147125`;

function parseHistories(input) {
  return input.split("\n").map((line) => line.split(" ").map((word) => Number.parseInt(word, 10)));
}

function computeDelta(series) {
  const delta = [];
  for (let cur = 1; cur < series.length; cur++)
    delta.push(series[cur] - series[cur - 1]);

  return delta;
}

function computeDeltas(history) {
  const deltas = [];
  let cur = history;
  while (cur) {
    const delta = computeDelta(cur);
    if (delta.every((x) => x === 0))
      break;

    deltas.push(delta);
    cur = delta;
  }

  return deltas;
}

function predict(history) {
  const deltas = computeDeltas(history);
  return deltas.map((x) => x[x.length - 1]).reduce((prev, cur) => prev + cur, history[history.length - 1]);
}

function part1(input) {
  const histories = parseHistories(input);
  return histories.reduce((prev, cur) => prev + predict(cur), 0);
}

console.log(part1(sampleInput));
console.log(part1(realInput));
