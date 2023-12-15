
const sampleInput = `rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9,ab=5,pc-,pc=6,ot=7`;

const realInput = `ndvk-,sf=3,jf-,hv=9,rmtp=4,tc=1,xrr-,xjd=5,rlgq=8,jxnd-,qd-,hxb=4,bgh=7,rlgq=2,kdll=8,tx-,tpgzk=8,rvh-,gg-,ktlshg-,mrzl-,qlxt=7,shc-,nlk=2,qn-,zsq=4,cs=3,qblf-,rd=7,rkjn-,gzsvq=5,jxnd-,rv=3,kx=7,qm-,lpgr=5,kld-,cf-,tq-,sh-,vqtr=6,qdhf=1,lrn-,xlmx-,vlr-,tkd-,vnt=9,sb=3,gtv-,bff=9,qgc=2,mxp=6,vr-,sdz-,xvf-,djlm=2,msbjv=4,xxf=8,jvtx-,mrzl-,jm=1,sdz=8,gnrt=5,mskmt=4,rhj=3,ft=3,cg=1,tfvb=2,zdrpn-,sn-,kgh=4,rd=5,px=6,gh-,tfvb=5,qsxf=5,fvgqlc=2,pv-,fpf-,mp-,zp=7,lvx-,gbt-,dlmfb-,gzsvq-,vjvl=5,msbjv=1,qm=3,qpkz=7,vll-,bkhdt=5,xb=4,brscg=4,cbfc-,nfzh-,qrs=1,shj-,pp-,rpm=9,lpgr-,cv=1,jdq=3,tmx=5,hsk-,sb=5,kpz-,brscg=8,fd-,jkhg-,pv-,rnr-,sf=3,gm=8,lz-,crmd-,jvdm-,zdrpn-,cbv-,gjz-,fpf-,tc-,kzbmn=5,tcx=3,tkk=9,hzr-,knjsp=4,fd-,ch=2,zmg-,zkhx=8,kzbmn=4,pcr=8,nvxng=6,zkh-,xj=8,qn=6,gv-,vk-,pld-,nvj-,vk=7,pd-,lkt=8,mxnc=1,sf-,bvfn-,xzmm-,ldm-,xnk=4,tsld=2,vh=9,xj-,grgrps=2,px=8,tcv-,bhs=8,hglmnt=9,mhg-,hsk=3,drtj-,zmr-,tx-,grgrps=1,tsld=2,gz-,mq=7,jbd-,qgm-,fnf-,xqsv=5,nvc=1,vnt-,kzmhkg-,mxp-,lnj-,zs=7,vpc-,hql=2,tc-,gk-,jdq=9,mkffn=8,rvh=2,tkd=3,rlgq=2,dlj-,bkr-,vxb-,gpkh-,xzmm-,ggj=8,gl-,dvhvf-,qkk-,pv=7,jjz-,fkr=9,fhn=4,btd=2,tsx-,xd=3,rvh=2,ml-,vxjjs=4,grp-,dbznbm-,nkh=7,zmg=1,bk-,brqld-,bbph-,jx=8,rpqs=8,hql=9,jdq-,dvhvf=5,gkg=3,pkq=3,sj=8,dscx-,sb-,tldf-,qrs-,rq-,cjvn=3,sksgsn-,zmr=6,jdqmf-,km=2,tkk=7,grgrps-,pld-,fjjtm-,hj-,kpz=8,lzx-,kl-,ttcmzv-,ndvk=5,gth=3,mqfxv-,zdrpn=8,ktlshg-,zd=6,cpqx-,jm-,kf-,rd=3,kzbmn=9,grgf-,dsp=7,dsp-,gzsvq-,dh=9,jvtx=7,xx-,kvd=8,mnd-,mkffn-,td-,rpm=7,lzx-,zsq=2,rv-,sz=2,gm=8,gvd=2,vk-,ld=5,rd=9,fsp=5,vll=4,jpc=7,blj=6,rhj-,gkg-,shc-,kgh-,bqkxm-,qvg=4,ht=7,xr=3,czr-,vpp-,kb-,sdz=6,xkxt=9,xl=8,vc-,xc-,zkh=6,gnrt=4,hh-,gb-,kfc-,sb-,ft=7,qlc-,nq=3,mskmt-,vhppt-,pgd-,jvtx-,gzsvq=9,btd-,qd=5,ch=1,vlpc=4,ns=9,zppl-,xbpsnb=3,pc-,lnj=3,dz-,pt=4,vxjjs-,pc=1,nvj=3,qkk-,np-,rmtp=8,zm=5,xvf=9,hj=1,hglmnt=7,rpvcr-,tgm-,szt-,tmx=3,xhqbpk=8,xkxt-,lq=7,sz-,jlf-,tq-,mvp-,vpr=8,cg-,mxb-,dtq=5,hmbqd=3,sqvr=9,sqq=1,ccdd=5,vxm-,hxg=6,zmf=5,cjvn-,kkh=4,vmq=9,prvz=1,czzq=6,xmj=6,tfd=3,mnd=4,mm=1,ddt-,cf=1,crs-,xtcc-,dsp=9,qlh=3,vck=8,ddt-,jpc-,ngp-,rlgq-,bk-,dvhvf=3,vr-,kld-,hpjb-,jrztr=8,mkffn=1,drtj=6,qlx-,xjd-,drtj=2,zfp=9,dvhvf-,dj=7,gx-,zz=5,zcrf-,tfd=9,ch-,bgh=4,rcj=6,tcx=1,kf-,hzbm-,bz-,fkj-,qv=5,zqg-,vpr-,lr=1,hxb=8,gh-,msbjv-,ljl=5,jm=8,gxdx=8,bdkdjc-,mxnc=4,bbph=5,mp-,bz=8,qd-,pd-,pjss=7,hr=6,kc-,rpm-,bp=3,pt-,xzmm=9,jpc-,zl=2,szt=3,btd=1,qvg=3,qlc=5,rlgq-,bhs-,qjlt=1,crmd=9,cbgltg-,sqq=3,sdv=3,mgdzf-,lkk-,gbt=5,grcdlv=6,nt-,qv-,ckqkrp-,xs-,vh=1,djlm=2,qpkz=7,cxhp-,qpkz=7,zsrf=2,jzd-,rpl-,nsskd=4,ttcmzv-,cbv-,tfvb-,vjvl=1,lkp=5,gjz-,tfvb=5,vxb-,bz-,mqfxv-,lpg=4,xlt-,dfx-,tx-,ptncqk=2,vxb-,mq=8,vqtr=7,rs-,xkxt=7,xrr-,pn-,dmfz=1,xj-,xl=5,czzq-,cbv-,zp=3,lpg-,sqvr-,vx=5,mhg=6,mskmt=4,vfnjd=7,zv-,czr=8,dzbkl=4,zr-,cqrp-,jm-,zqg-,sj-,gxdx-,ft=2,sh-,jf-,kpz=9,sb=2,ztl-,hj-,dbznbm=3,gth-,sm=8,zmg=7,jlf=8,gl=6,jvtx=7,tcv=1,cfq=7,rv-,lq=6,kvd=5,vj-,czm=8,pgv-,lzk=7,gk-,vgcx=9,mq-,ljf=3,sx-,rhj=3,nf-,tcgcp-,jdq=3,xzmm=7,gtv-,dvhvf=2,bk=1,zdrpn-,hmbqd-,xzmm=1,trq-,dzbkl=1,jm=3,qjlt=4,hs-,tkk-,tkk-,vr-,bvfn-,ck=2,lpg-,rd-,flq-,knjsp=8,xvksp=1,gnrt-,zc=5,cxhp-,czzq-,bjhvj=2,vj=8,pv-,qd-,gnrt-,rd-,sq-,dfx=3,ms-,tdvs-,ck=2,bj-,bssj=4,gsdj=7,pf-,tsld=4,vck-,ptncqk=4,rpm=2,ldm-,gh=6,ml=6,cqrp=9,gz-,jbd-,kpz-,fvgqlc-,mp-,gb-,fx=2,bssj-,fx-,zsrf=6,btd-,fpf=6,shc=5,kb=8,rjt-,zmr=4,nq-,njj-,rlgq-,th=7,rqhc-,sz-,jk=6,xqsv-,dj=7,nt-,dz-,grgf=6,xz-,gk=9,rvh=7,pkx=8,xchx=4,hf=5,fnf-,fdk-,px-,gl=6,vp-,hmbqd=1,bff=4,xx-,ppljc=7,jm-,lnj-,xk-,pjss-,vxm-,ft-,qgc=9,rlfxr-,ml=4,xxf=2,nj-,hxg-,vmq=7,fdk=2,vpp-,qvg=1,brqld-,cld=8,qfkt-,gk-,hz-,tldf=1,gth=9,bbph-,gvd=3,sb-,xbpsnb-,km=1,xc=4,ll-,mq=1,vxb-,djlm-,gxdx-,bg-,zx-,zqg-,qrs-,gzsvq=8,rqhc-,zfp-,brscg-,xc=4,lzk=2,zc-,zmr=3,pn-,bxt=9,hf-,tx-,dfp=9,mtt=4,vck=1,tdf=6,fff=2,vr-,pgd-,pkx=1,fb=7,rp-,jrztr=5,tfvb=5,qgm=3,zz-,tmx=8,bvf=3,mkffn=5,lkt=4,jk-,tk-,phxp=4,vfnjd-,nvxng-,sq=4,rzqgr-,vcl=3,sblkv=4,cxhp=4,bvfn=3,zmbc-,cmthnv-,dtpb=4,xl-,pgd-,ttcmzv-,sr-,bp-,tcv=7,crmd=4,kzbmn=8,dq=6,vf=8,kpj=9,ml=3,xz-,cv=3,vj=6,dscx-,ktlshg=7,nklsq=5,cbv=2,zmf=8,mfl-,msbjv-,qrf=6,sz-,vlpc-,vcl-,tfvb=1,cn-,km-,jkzk=3,fnkb-,vh=4,jk-,xbpsnb=2,ppljc=4,gsh-,pn=9,bff-,rd=5,kzbmn-,cn-,hr-,gzsvq-,mxnc=9,zkhx=6,rmtp-,tng-,hxb=9,ljf=4,trq=5,dds=4,hsk=7,kf=3,sqq=1,gm-,kc-,zz=3,nv-,hs-,pc-,jvdm=1,vf-,sksgsn-,sr-,xlt-,jzd=4,gl-,ctxhnf=2,lm=5,vpc-,btd=5,vcl=4,vlx=4,sh=7,zkh=5,ldfh=1,dq=6,sblkv-,bhs=6,gx=4,rqhc-,vck-,mvrzl-,nd-,prt=8,cjvn=4,pql-,jf=6,kk=8,rpvcr-,tsld-,cqrp-,jt-,cld=4,rlkv-,bz=2,phjd=4,kmtv=7,rpqs=8,xc=8,tr-,hb-,zmg=9,mkj-,tcgcp=1,frzn=5,tldf-,lrhtt-,ptncqk=6,pjss-,gvd=6,njx=8,knjsp-,pgv-,ndvk-,ftk-,tdlc-,kv-,jcv-,pff=2,gzsvq-,hj-,rpqs=1,hs-,lnj=4,pqk-,mvrzl-,lnj=6,msbjv=2,xb=5,pkq-,hpjb=7,rd=4,vll=9,hbt=5,rdhshm-,pld=3,ggvptg-,jjz-,lkt-,xms-,jvdm-,rd-,tr=6,cbnfv-,vfm-,gx=4,pbq-,hr-,zd=9,vpr-,gj=9,hs=9,svdt=2,lkt=7,gjm=5,zqg-,fpf=6,rn-,fsb-,rpvcr-,rlkv-,xc-,mvp=3,jf=3,kqbk-,grp=1,vr-,ddt=7,zzhj=1,rnr-,ljf-,vpr-,frzn-,jkzk=7,xxf-,kzbmn-,zmr=4,bcl=7,vjvl=9,xj-,jm-,gxh=2,kqd=1,pgv=8,cfq=7,td-,bgh=3,zv=9,lthn-,fd=7,rjt=6,qx=3,phjd-,mxnc-,pf=1,hpr=9,tdvs-,ngp-,vpp=8,tng=6,zsrf=7,dfx=3,pcr-,kb-,kb-,qlh=6,ldsphm-,jjz=7,pn=2,lrn-,rjbd-,tkd=7,qrs=1,vqtr-,sj=2,rn=6,vcl=4,bdkdjc=1,grgf-,vk-,lrhtt-,zm=8,vn-,qrf=6,xl=6,nf-,mkffn-,tr=2,qm=8,djlm=3,mxb-,mvp-,kblc=8,pn=1,xd=3,zr-,kdll-,lhdz=3,knjsp=2,lzk-,cbnfv-,mq-,nd=1,pgv=7,xd=3,vxjjs-,hxb=7,sj-,fkr=1,zsq-,dfx-,tsx=8,xctm=1,sksgsn-,cmthnv-,jpc=8,ggvptg-,gxh=7,zmbc-,sq-,rpz-,kblc-,fjjtm-,kqd=4,bssj-,qdhf=8,ppljc-,pd=6,mm-,mgdzf-,hxb=8,grgrps=4,xvf=9,lkp=1,tcgcp-,lnj=8,ck=7,nkh-,bkht=2,kzmhkg=2,gsdj=1,pjss-,tng=1,hd-,xl=4,lkp-,vlp-,fr=9,vck-,xnk=5,sq-,zm=4,fqt-,kzbmn=3,fjjtm-,jdq-,tx=8,rpvcr=7,gvd=2,dzbkl-,tmx-,gpkh=8,qlc-,pkkj=2,jjz=5,xzmm=8,lkk=9,mq-,kvd-,fz=7,nvxng=1,lz=3,pqk-,kv-,tsx=4,lxl=6,zbtzr=5,ft-,tx=2,xgfjsz=9,bbph-,vc=6,ljf-,nvj-,ccq-,sb-,xk=1,pjss-,zsrf=5,kmtv=9,tcv-,dq-,kzbmn-,zzhj=9,xz=2,kmtv=5,lzk=3,prvz-,tcv-,cbfc-,lrn=9,vj-,rpm-,kpj=4,nmr-,sn=2,ll=4,sblkv=9,xs=8,ll=4,ld=3,rqhc=5,jvtx=1,lbsmh=8,rlgq=1,pt-,xl-,hj-,hv-,cxhp=8,pp-,gx=8,bdkdjc-,kmtv-,svdt=6,cfq=4,djlm=4,sn-,gx=8,xmj=5,tsld=8,rhj=3,xr-,cjvn=2,rdhshm=6,bkhdt-,fnkb-,pcjxqx-,bgh-,nf=8,vk=9,tfvb=6,ddt-,ljl-,jk=8,cjvn-,fndsl=5,vhppt=6,bgh=1,bff=2,lbld=2,jvtx-,fndsl=6,jxnd-,xzmm=8,tdvs=9,gvd-,zkhx=7,gsg-,fff-,rlgq=9,jrztr-,zfp=4,brscg-,vll=9,vp-,bdkdjc-,flq=8,jbd=1,nsskd=7,jvdm=2,hd=5,kfc=1,tkk-,nvxng-,pf=8,gth-,qlc-,zp=6,trq=9,pc=3,xk-,mkj=9,cfq-,hql=4,kld-,xmj-,bbph-,lrn=8,hb=1,ctxhnf=7,czzq=6,btd-,pt=1,fz-,kblc=7,jrztr=2,zkhx=3,dh-,crmd-,vgcx=5,ljl=8,kld-,rlkv-,sz-,bxt-,jdqmf-,zm=1,blj-,ptncqk-,qsxf-,ftk-,kblc=5,np=6,cbnfv=1,gsg-,hr=3,ggj=2,kg-,gdglbv-,qgm=5,xc-,gv-,grgrps-,lnj-,mxb-,qdhf=1,kgh=6,rpm-,dt=6,dds-,tfd-,cbfc-,fd=4,dtpb=2,fvgqlc=1,kc-,xrr-,sx=7,sdv-,lkt-,pf=5,pd=1,pql=7,ldfh-,zfp=1,qlx-,xk=5,vpp=4,gxh=7,kh=4,prt-,kpz-,ml-,cld=7,ctd=4,sdz=9,dh-,xj=2,pkx-,znkc-,hd=2,jlrh=2,grp-,jk=7,nq-,qlh-,nlk-,gsg=6,rn=5,rs=3,kblc-,hv-,nvc-,zv=5,lbsmh-,ljf-,ftk=4,ttgpr=4,bkr=5,xqsv-,pkq-,jvtx-,dfx=2,gbt=1,km=1,hxb-,td=4,szt-,tcx=1,tsx=9,vp=5,prvz-,rpm-,qjv-,pcgj=3,jdqmf-,cfq=6,ktbr=4,vpr-,zd-,rdhshm-,pd=5,kdll=8,sq=4,gk-,zmr=7,xvksp-,bqkxm-,cjvn=4,gxdx-,pld=9,vx-,lvq-,rpvcr-,jm-,czzq-,nvj-,rcj-,tcx=9,kblc=2,kqbk=7,xvksp=7,ftk=8,nmr-,gnrt=7,qpkz-,mvp-,vpr=3,kkh=1,cbnfv-,rvh-,dp=8,jlf-,mvp-,tcx-,xqsv=9,shc-,rn-,mnd=9,pql-,fdk=1,kvd=7,bvf=8,hxb-,nvc=8,zcrf=7,czm-,dmfz=6,rlgq-,vgx-,lhdz-,lxl-,ldm=1,mhg=3,xbpsnb=7,fpf-,vck-,nmd-,zc=3,nt=4,dmfz=9,tsld-,cbv=4,dq-,mxb=1,nq=8,pkx-,dmfz-,xms=3,cpqx-,gx-,njx-,rlgq-,mhg=3,vxm-,qfkt-,hd-,nvj-,zqg-,xgfjsz-,zcrf-,gx=3,gsh-,vpr=2,hpr=6,xbp-,rf=1,ddt=4,trq=3,mskmt-,vlp-,kb=2,zsrf=4,bk-,qlc=3,jvtx=3,pc=5,sksgsn-,zkhx=7,gvd=8,rs-,dfp-,gh-,grgf=3,qm=3,gjm=9,vjvl=3,ltn-,pjss-,vk-,vpr=5,qblf-,fdk-,sblkv=6,pflmt-,gm-,sdv-,gsdj=8,lpg=1,zmr-,kzmhkg-,xctm-,rqhc-,zm-,rkjn-,gxh=7,gtv-,vqtr=4,mq=2,pld-,rpz-,rhj=4,rlgq-,pf=6,jt=5,vx-,bbph=3,fkr-,rmtp=8,drtj-,vll-,zr-,rv-,jf-,gr-,crmd=5,tb-,zs-,ptncqk=5,mq=9,th-,vlpc=4,xbz=5,tm-,sh=3,bkr=3,ttcmzv-,hd=7,dn=8,kqd-,ntm-,pkx-,kqbk=8,fnf-,fhn-,nkh=1,cg-,rp-,tng=2,qjlt=5,gsg=4,dp-,jb=2,lckfs-,tsx=6,xmj=1,ktlshg=4,zqg=1,ht-,pcgj=7,nv-,hfzz=4,dh-,dj-,lvq=1,dtq-,rs=8,nd=1,kdll-,zsrf=9,ddt-,pc=1,ljl-,jdq-,lckfs=8,vhppt=1,kc-,rpz-,zcrf-,msn=7,sq=7,vpp=4,gh=9,ns-,shj-,np-,gvd-,lthn-,zl-,lrn=3,pkx=9,rjbd=4,ktlshg-,xlt=2,btd-,czzq=9,mgdzf-,vxm=3,fsp-,qd-,pn-,tfd=2,fh-,cbfc=3,blj-,gb-,jlrh-,hz=3,hql-,nmr-,pn-,bvf-,tcx=7,kzmhkg=8,mxb-,zz=4,ktbr-,kgh=3,djlm=4,rs-,dzbkl=2,nf-,xvf-,pflmt=4,xlt=4,zkh=8,ft=9,hmbqd=3,zmf=3,jk=2,lm=7,pjss-,str-,lm=9,fz-,czm-,mj-,sksgsn=1,czm-,lshv-,vqtr-,zm-,ccdd-,gm=6,kblc-,tr=9,tkd-,pqd-,hd=1,dp=8,xhqbpk=9,dfx=5,kdll-,szt-,pff-,pqd-,np-,dz=6,kkb=5,gsg-,fdk=3,cgl-,cbv=7,mj-,xgfjsz=2,hs-,qrf=3,nvxng=2,bz-,sb=4,tcx=6,gsg-,bj-,zs-,fd=3,fdk=8,ccq=7,znkc=2,bhs=5,jk=5,fdk-,nsskd=7,gk-,pd=3,jzd-,szvrqb=1,qrf=5,kdll=3,bqkxm-,zkh-,pn-,gpkh-,tbdzv=5,vp-,mgdzf-,vxm-,qkk-,mgdzf=8,rqhc-,bgh=6,vxm-,gr=3,mnd=1,rkjn-,pp-,tkd=8,mp-,xmj=2,ctxhnf-,vfm=8,mxp-,jzd-,fqt=2,xrr-,gkg-,mxb-,nmr-,hsk-,jvtx=4,rp=5,dtpb=8,zkhx-,cjvn=1,vf-,xhqbpk-,zl=4,rdhshm-,hsk-,hglmnt=6,vgcx=7,rs=4,tcgcp-,gk-,rn=6,blj-,lsn-,tbdzv=1,bcl-,gv=2,vgx-,xqsv=9,qlx=8,hpr=2,ntm-,ldm-,cld-,vvf-,nklsq-,mp-,kkh-,lr-,gth-,bz-,kx-,th-,mskmt-,dp=5,sf-,vpr=1,hz=3,pcr-,hpjb-,kzmhkg=1,xlt-,xbp=9,nklsq=7,np=3,tr-,tgm=2,pp=6,bkht-,bz-,sz=6,hzr-,lkt-,pzd=9,kqbk=8,sh-,zkh-,vgcx=4,zbx-,jjz-,czr-,jm-,kblc-,rkjn-,ml=6,ljf-,qblf-,lzx=5,nf-,mgz=4,hql-,gr-,fnkb-,vpp=7,vpr=8,hb=4,sqq=1,xlt-,mm-,vgcx=6,sf-,dt-,tb-,sj=5,vjvl-,cg=8,fhn-,nmd=4,kk=6,fr-,mvrzl=8,nd-,cpp-,gvd-,crmd=2,jxnd=8,sh-,ttgpr-,kqd-,zmg=8,rmtp=1,sf=8,vcl=2,xnk-,zmf=7,tc-,mq-,rpvcr-,jvdm-,ch-,vgcx=8,ddt-,kpz-,jvdm-,bjhvj-,vr-,ftk-,vh=1,fr=8,lvx-,vqtr-,kvd=9,tkd=9,zppl-,mrzl=3,nmd-,hbt=8,frzn=6,zbtzr=4,fkr-,vnn=2,pzd-,km=5,pqk=6,kl-,fff-,krhj-,njj-,ht-,rz=5,pff=1,zfp=8,pkqx=6,hzbm=2,tgm-,svdt-,zggqr=4,gb-,btd=5,vc=4,rpqs=3,ndvk-,rhj=1,mxnc-,vlr=5,nklsq=5,hpjb-,svdt-,nt-,cpp-,jxnd-,xxf=2,hsk-,tsld-,qpkz=3,prvz=9,dlmfb=7,cpp-,lrhtt-,phxp-,vvf=7,dq-,jhmz-,jlf=8,jhmz=3,hzbm-,tx-,vlpc-,tcx=3,sblkv=8,ftk-,zd-,nd=2,qlc=7,ctxhnf=3,mqfxv=4,bff=3,ccq-,zz=1,ktbr-,pqk=5,tsld-,gzsvq-,tkk=1,hzr-,tcv-,tc=6,fpf=1,pcjxqx=1,jzd=1,ks=6,gjm=7,nxjzf-,vqtr-,xmj=3,ft-,pc=5,gs=9,rd=3,nklsq=2,zmg=1,gr-,jt-,jdq=8,rpvcr-,qlxt=9,tx-,pv=1,rcj-,jxnd-,hxg=3,rzqgr-,fc-,cn=2,nj-,xbz=7,sblkv=9,vlpc=7,kqbk-,xjd-,cfq-,nkbmj-,njj-,qlc=6,svdt-,kld-,km-,tmx-,rd=8,tx-,qrs-,pv=7,nf-,gnrt=6,zfp=8,qkk=1,mj=9,rv=1,fvgqlc=6,vn-,nt-,rpvcr-,gvd=5,td-,vxjjs-,cs=5,sblkv-,lckfs=6,hql-,mm-,xk-,jhmz=8,xrr-,cpqx-,nklsq-,tsx-,lbsmh-,dmfz=5,fpf=5,np=2,ggvptg-,gx=4,cbgltg=6,ztl=8,pn=3,kvd-,sx-,gz=5,jrztr-,gh-,xxf-,szt=9,cg-,bcl=2,czr-,qv-,vqtr=3,dvhvf-,tx-,gj=7,bj=7,hpr=8,tkd-,sqq=1,ldfh=6,mgz=6,td-,jx=8,gr-,qdhf=9,lkp-,cbv-,jm=1,bz=8,gvd=2,ljl=2,rvh=1,xl-,phxp=6,kkh-,bkht=9,lshv=3,cs=6,pv-,tcx-,lthn=8,lckfs-,sf=8,kfc=9,pt-,ch=6,rp-,ht-,fb=5,jxnd=9,grcdlv-,fkr=1,xbpsnb-,jkhg-,crs=3,xbpsnb-,pf=8,vfnjd-,lm-,szt=1,mrzl=6,drtj=5,kvd=7,jb-,lnj-,jt-,rjbd=4,rp=5,gz=9,ttcmzv-,bssj=8,qdhf=3,msn=3,grp=3,hv-,ccq=7,shj-,hb-,rpvcr-,ckx-,fx-,ht=8,gjm=4,bkr-,vpc=9,gxh-,jt=6,gg-,tr=5,pc-,rz=7,rq=8,ltn-,hs-,qgc=9,qgc=5,pd=3,lm-,crmd=6,qn=9,jdqmf-,znkc-,hxb-,gbt-,cgl=4,jbd-,lkk=3,bbph=6,bg-,hj-,zmr=6,gdglbv-,pp-,str-,brqld=6,hr=9,crs=2,zm=7,tx=4,cqrp-,vj=8,qlxt=3,hzr-,lq=8,gsdj-,mkj=9,dscx-,rd=9,kkb-,grcdlv-,mgdzf-,jcv=6,dtq=7,ltn=4,ll-,gsh=8,gsh-,nmd-,zbtzr-,vhppt-,vlp=3,cmthnv=8,pkx=5,cpp=1,vxjjs-,tdf-,cbnfv-,ljl-,vlp=8,nxjzf=4,grgrps=5,pbq=4,brscg-,bbph=8,vck=8,qkk=7,bvf=3,mj-,fb-,zqg=7,kg-,tkd=1,xgfjsz=5,vxb-,qjv-,pdjgr=9,kqd-,ckx-,vjvl-,cfq-,fhnz-,lrhtt=9,nlk-,qd-,hh-,lnj-,pf-,dlmfb-,kx-,vqtr=9,sdv=8,ndvk-,grgrps=5,hglmnt-,cgl=3,mrzl-,lr=4,czm-,kvd-,vx=5,rpqs-,ddt-,njx-,btd-,tbdzv=4,xlmx-,fvgqlc=6,zmr=4,zx=7,xzmm=8,vll-,szt-,bbph-,cbgltg-,rpm=4,th=7,hxg=9,pn-,xzmm-,qn-,zr-,bssj=9,gm-,tbdzv-,djlm=1,bkht=9,kzmhkg=6,lbld=1,msn=8,th=9,grp=9,zmf-,gm=8,qlc-,zcrf-,pf-,jk=3,frzn=3,cn-,xd=3,qkk-,zp-,vj=6,fjjtm=9,nq=2,tc-,pgv=2,dq=7,mkffn-,xnk=4,vmq=1,gsdj=1,hfzz-,jkhg=8,sm-,mxp=7,ldm=5,xk-,jlrh=8,nxjzf=7,btd-,dvhvf-,fh-,lvq-,bp=9,qpkz-,tdvs-,bp=1,tkk=9,gvd-,rvh=5,nmd-,kqd=3,gpkh=3,mkj-,qgm=6,mvp=6,ckqkrp-,nkbmj=8,tcx-,cld=7,hsk=3,bssj=3,djlm=8,xj-,pq=4,kh-,zppl-,kdll=9,lthn-,brscg=1,vgx-,hh-,ml=7,lbld=5,dn-,shc=3,cs-,mkffn-,gz=5,jpc=9,fb=1,crmd=3,tsx-,kqbk=8,kzmhkg-,zmf=1,vx=2,jpc=6,dq=4,cbgltg=4,hf-,qn-,lthn-,qr-,gxdx=6,vll-,kfc-,vlpc-,lrhtt=1,jt-,kl-,pc-,lbsmh-,nmr-,sj-,gl=1,czzq-,kb=1,fnf-,trq=4,kc=6,mskmt=2,gtv=3,vfm-,vnn-,lbld=4,sr=7,dmfz-,dtpb=4,prt-,gsdj=3,sf=8,vpc-,pqk=6,fpf=1,gvd=3,sz-,kfc-,zc-,gkg-,cs-,jhmz-,dtpb=2,gm=6,gsg=8,zppl=8,ks=2,gg-,vmq-,bdkdjc=4,qrs-,kkh=7,hfzz=1,qx=1,trq-,nxjzf-,bvf-,hf-,zs=7,frzn-,gtv-,ktlshg=3,fsb=4,nv-,qd-,gvd=3,ms=4,lzk-,zmg=8,qlxt=6,sz=9,tc-,vpc-,bbt-,zmf=7,ml-,bz-,vjvl=6,tx-,gr-,pv-,hzbm-,kh-,rnr-,bhs=8,qlx-,vk=6,sb=3,qblf=3,gvd=2,kzbmn=4,qjv=2,fx-,sz=9,lsn-,vmq=8,mxnc-,vlr=9,cgl=4,mvp-,rs-,fsp-,zd-,rv=9,phjd=4,jrztr=5,bj=7,rp-,kf-,fc-,szvrqb=1,xlt=1,ctd=9,fkr=3,rz=8,hv-,rkjn=8,bgh-,vcl-,bkhdt=1,dmfz-,bhs-,vgcx-,mm-,tcv=1,bkhdt=2,ftk-,mskmt-,hd=8,bkht-,rz=4,vj-,pkqx=4,zsq-,ccdd=4,kf=9,fff=1,bqkxm-,phjd-,px-,ptjlc-,qn=1,sblkv=4,zfp-,pflmt-,kc=6,rn=1,jk=5,rpm-,hxb-,xj-,cpqx-,dj=6,rdhshm-,km-,zv=8,bp-,kf-,qx-,xkxt=7,pgv=1,dmfz-,xnk-,mxnc-,jjz-,jb-,ck=6,sdv=1,jlrh-,nklsq-,zzhj-,czm-,mgdzf=7,pt=9,kld-,ldsphm=7,gg=9,pbq=8,zm=7,kf-,zbx-,fjjtm-,tm-,rn-,mrzl=5,qlh-,lckfs-,msbjv-,pqk-,ms-,djlm-,tb-,blj-,fsp=5,zs-,zv-,rv-,xrr-,kkh=8,msn=5,kpz-,ckqkrp=3,gg-,vqtr-,bdkdjc=1,ld=1,mhg-,gv-,tmx=1,kmtv=1,ngp-,nj-,hpr-,nfzh-,phjd-,zv-,zl=1,mnd-,tdlc=2,kdll=7,ckx=7,np-,pp=3,jm-,tcv-,gb=8,vlp-,tcx=3,td=5,xk=3,gb=4,bdkdjc-,zv=3,dt=7,xr=3,ggqj-,nlk-,brqld=1,lvx=2,lpgr=1,kdll-,gnrt-,fnf-,hd=3,ldm=8,ttgpr=7,rnr-,dz=2,vck-,zdrpn-,nt=4,lpgr-,ckqkrp-,lckfs-,ccdd=5,prvz=3,zs-,sx-,xmj=4,zm-,cn-,gv=9,zcrf-,jx=7,td=5,tsld-,hs-,cvdt=2,dfp=2,mrzl-,kvd=4,nsskd=8,nsskd=4,ggj=1,xj-,qjlt-,mvp-,tx=9,vpc=5,ft-,zqg-,grp-,cbnfv=8,xrr=4,gjz-,dlmfb-,kpz-,vqtr=8,pcgj=7,sr=9,pgv-,fkr=4,vpp-,grgrps=4,jb-,bkhdt=3,vgx-,xrr-,zggqr=2,cs-,kkh=5,sz=3,shj=1,mj=9,fpf-,jdqmf-,pff-,ks-,zppl-,ch=1,gx=8,gkg-,ltn=8,pzd-,ckqkrp-,cfq=5,gj=4,nq-,nsskd=4,dbznbm-,ldm=8,pld=5,lbsmh-,lm=7,sf=3,pd=2,hxb=6,ktlshg-,pkkj=1,dj=9,rdhshm-,vlx=7,cpqx=4,kmtv-,pd-,vx=6,bhs-,ckqkrp=2,px=8,kkb-,gsdj-,sf-,bhs-,mkffn=4,qdhf-,cf=4,xj-,fd=7,hzbm-,tr=7,ccdd-,xvksp=4,nvc-,rpl-,gnrt=2,px-,hpjb=9,ttgpr=1,lckfs=2,qlc-,tsld=3,xs-,kc-,hz=4,ggqj-,fnkb-,flq-,lkt-,hf=9,zzhj=7,vpr=8,bff-,np=9,lkt=1,trq=1,zsq-,phxp=2,dds-,zcrf=4,tkd-,mkffn=2,nlk=6,sx=6,ldfh=3,vj-,qlxt-,rlgq-,rd=9,ztl-,sr=9,bdkdjc=5,dmfz-,rnr=7,mj-,kh-,czm=4,kh=2,mgz-,vh-,jrztr=7,xb-,nd-,vvf=3,sblkv=9,kmtv=1,zd=8,grgf-,ch-,shj-,lq=6,nkh=9,ckx-,zv-,kkh-,xchx=4,jlrh-,cf-,fhn=2,ktlshg=1,bvfn-,zkhx-,sj=1,xbp=6,rdhshm=8,cbgltg=2,trq=1,hr-,mtt=4,tpgzk-,bjhvj-,jjz=1,gxh=7,rzcmqb-,kx=3,ckqkrp=3,dmfz=6,lz=6,xr-,rlgq=9,cfq-,rn-,qvg=6,td=6,tq-,kg-,sksgsn-,tdvs=4,zbtzr-,pdjgr=7,mxnc-,pcr-,nvxng=1,sdv-,ks=7,pqk-,gv-,fnf-,zsq-,zdrpn-,pf=5,pql=1,czr-,kdll-,kfc=7,ggvptg=7,sdz=3,nt-,jvdm=8,shj-,tng-,xr=6,gs-,lz=7,zl=1,lsn=9,brscg-,sf-,gth=6,zmr-,ktlshg=4,rp=2,vc=7,ll=9,dlmfb=5,xcz-,pkx-,bbt-,kgh-,zbx-,xvf=6,nkbmj-,jx-,fr-,jhmz-,sr=2,gmcq-,cbnfv-,zkh-,rp-,bbt-,bbph=1,bvfn=9,kg=8,zv-,qjlt=1,km=3,lbsmh-,lrn-,zdrpn-,ngp-,ljl=8,bff-,nfzh-,mhg-,xr=6,ktbr-,pqk-,kf-,str=8,lkp=1,px-,lnj-,fhnz-,ck=6,vfnjd=4,fnf=7,phxp=4,ggqj-,qn=2,ttgpr=7,lbsmh=5,fx=4,jlf-,dfx=8,lpgr=8,cbfc=2,nd-,zv-,np=3,hbt=7,gtv=7,qjv=5,qpkz-,hxg-,pn-,gth-,hs=3,kkb=9,cbgltg=4,pkqx=6,bdkdjc=3,rqhc=4,jcv-,dt-,zqg-,cbfc-,vpr=1,lthn-,xbz-,ljl-,dj=8,xkxt=5,vgx=8,xrr-,sz=7,qjv=1,kh-,gj=3,fsp-,gjm-,xbpsnb-,lkp-,dlj=4,rqhc-,jbd-,fx-,fc=2,jlrh-,dq-,kp=9,pqk=3,kfc-,blj-,jb=2,cv=9,ptncqk=5,pc=2,tb-,bhs-,ck=7,gdglbv=1,hr-,tc-,vqtr=3,hsk-,cv-,tm-,bvf=6,lzk=9,kblc-,vpr=4,fjjtm=5,fjjtm-,mqfxv-,rn-,str-,tbdzv-,rcj-,zmr=5,dtpb-,qpkz-,ckqkrp=5,sblkv-,btd-,bbt=6,vmq-,hj=1,grgrps=7,cgl=8,xjd=5,bbt-,pq-,bvf=6,zmf=4,qlh-,jdqmf-,ns=1,qr=3,lbsmh=6,qv=7,nkbmj=1,mkffn=9,ptncqk-,fdk-,vxm-,xchx-,czm-,bff-,nt=8,gg=6,grgrps-,gth-,shc-,qlc-,msbjv=3,nsskd=9,tfvb=1,nt-,gl=4,svdt-,brqld-,gjm-,lsn=2,nt=9,pflmt-,fndsl-,vc=6,fnkb-,njj-,lsn=4,cv-,cn=9,tkk=2,tb=3,fff=5,grgf-,bhs=6,zppl=5,kmtv=2,hs-,zs-,zmr=8,kgh=5,hj=4,prt-,qsxf=3,gxh-,hsk-,kdll=5,bbt-,dscx-,bjhvj=9,kqd=1,hf=3,pdjgr=3,bbt-,fndsl=2,xnk=7,ldsphm=5,vhppt=1,vgx=9,vf=3,gsdj=5,ldsphm-,vpc-,pp=4,hxb-,zcrf-,pf=6,vxb=8,zdrpn-,kp-,mqfxv-,vfnjd=9,tpgzk=6,gg=3,str-,bbph=7,cfq-,gb=5,dscx=9,str=9,ndvk-,gzsvq=8,th-,jdq=2,crmd-,ptncqk-,prvz=9,mrzl=4,bhs-,xzmm=3,jrztr-,gv-,prt-,xvf=6,rz-,fff=1,nkh=1,czr=1,shj=8,jk-,xvksp=4,jkzk-,tfd=4,lrhtt=5,crmd-,fd=9,qrs=9,zfp=7,tsld=7,rqhc-,pcgj-,qd-,cqrp-,vj-,zz-,lnj-,kld=3,mgdzf-,mfl=9,ht-,bkr-,drtj-,bbph-,xnk-,lpg=7,dbznbm-,vll=5,rz-,jrztr-,mp=7,gxdx-,dn=7,gxdx=6,fff-,pzd=2,phxp=4,lq-,xtcc=3,bcl=7,vxm-,zkhx=4,grgf=6,vj-,cn-,vmq-,hr=7,czr-,kld=2,tcx-,tfd=2,crmd-,lkk-,vcl=3,cbgltg-,qvg=9,pcjxqx=1,hpjb=4,jk=2,grgf-,nkbmj=6,hxb-,zbtzr=1,bxt-,vjvl=1,cv=1,pkqx=3,xbz=2,svdt-,zsq=8,tbdzv-,zmbc-,dbznbm-,kpj-,qdhf-,tfvb=9,rzqgr-,kpz-,ltn=6,krhj-,jpc-,fc=3,msn=5,nxjzf-,ztl-,zr-,rp=3,hr=9,mvrzl=8,rp-,brqld=3,hbt-,lshv=8,vh-,tb=8,rzqgr=2,dsp=6,ddt=8,zmf=4,kdll-,nlk-,tkd=5,jdq=4,frzn-,kpz-,cbfc=1,nq=9,nmr-,zppl=6,tcgcp=6,sz=8,bg-,bkht=8,xvksp=3,flq=4,xbpsnb-,jxnd-,kk-,prvz-,xgfjsz=6,hf-,zfp=9,pcr-,vck=9,hb=7,mxb=9,ml=8,jzd=4,kh-,pbq-,hxg-,lxl=8,kb=2,lq=2,px=7,dvhvf-,mm=1,fkr-,pn-,xk-,xl=7,pf-,msn-,sq-,szt=6,rp-,fx=6,vxjjs=2,dfx=1,rv-,dfx-,bkht=2,rs-,nfzh-,ppljc-,kl=3,pkkj=1,nvj-,gjz-,rs=9,svdt=3,vjvl-,tdlc=1,qlxt=5,gz=1,jb-,kld-,ft-,hfzz=7,vnn=6,rpz-,tk=6,bvf-,xxf-,prt-,rzqgr-,bg=5,qblf=2,hj-,bxt-,zr-,tpgzk-,vlx-,ld=1,sj-,sdz=8,pbq-,kmtv-,tkk-,xnk=5,cxhp-,gnrt-,jdqmf-,fkj=5,gxdx-,qlx-,hb=6,xhqbpk=8,bk=8,jrztr=3,kdll=7,gs-,sr=6,vc=9,vfm=1,pgv-,pcr-,gk-,fkj=4,zx=6,xk-,pjss-,pkq-,hzr=3,xl-,czzq-,qr-,zr-,xb=1,fc-,ckx=4,cxhp=7,hmbqd=1,dq-,ttgpr=1,zm-,rv-,gr-,xs-,str=9,sb-,qkk-,nkbmj=6,xkxt=6,dfx-,vjvl-,gv=4,blj=2,cpp=9,bp=3,xnk-,frzn-,rlfxr-,kb=8,fsp-,vxb=2,kqbk=7,zm=5,bvfn-,lq-,mxb=6,rn=6,szvrqb=1,lzx-,bjhvj=4,kpj=9,tc=8,xbpsnb-,zfp-,fhnz=3,hxg-,cbnfv=5,ms-,hglmnt=4,ltn=6,nmd=8,mp=5,dfx-,dj-,tm=4,mskmt-,rv=2,mrzl=6,zkh=7,vf=3,dn=5,gh-,gmcq=5,ccq-,vf=9,qsxf=2,lvx-,mkj=6,rz=2,xj-,rmtp=1,vf-,fsp-,pkqx-,gsdj=8,grgf=9,km-,shc-,zd=1,ngp=2,pff-,qrs=7,frzn=6,grgf-,mxnc=7,xk=5,ktlshg=7,fkj=2,xbpsnb=9,grgrps=1,sqvr=5,czm=6,jdqmf=5,vlr=8,vc-,str=7,rvh=2,rv-,kqd-,qdhf=6,jx-,gl=2,cbnfv-,mtt-,bkhdt=1,kk=4,cpqx=5,jlrh-,fjjtm-,bff-,cbgltg=8,mkj-,nf-,fkr=1,vxjjs-,xx=3,xchx-,ppljc-,pkx-,vpr-,ldm-,vpr=4,lkk=3,ccq=3,ml-,dscx-,kqbk=4,gb=6,kh=7,xrr=9,fx=8,zl-,ft=6,dj-,grcdlv-,mgz-,kl=9,kpz-,gj=6,ccdd-,jdqmf=6,lhdz=7,pp-,gkg-,fsp-,gl-,tsx-,qkk-,pcr-,zfp=3,px=5,lkp=5,cmthnv=9,pp-,xl=3,gvd-,kvd=8,tsld=1,mhg=9,tldf-,kzbmn-,nv-,lkt=7,xd-,lkp-,rzqgr=3,zzhj-,rpm-,jt-,grgf-,xlt=8,hzbm=4,vn-,tfvb=4,vnt=9,qlx=5,nxjzf=4,xcz-,dz=7,drtj=3,fr=8,rd-,gmcq-,mxb-,djlm-,nvc-,pq-,ntm=8,njj=7,ftk=3,cjvn-,jxnd=7,cld-,rd=3,mskmt=3,bdkdjc=2,xms-,bdkdjc-,hs-,kl-,ggvptg-,fsb=6,xnk=3,lnj=8,vjvl=9,nvxng-,pq=6,rhj=9,zdrpn=9,dzbkl=3,lr-,zmr-,zc-,ccq-,xl-,tng-,lr-,xlt-,qx=7,zmr=7,msn-,cld-,pp-,qx=4,rs=3,vlx-,pkqx-,ggqj-,lthn=6,lsn=8,kld-,fsp-,fd=4,vh=9,qr-,gvd-,hsk=5,bvf=2,fc=1,gnrt-,svdt=1,gpkh-,pgd-,dtpb=2,nd-,ngp-,zp-,cbv-,zkh-,lbsmh=1,jlf-,nj=7,xchx=6,nj-,hql=9,xkxt-,td=1,qm=2,ppljc=6,zbx=9,kqbk-,xtcc-,tdvs-,qx-,mfl-,qrs=5,nvxng-,th=1,fd-,qr=8,qblf=2,znkc-,ntm=4,njx=6,gx=2,tbdzv-,fjjtm=8,gjm=2,qd-,gm=5,zd=7,lm=5,zx=9,dbznbm=3,mxb-,ft-,lbld=6,pql-,pd-,rlgq=8,kfc=9,ggvptg=6,ldsphm=2,ttgpr=3,cf=1,gv-,ppljc=8,hr-,zx-,sksgsn-,szt=3,xr=4,pflmt-,tdf=8,hglmnt=6,qlc=2,kqbk=8,rjbd=7,nf-,td=4,xjd-,bp=5,hv-,fsb-,lshv=2,zmf-,kzmhkg=1,qrs=8,jdqmf=1,pld-,vjvl=6,zkhx-,kfc-,bvfn-,gv=6,vr=7,gpkh=8,gsg=9,ctxhnf=8,jt-,xgfjsz=3,qlc=9,nmd-,vmq-,ptjlc=4,lxl=8,nvxng=9,zbtzr-,tfd=4,jbd-,lq-,kpz-,lzk=9,pgv=5,tq=5,fndsl-,kblc=9,bp-,gl=7,mtt=7,gr-,np-,pbq=7,zggqr=3,vnt=8,frzn=4,qdhf-,sblkv-,bqkxm=6,vlpc=9,sr=6,lr=9,gzsvq=1,kh-,pc-,xc=6,tbdzv=8,crmd-,gbt-,hr=5,xcz=3,xxf=3,xc-,svdt-,sf-,rq=1,cn=6,znkc=1,jt=2,hh-,xd=5,gx=5,sdv=1,gvd-,dtq=8,vlx-,kl-,vjvl=9,qsxf-,zppl=7,gzsvq=5,tk=6,tfd=6,dsp=3,xms-,np-,np-,qgc=5,dvhvf=2,kqbk=1,ctxhnf-,vr=7,rpz=1,mxb-,djlm=5,qn-,hsk-,tkk-,tng=3,dzbkl-,ftk=9,pqk=7,gjz=1,kb-,fc=8,fsb=9,rpz=5,tsld=5,sm=2,jzd=6,blj-,xms-,qlx-,kl=4,rjbd-,vlp-,fr=5,knjsp=3,tcv-,gdglbv=2,jzd-,qrf=6,lzx=9,kkb-,hpjb=1,vjvl-,tcv-,cv-,mskmt=6,ftk-,vjvl-,xs=9,cjvn-,shc=9,ccdd=5,mgz=4,qdhf=8,rpm-,tbdzv=7,knjsp=5,mtt=3,xvf-,qlc=8,kpj=5,rdhshm=9,xmj-,xqsv=4,vj=1,dfp=1,tq=9,jlrh=4,bbph-,gsh=8,fpf-,nsskd=1,kpj=2,jpc-,lkp=4,sqq-,sm=3,vnt-,dfx-,rzcmqb=4,gtv-,rnr-,tcv-,cvdt-,tc-,zbtzr=2,qx-,rs=4,xkxt=4,ckqkrp=8,fr=7,gb=4,kv=3,vh-,pjss=4,bgh=7,sf-,fkr=2,mkffn=2,ktbr=7,vxb=4,rz-,zggqr-,ltn=8,cjvn-,rmtp-,fndsl-,hd=2,sdz-,ktbr-,nlk=8,jx=7,lshv-,cqrp=6,nt-,zmr=2,rd=7,rf=8,ngp-,brqld=5,jt=6,sdz-,ll=2,zz=3,mvp=6,jb-,fff=2,bjhvj-,lkt=8,msbjv=7,nt=9,hfzz=7,nq-,lrn=4,mxp=6,gv=6,svdt=1,gth=4,jkzk-,qn-,drtj-,gh-,bvfn=1,kkh=1,gl-,ptncqk-,ns=4,tr-,msbjv=4,jlrh-,zsrf=8,pt=4,dh-,rf=3,mj-,mkj=6,pgd=2,jcv-,lckfs-,rpm=5,gm-,prt-,gh-,sz-,zkhx=4,dsp-,np-,zsq-,rpl=1,rq-,sksgsn=2,gbt=8,ht-,pq=7,kl=8,mqfxv-,zbtzr-,qr-,shj-,tk-,pcjxqx-,nklsq=5,gz-,kp=2,bjhvj=8,mfl-,bkhdt-,zbx-,mxp=7,pdjgr=7,sx-,xqsv=4,mskmt=8,lzx-,gv=8,vp=2,cs-,vcl-,bg=9,ft-,bz-,ml=4,ljl=2,prt=8,cv-,lrn=9,pq=7,xj-,ttgpr=4,cg=3,lm=1,zc=4,zzhj-,tkk-,nvj-,zmbc=7,lrhtt=1,kp=5,gb-,lshv-,gsg=4,xx=2,szvrqb=3,pkq=7,gjz-,cn=4,czr-,fsb-,zfp=3,ks-,lthn-,tm-,fhnz=3,fff=5,gj=4,drtj=9,mhg=5,cfq=3,qr=6,xc-,cld-,cfq=5,dz-,qsxf=3,lm-,fsb-,rzcmqb-,fr=2,gmcq-,lkk-,bz-,tbdzv=5,tdvs-,vfnjd=8,flq=3,szvrqb=5,gxh-,vc-,qkk=7,cpqx-,hh-,gj=3,zkh=3,pkx=3,vxb=6,jpc=8,ndvk-,gh=6,bj-,pd=7,km-,vlpc=6,bgh-,jt-,fnf=8,tsx=6,vfm-,gxh-,gdglbv-,ljl=6,hzr=8,djlm-,zcrf=2,np-,qsxf=6,ttgpr=2,bhs-,nfzh-,kv=5,xbpsnb-,xms-,zmr-,xj-,gsh=1,bqkxm=3,cld-,pt-,sdv-,mrzl-,nlk-,pq=9,hfzz=4,nlk=8,fff-,hd=9,cmthnv=1,ckqkrp=3,cbgltg=9,vfm=7,gs=1,zkh=2,ccdd-,kzbmn-,lkk=6,kfc=3,bz-,nj-,ck-,sz-,kdll=1,mrzl=4,djlm-,bvfn-,zdrpn-,zr=4,cbv-,mhg-,fndsl-,jvdm=6,cf-,mxp-,ljl-,tr=3,dzbkl-,tk-,pkkj=6,dh=2,kblc-,zbx=3,pcr=6,bg-,sksgsn-,sdz=7,mxnc-,lpg=2,fb-,tkk-,mxb=5,lckfs=9,dmfz-,jx-,rqhc-,kc-,cbgltg-,ggvptg=1,vlp-,pp-,pt-,hbt-,rjbd-,jlf-,zmbc-,tq-,hpjb=1,gjz-,gth-,jk-,ktbr=5,grp=5,knjsp-,zr=3,tq=9,tcv-,gjz-,flq=2,jlf-,hf-,bkhdt=8,bxt=8,vgx=4,nvj-,rkjn=1,mj-,kzmhkg=5,rqhc=3,vx-,ptncqk=8,xb-,mq=2,gsg=4,vk=7,pkqx-,gm-,sb=8,sn-,crs-,xrr=7,dz=6,ft-,dj-,ft=7,lz=2,dt-,xhqbpk-,gm-,xmj=8,gtv=4,mxb-,tk=8,qv=2,jf=4,xk=7,svdt=6,zm-,mxp=1,gj=1,pqk-,nfzh=1,knjsp-,rf=4,mgz=8,knjsp-,zd=9,pkx=6,tcx=5,sf=4,vll-,czm-,bdkdjc=3,nvj=3,nv-,tcv=4,xnk-,gr-,jt=5,nmd-,rn-,th-,gmcq-,bxt=2,xbpsnb-,ns-,fsp=2,mvp=1,zbx-,lthn-,rvh=5,rcj-,nvxng=1,kg-,cbnfv-,jb-,crs=2,sksgsn=3,xxf=2,mskmt=8,hql=1,kzbmn=6,ttgpr=7,ckqkrp=9,rpvcr=3,jjz-,brqld-,xcz-,tdlc-,nkbmj-,gsh=9,ckx=9,zs-,sh=5,cvdt-,vlp=6,gl-,ftk=5,fc-,qx-,grcdlv-,dlj=1,hzbm-,zs=2,sj-,rv-,kl=9,bjhvj-,vlp=6,hzr-,ccq-,dfx-,dh-,czm-,ld-,jkzk=2,rs=8,pzd-,xlmx-,gdglbv-,qrf-,fvgqlc-,rpvcr=8,lxl-,pf-,lshv-,bdkdjc=2,tcv-,th=4`;

function hash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    const ascii = str.charCodeAt(i);
    h += ascii;
    h *= 17;
    h %= 256;
  }

  return h;
}

function part1(input) {
  let total = 0;
  for (const str of input.split(",")) {
    const h = hash(str);
    // console.log(`${str} => ${h}`);
    total += h;
  }

  return total;
}

function part2(input) {
  let table = [];
  for (let i = 0; i < 256; i++)
    table.push([]);
  
  for (const cmd of input.split(",")) {
    if (cmd.endsWith("-")) {
      const label = cmd.substring(0, cmd.length - 1);
      const h = hash(label);
      table[h] = table[h].filter((x) => x.label !== label);
    } else {
      const [label, length] = cmd.split("=");
      const h = hash(label);
      const lens = table[h].find((x) => x.label === label);
      if (lens)
        lens.length = length;
      else
        table[h].push({ label, length });
    }
  }

  const totalPower = table.map((box, boxIndex) => {
    return box.map((lens, lensIndex) => {
      return (boxIndex + 1) * (lensIndex + 1) * lens.length;
    }).reduce((prev, cur) => prev + cur, 0);
  }).reduce((prev, cur) => prev + cur, 0);

  return totalPower;
}

console.log(part1(sampleInput));
console.log(part1(realInput));
console.log(part2(sampleInput));
console.log(part2(realInput));
