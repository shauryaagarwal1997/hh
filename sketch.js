var bg1,bg2,bg3;
var appState=1;
var startBut;
var indiaBut,usBut,singaporeBut,chinaBut,russiaBut,japanBut,franceBut,italyBut,australiaBut,germanyBut;
var uttarakhandBut,delhiBut,maharashtraBut,gujaratBut,upBut,westBut,tamilBut,sikkimBut,mpBut,rajBut;
var newBut,sanBut,chicagoBut,losBut,washBut,philadelphiaBut,phoenixBut,miamiBut,stLouisBut,pittsburghBut;
var parisBut,lyonBut,strasbourgBut,nantesBut,toulouseBut,bordeauxBut,marseilleBut,lilleBut,dijonBut,limogesBut;
var romeBut,veniceBut,pisaBut,sienaBut,cataniaBut,parmaBut,bolzanoBut,tarantoBut,vicenzaBut,pompeiiBut;
var moscowBut,kazanBut,yekaterinburgBut,omskBut,samaraBut,tomskBut,ufaBut,magadanBut,astrakhanBut,chitaBut;
var dehradunBut,haridwarBut,pithoragarhBut,champawatBut,chamoliBut,nainitalBut,almoraBut,uttarkashiBut,pauriBut,chakrataBut;
var kanpurBut,mathuraBut,muzaffarnagarBut,lucknowBut,jhansiBut,varanasiBut,agraBut,meerutBut,firozabadBut,saharanpurBut;
var jaipurBut,jodhpurBut,udaipurBut,jaisalmerBut,ajmerBut,bharatpurBut,chhitorgarhBut,alwarBut,kotaBut,mandoreBut;
var ahmedabadbut,suratBut,rajkotBut,gandhinagarBut,jamnagarBut,anandBut,ankleshwarBut,dwarkaBut,khedaBut,jetpurBut;
var bhopalBut,indoreBut,gwaliorBut,jabalpurBut,chhindwaraBut,satnaBut,betulBut,khajurahoBut,rewaBut,shivpuriBut;
var gangtokBut,namchiBut,rangpoBut,singtamBut,lachungBut,pakyongBut,geyzingBut,rongliBut,ranipoolBut,ravanglaBut;
var kolkataBut,durgapurBut,siliguriBut,darjeelingBut,krishnanagarBut,bankuraBut,bolpurBut,midnaporeBut,murshidabadBut,hooghlyBut;
var chennaiBut,kanchipuramBut,maduraiBut,thanjavurBut,ootyBut,rameswaramBut,thiruvarurBut,kanyakumariBut,dharmapuriBut,krishnagiriBut;
var mumbaiBut,puneBut,nagpurBut,aurangabadBut,jalgaonBut,ahmednagarBut,chandrapurBut,osmanabadBut,shirdiBut,ulhasnagarBut;
var beijingBut,shanghaiBut,wuhanBut,xianBut,chengduBut,tianjinBut,nanjingBut,kunmingBut,ningboBut,nanchangBut;
var tokyoBut,kyotoBut,osakaBut,sapporoBut,hiroshimaBut,yokohamaBut,nagasakiBut,kitakyushuBut,kawasakiBut,kagoshimaBut;
var sydneyBut,melbourneBut,perthBut,brisbaneBut,adelaideBut,canberraBut,hobartBut,mackayBut,bunburyBut,lismoreBut;
var berlinBut,munichBut,hamburgBut,nurembergBut,cologneBut,aachenBut,duisburgBut,rostockBut,bochumBut,oldenburgBut;
var jurongBut,seletarBut,yishunBut,rochorBut,clementiBut,kranjiBut,novenaBut,temasekBut,hougangBut,sengkangBut;
var newhr,sanhr,philadelphiahr,chicagohr,loshr,stlouishr,phoenixhr,washhr,miamihr,pittsburghhr;

function preload(){
bg1=loadImage("backgrounds/weather.jpg")
bg2=loadImage("backgrounds/bg2.jpg");
bg3=loadImage("backgrounds/moon.jpg");
getnewTime();
getsanTime();
getstlouisTime();
getchicagoTime();
getlosTime();
getmiamiTime();
getwashTime();
}
function setup(){
createCanvas(displayWidth-20,displayHeight-50);
startBut=createButton('LETS GET STARTED');
startBut.position(displayWidth/2-150,displayHeight/2-60);
startBut.size(350,50);
startBut.style('background','lightgreen')

    jurongBut=createButton('JURONG');
    seletarBut=createButton('SELETAR');
    yishunBut=createButton('YISHUN');
    rochorBut=createButton('ROCHOR');
    clementiBut=createButton('CLEMENTI');
    kranjiBut=createButton('KRANJI');
    novenaBut=createButton('NOVENA');
    temasekBut=createButton('TEMASEK');
    hougangBut=createButton('HOUGANG');
    sengkangBut=createButton('SENGKANG');
    
    jurongBut.size(250,50);
    seletarBut.size(250,50)
    yishunBut.size(250,50)
    rochorBut.size(250,50)
    kranjiBut.size(250,50)
    clementiBut.size(250,50)
    temasekBut.size(250,50)
    novenaBut.size(250,50)
    hougangBut.size(250,50)
    sengkangBut.size(250,50)

    jurongBut.style('background','orange');
    seletarBut.style('background','lightgreen');
    yishunBut.style('background','lightgreen');
    rochorBut.style('background','lightblue');
    kranjiBut.style('background','orange');
    clementiBut.style('background','yellow');
    temasekBut.style('background','yellow');
    novenaBut.style('background','pink');
    hougangBut.style('background','lightblue');
    sengkangBut.style('background','pink');


    indiaBut=createButton('INDIA');
    usBut=createButton('U.S.A.');
    germanyBut=createButton('GERMANY');
    australiaBut=createButton('AUSTRALIA');
    russiaBut=createButton('RUSSIA');
    chinaBut=createButton('CHINA');
    japanBut=createButton('JAPAN');
    singaporeBut=createButton('SINGAPORE');
    franceBut=createButton('FRANCE');
    italyBut=createButton('ITALY');
    
    indiaBut.size(250,50);
    usBut.size(250,50)
    germanyBut.size(250,50)
    franceBut.size(250,50)
    italyBut.size(250,50)
    russiaBut.size(250,50)
    chinaBut.size(250,50)
    japanBut.size(250,50)
    singaporeBut.size(250,50)
    australiaBut.size(250,50)

    indiaBut.style('background','orange');
    usBut.style('background','lightgreen');
    germanyBut.style('background','lightgreen');
    australiaBut.style('background','lightblue');
    singaporeBut.style('background','orange');
    russiaBut.style('background','yellow');
    chinaBut.style('background','yellow');
    japanBut.style('background','pink');
    franceBut.style('background','lightblue');
    italyBut.style('background','pink');


    berlinBut=createButton('BERLIN');
    munichBut=createButton('MUNICH');
    hamburgBut=createButton('HAMBURG');
    nurembergBut=createButton('NUREMBURG');
    cologneBut=createButton('COLOGNE');
    aachenBut=createButton('AACHEN');
    duisburgBut=createButton('DUISBURG');
    rostockBut=createButton('ROSTOCK');
    bochumBut=createButton('BOCHUM');
    oldenburgBut=createButton('OLDENBURG');
    
    berlinBut.size(250,50);
    munichBut.size(250,50)
    hamburgBut.size(250,50)
    nurembergBut.size(250,50)
    cologneBut.size(250,50)
    aachenBut.size(250,50)
    duisburgBut.size(250,50)
    bochumBut.size(250,50)
    rostockBut.size(250,50)
    oldenburgBut.size(250,50)

    berlinBut.style('background','orange');
    munichBut.style('background','lightgreen');
    hamburgBut.style('background','lightgreen');
    nurembergBut.style('background','lightblue');
    cologneBut.style('background','orange');
    aachenBut.style('background','yellow');
    duisburgBut.style('background','yellow');
    rostockBut.style('background','pink');
    bochumBut.style('background','lightblue');
    oldenburgBut.style('background','pink');


    sydneyBut=createButton('SYDNEY');
    melbourneBut=createButton('MELBOURNE');
    perthBut=createButton('PERTH');
    brisbaneBut=createButton('BRISBANE');
    adelaideBut=createButton('ADELAIDE');
    canberraBut=createButton('CANBERRA');
    hobartBut=createButton('HOBART');
    mackayBut=createButton('MACKAY');
    bunburyBut=createButton('BUNBURY');
    lismoreBut=createButton('LISMORE');
    
    sydneyBut.size(250,50);
    melbourneBut.size(250,50)
    perthBut.size(250,50)
    adelaideBut.size(250,50)
    canberraBut.size(250,50)
    brisbaneBut.size(250,50)
    hobartBut.size(250,50)
    mackayBut.size(250,50)
    bunburyBut.size(250,50)
    lismoreBut.size(250,50)

    sydneyBut.style('background','orange');
    melbourneBut.style('background','lightgreen');
    perthBut.style('background','lightgreen');
    adelaideBut.style('background','lightblue');
    canberraBut.style('background','orange');
    brisbaneBut.style('background','yellow');
    hobartBut.style('background','yellow');
    mackayBut.style('background','pink');
    bunburyBut.style('background','lightblue');
    lismoreBut.style('background','pink');


    tokyoBut=createButton('TOKYO');
    kyotoBut=createButton('KYOTO');
    osakaBut=createButton('OSAKA');
    sapporoBut=createButton('SAPPORO');
    hiroshimaBut=createButton('HIROSHIMA');
    yokohamaBut=createButton('YOKOHAMA');
    nagasakiBut=createButton('NAGASAKI');
    kitakyushuBut=createButton('KITAKYUSHU');
    kawasakiBut=createButton('KAWASAKI');
    kagoshimaBut=createButton('KAGOSHIMA');
    
    tokyoBut.size(250,50);
    kyotoBut.size(250,50)
    osakaBut.size(250,50)
    sapporoBut.size(250,50)
    hiroshimaBut.size(250,50)
    yokohamaBut.size(250,50)
    nagasakiBut.size(250,50)
    kitakyushuBut.size(250,50)
    kagoshimaBut.size(250,50)
    kawasakiBut.size(250,50)

    tokyoBut.style('background','orange');
    kyotoBut.style('background','lightgreen');
    osakaBut.style('background','lightgreen');
    sapporoBut.style('background','lightblue');
    hiroshimaBut.style('background','orange');
    yokohamaBut.style('background','yellow');
    nagasakiBut.style('background','yellow');
    kagoshimaBut.style('background','pink');
    kitakyushuBut.style('background','lightblue');
    kawasakiBut.style('background','pink')


    beijingBut=createButton('BEIJING');
    shanghaiBut=createButton('SHANGHAI');
    wuhanBut=createButton('WUHAN');
    xianBut=createButton('XIAN');
    chengduBut=createButton('CHENGDU');
    tianjinBut=createButton('TIANJIN');
    nanjingBut=createButton('NANJING');
    kunmingBut=createButton('KUNMING');
    ningboBut=createButton('NINGBO');
    nanchangBut=createButton('NANCHANG');
    
    beijingBut.size(250,50);
    shanghaiBut.size(250,50)
    wuhanBut.size(250,50)
    xianBut.size(250,50)
    chengduBut.size(250,50)
    tianjinBut.size(250,50)
    nanjingBut.size(250,50)
    kunmingBut.size(250,50)
    ningboBut.size(250,50)
    nanchangBut.size(250,50)

    beijingBut.style('background','orange');
    shanghaiBut.style('background','lightgreen');
    wuhanBut.style('background','lightgreen');
    xianBut.style('background','lightblue');
    chengduBut.style('background','orange');
    tianjinBut.style('background','yellow');
    nanjingBut.style('background','yellow');
    kunmingBut.style('background','pink');
    ningboBut.style('background','lightblue');
    nanchangBut.style('background','pink');


    mumbaiBut=createButton('MUMBAI');
    puneBut=createButton('PUNE');
    ulhasnagarBut=createButton('ULHASNAGAR');
    shirdiBut=createButton('SHIRDI');
    nagpurBut=createButton('NAGPUR');
    aurangabadBut=createButton('AURANGABAD');
    jalgaonBut=createButton('JALGAON');
    ahmednagarBut=createButton('AHMEDNAGAR');
    chandrapurBut=createButton('CHANDRAPUR');
    osmanabadBut=createButton('OSMANABAD');
    
    mumbaiBut.size(250,50);
    puneBut.size(250,50)
    ulhasnagarBut.size(250,50)
    nagpurBut.size(250,50)
    shirdiBut.size(250,50)
    aurangabadBut.size(250,50)
    jalgaonBut.size(250,50)
    ahmednagarBut.size(250,50)
    chandrapurBut.size(250,50)
    osmanabadBut.size(250,50)

    mumbaiBut.style('background','orange');
    puneBut.style('background','lightgreen');
    ulhasnagarBut.style('background','lightgreen');
    nagpurBut.style('background','lightblue');
    shirdiBut.style('background','orange');
    aurangabadBut.style('background','yellow');
    jalgaonBut.style('background','yellow');
    ahmednagarBut.style('background','pink');
    chandrapurBut.style('background','lightblue');
    osmanabadBut.style('background','pink');


    chennaiBut=createButton('CHENNAI');
    krishnagiriBut=createButton('KRISHNAGIRI');
    maduraiBut=createButton('MADURAI');
    kanchipuramBut=createButton('KANCHIPURAM');
    rameswaramBut=createButton('RAMESWARAM');
    thanjavurBut=createButton('THANJAVUR');
    ootyBut=createButton('OOTY');
    thiruvarurBut=createButton('THIRUVARUR');
    kanyakumariBut=createButton('KANYAKUMARI');
    dharmapuriBut=createButton('DHARMAPURI');

    chennaiBut.size(250,50);
    krishnagiriBut.size(250,50)
    kanchipuramBut.size(250,50)
    maduraiBut.size(250,50)
    thanjavurBut.size(250,50)
    ootyBut.size(250,50)
    kanyakumariBut.size(250,50)
    thiruvarurBut.size(250,50)
    dharmapuriBut.size(250,50)
    rameswaramBut.size(250,50)

    chennaiBut.style('background','orange');
    krishnagiriBut.style('background','lightgreen');
    maduraiBut.style('background','lightgreen');
    kanchipuramBut.style('background','lightblue');
    thanjavurBut.style('background','orange');
    ootyBut.style('background','yellow');
    kanyakumariBut.style('background','yellow');
    thiruvarurBut.style('background','pink');
    dharmapuriBut.style('background','lightblue');
    rameswaramBut.style('background','pink');


    kolkataBut=createButton('KOLKATA');
    hooghlyBut=createButton('HOOGHLY');
    durgapurBut=createButton('DURGAPUR');
    siliguriBut=createButton('SILIGURI');
    darjeelingBut=createButton('DARJEELING');
    midnaporeBut=createButton('MIDNAPORE');
    bolpurBut=createButton('BOLPUR');
    bankuraBut=createButton('BANKURA');
    murshidabadBut=createButton('MURSHIDABAD');
    krishnanagarBut=createButton('KRISHNANAGAR');
    
    kolkataBut.size(250,50);
    hooghlyBut.size(250,50)
    durgapurBut.size(250,50)
    siliguriBut.size(250,50)
    darjeelingBut.size(250,50)
    midnaporeBut.size(250,50)
    bolpurBut.size(250,50)
    bankuraBut.size(250,50)
    murshidabadBut.size(250,50)
    krishnanagarBut.size(250,50)

    hooghlyBut.style('background','orange');
    kolkataBut.style('background','lightgreen');
    durgapurBut.style('background','lightgreen');
    siliguriBut.style('background','lightblue');
    darjeelingBut.style('background','orange');
    midnaporeBut.style('background','yellow');
    bolpurBut.style('background','yellow');
    bankuraBut.style('background','pink');
    murshidabadBut.style('background','lightblue');
    krishnanagarBut.style('background','pink');


    gangtokBut=createButton('GANGTOK');
    namchiBut=createButton('NAMCHI');
    rangpoBut=createButton('RANGPO');
    singtamBut=createButton('SINGTAM');
    lachungBut=createButton('LACHUNG');
    geyzingBut=createButton('GEYZING');
    pakyongBut=createButton('PAKYONG');
    rongliBut=createButton('RONGLI');
    ranipoolBut=createButton('RANIPOOL');
    ravanglaBut=createButton('RAVANGLA');
    
    gangtokBut.size(250,50);
    namchiBut.size(250,50)
    rangpoBut.size(250,50)
    singtamBut.size(250,50)
    lachungBut.size(250,50)
    geyzingBut.size(250,50)
    rongliBut.size(250,50)
    ranipoolBut.size(250,50)
    pakyongBut.size(250,50)
    ravanglaBut.size(250,50)

    gangtokBut.style('background','orange');
    namchiBut.style('background','lightgreen');
    singtamBut.style('background','lightgreen');
    rangpoBut.style('background','lightblue');
    geyzingBut.style('background','orange');
    lachungBut.style('background','yellow');
    rongliBut.style('background','yellow');
    pakyongBut.style('background','pink');
    ravanglaBut.style('background','lightblue');
    ranipoolBut.style('background','pink');


    bhopalBut=createButton('BHOPAL');
    gwaliorBut=createButton('GWALIOR');
    indoreBut=createButton('INDORE');
    jabalpurBut=createButton('JABALPUR');
    chhindwaraBut=createButton('CHHINDWARA');
    satnaBut=createButton('SATNA');
    betulBut=createButton('BETUL');
    khajurahoBut=createButton('KHAJURAHO');
    rewaBut=createButton('REWA');
    shivpuriBut=createButton('SHIVPURI');
    
    bhopalBut.size(250,50);
    gwaliorBut.size(250,50)
    indoreBut.size(250,50)
    jabalpurBut.size(250,50)
    chhindwaraBut.size(250,50)
    satnaBut.size(250,50)
    khajurahoBut.size(250,50)
    betulBut.size(250,50)
    shivpuriBut.size(250,50)
    rewaBut.size(250,50)

    bhopalBut.style('background','orange');
    jabalpurBut.style('background','lightgreen');
    gwaliorBut.style('background','lightgreen');
    indoreBut.style('background','lightblue');
    chhindwaraBut.style('background','orange');
    satnaBut.style('background','yellow');
    khajurahoBut.style('background','yellow');
    betulBut.style('background','pink');
    shivpuriBut.style('background','lightblue');
    rewaBut.style('background','pink');

    dehradunBut=createButton('DEHRADUN');
    haridwarBut=createButton('HARIDWAR');
    pithoragarhBut=createButton('PITHORAGARH');
    champawatBut=createButton('CHAMPAWAT');
    chamoliBut=createButton('CHAMOLI');
    nainitalBut=createButton('NAINITAL');
    almoraBut=createButton('ALMORA');
    uttarkashiBut=createButton('UTTARKASHI');
    pauriBut=createButton('PAURI');
    chakrataBut=createButton('CHAKRATA');
    
    dehradunBut.size(250,50);
    haridwarBut.size(250,50)
    pithoragarhBut.size(250,50)
    champawatBut.size(250,50)
    chamoliBut.size(250,50)
    nainitalBut.size(250,50)
    almoraBut.size(250,50)
    uttarkashiBut.size(250,50)
    pauriBut.size(250,50)
    chakrataBut.size(250,50)

    dehradunBut.style('background','orange');
    haridwarBut.style('background','lightgreen');
    pithoragarhBut.style('background','lightgreen');
    champawatBut.style('background','lightblue');
    chamoliBut.style('background','orange');
    nainitalBut.style('background','yellow');
    almoraBut.style('background','yellow');
    uttarkashiBut.style('background','pink');
    pauriBut.style('background','lightblue');
    chakrataBut.style('background','pink');

    gandhinagarBut=createButton('GANDHINAGAR');
    anandBut=createButton('ANAND');
    rajkotBut=createButton('RAJKOT');
    suratBut=createButton('SURAT');
    ahmedabadbut=createButton('AHMEDABAD');
    jamnagarBut=createButton('JAMNAGAR');
    ankleshwarBut=createButton('ANKLESHWAR');
    khedaBut=createButton('KHEDA');
    dwarkaBut=createButton('DWARKA');
    jetpurBut=createButton('JETPUR');
    
    gandhinagarBut.size(250,50);
    anandBut.size(250,50)
    rajkotBut.size(250,50)
    suratBut.size(250,50)
    ahmedabadbut.size(250,50)
    jamnagarBut.size(250,50)
    khedaBut.size(250,50)
    ankleshwarBut.size(250,50)
    dwarkaBut.size(250,50)
    jetpurBut.size(250,50)

    gandhinagarBut.style('background','orange');
    anandBut.style('background','lightgreen');
    rajkotBut.style('background','lightgreen');
    suratBut.style('background','lightblue');
    ahmedabadbut.style('background','orange');
    jamnagarBut.style('background','yellow');
    khedaBut.style('background','yellow');
    ankleshwarBut.style('background','pink');
    dwarkaBut.style('background','lightblue');
    jetpurBut.style('background','pink');


    jaipurBut=createButton('JAIPUR');
    jodhpurBut=createButton('JODHPUR');
    udaipurBut=createButton('UDAIPUR');
    jaisalmerBut=createButton('JAISALMER');
    chhitorgarhBut=createButton('CHHITORGARH');
    alwarBut=createButton('ALWAR');
    kotaBut=createButton('KOTA');
    ajmerBut=createButton('AJMER');
    bharatpurBut=createButton('BHARATPUR');
    mandoreBut=createButton('MANDORE');
    
    jaipurBut.size(250,50);
    jodhpurBut.size(250,50)
    udaipurBut.size(250,50)
    jaisalmerBut.size(250,50)
    chhitorgarhBut.size(250,50)
    alwarBut.size(250,50)
    kotaBut.size(250,50)
    ajmerBut.size(250,50)
    bharatpurBut.size(250,50)
    mandoreBut.size(250,50)

    jaipurBut.style('background','orange');
    jodhpurBut.style('background','lightgreen');
    udaipurBut.style('background','lightgreen');
    jaisalmerBut.style('background','lightblue');
    chhitorgarhBut.style('background','orange');
    alwarBut.style('background','yellow');
    kotaBut.style('background','yellow');
    ajmerBut.style('background','pink');
    bharatpurBut.style('background','lightblue');
    mandoreBut.style('background','pink');


    lucknowBut=createButton('LUCKNOW');
    varanasiBut=createButton('VARANASI');
    kanpurBut=createButton('KANPUR');
    agraBut=createButton('AGRA');
    meerutBut=createButton('MEERUT');
    muzaffarnagarBut=createButton('MUZAFFARNAGAR');
    saharanpurBut=createButton('SAHARANPUR');
    jhansiBut=createButton('JHANSI');
    firozabadBut=createButton('FIROZABAD');
    mathuraBut=createButton('MATHURA');
    
    lucknowBut.size(250,50);
    varanasiBut.size(250,50)
    kanpurBut.size(250,50)
    agraBut.size(250,50)
    meerutBut.size(250,50)
    muzaffarnagarBut.size(250,50)
    saharanpurBut.size(250,50)
    jhansiBut.size(250,50)
    firozabadBut.size(250,50)
    mathuraBut.size(250,50)

    lucknowBut.style('background','orange');
    varanasiBut.style('background','lightgreen');
    kanpurBut.style('background','lightgreen');
    agraBut.style('background','lightblue');
    meerutBut.style('background','orange');
    muzaffarnagarBut.style('background','yellow');
    saharanpurBut.style('background','yellow');
    jhansiBut.style('background','pink');
    firozabadBut.style('background','lightblue');
    mathuraBut.style('background','pink');


    parisBut=createButton('PARIS');
    lyonBut=createButton('LYON');
    strasbourgBut=createButton('STRASBOURG');
    nantesBut=createButton('NANTES');
    toulouseBut=createButton('TOULOUSE');
    bordeauxBut=createButton('BORDEAUX');
    marseilleBut=createButton('MARSEILLE');
    lilleBut=createButton('LILLE');
    dijonBut=createButton('DIJON');
    limogesBut=createButton('LIMOGES');

    parisBut.size(250,50);
    lyonBut.size(250,50)
    strasbourgBut.size(250,50)
    nantesBut.size(250,50)
    toulouseBut.size(250,50)
    bordeauxBut.size(250,50)
    marseilleBut.size(250,50)
    lilleBut.size(250,50)
    dijonBut.size(250,50)
    limogesBut.size(250,50)

    parisBut.style('background','pink');
    lyonBut.style('background','lightgreen');
    strasbourgBut.style('background','pink');
    toulouseBut.style('background','lightblue');
    nantesBut.style('background','yellow');
    bordeauxBut.style('background','orange');
    marseilleBut.style('background','yellow');
    lilleBut.style('background','orange');
    dijonBut.style('background','lightblue');
    limogesBut.style('background','lightgreen');

    uttarakhandBut=createButton('UTTARAKHAND');
    delhiBut=createButton('DELHI');
    sikkimBut=createButton('SIKKIM');
    upBut=createButton('UTTAR PRADESH');
    tamilBut=createButton('TAMIL NADU');
    westBut=createButton('WEST BENGAL');
    rajBut=createButton('RAJASTHAN');
    mpBut=createButton('MADHYA PRADESH');
    maharashtraBut=createButton('MAHARASHTRA');
    gujaratBut=createButton('GUJARAT');

    uttarakhandBut.size(250,50);
    delhiBut.size(250,50)
    sikkimBut.size(250,50)
    upBut.size(250,50)
    tamilBut.size(250,50)
    westBut.size(250,50)
    rajBut.size(250,50)
    mpBut.size(250,50)
    maharashtraBut.size(250,50)
    gujaratBut.size(250,50)

    uttarakhandBut.style('background','pink');
    delhiBut.style('background','lightgreen');
    sikkimBut.style('background','pink');
    upBut.style('background','lightblue');
    tamilBut.style('background','yellow');
    westBut.style('background','orange');
    rajBut.style('background','yellow');
    mpBut.style('background','orange');
    maharashtraBut.style('background','lightblue');
    gujaratBut.style('background','lightgreen');

    newBut=createButton('NEW YORK');
    sanBut=createButton('SAN FRANCISCO');
    chicagoBut=createButton('CHICAGO');
    losBut=createButton('LOS ANGELES');
    washBut=createButton('WASHINGTON D.C.');
    philadelphiaBut=createButton('PHILADELPHIA');
    phoenixBut=createButton('PHOENIX');
    miamiBut=createButton('MIAMI');
    stLouisBut=createButton('ST.LOUIS');
    pittsburghBut=createButton('PITTSBURGH');

    newBut.size(250,50);
    sanBut.size(250,50)
    chicagoBut.size(250,50)
    losBut.size(250,50)
    washBut.size(250,50)
    philadelphiaBut.size(250,50)
    phoenixBut.size(250,50)
    miamiBut.size(250,50)
    stLouisBut.size(250,50)
    pittsburghBut.size(250,50)

    newBut.style('background','lightgreen');
    sanBut.style('background','lightblue');
    chicagoBut.style('background','orange');
    losBut.style('background','lightblue');
    washBut.style('background','pink');
    philadelphiaBut.style('background','pink');
    phoenixBut.style('background','lightgreen');
    miamiBut.style('background','orange');
    stLouisBut.style('background','yellow');
    pittsburghBut.style('background','yellow');

    
    romeBut=createButton('ROME');
    veniceBut=createButton('VENICE');
    pisaBut=createButton('PISA');
    sienaBut=createButton('SIENA');
    cataniaBut=createButton('CATANIA');
    parmaBut=createButton('PARMA');
    bolzanoBut=createButton('BOLZANO');
    tarantoBut=createButton('TARANTO');
    vicenzaBut=createButton('VICENZA');
    pompeiiBut=createButton('POMPEII');

    romeBut.size(250,50);
    veniceBut.size(250,50)
    pisaBut.size(250,50)
    sienaBut.size(250,50)
    cataniaBut.size(250,50)
    parmaBut.size(250,50)
    bolzanoBut.size(250,50)
    tarantoBut.size(250,50)
    vicenzaBut.size(250,50)
    pompeiiBut.size(250,50)

    romeBut.style('background','pink');
    veniceBut.style('background','lightgreen');
    pisaBut.style('background','pink');
    sienaBut.style('background','lightblue');
    cataniaBut.style('background','yellow');
    parmaBut.style('background','orange');
    bolzanoBut.style('background','yellow');
    tarantoBut.style('background','orange');
    vicenzaBut.style('background','lightblue');
    pompeiiBut.style('background','lightgreen');


    moscowBut=createButton('MOSCOW');
    kazanBut=createButton('KAZAN');
    yekaterinburgBut=createButton('YEKATERINBURG');
    omskBut=createButton('OMSK');
    samaraBut=createButton('SAMARA');
    tomskBut=createButton('TOMSK');
    ufaBut=createButton('UFA');
    magadanBut=createButton('MAGADAN');
    astrakhanBut=createButton('ASTRAKHAN');
    chitaBut=createButton('CHITA');

    moscowBut.size(250,50);
    kazanBut.size(250,50)
    yekaterinburgBut.size(250,50)
    omskBut.size(250,50)
    samaraBut.size(250,50)
    tomskBut.size(250,50)
    ufaBut.size(250,50)
    magadanBut.size(250,50)
    astrakhanBut.size(250,50)
    chitaBut.size(250,50)

    moscowBut.style('background','pink');
    kazanBut.style('background','lightgreen');
    yekaterinburgBut.style('background','pink');
    omskBut.style('background','lightblue');
    samaraBut.style('background','yellow');
    tomskBut.style('background','orange');
    ufaBut.style('background','yellow');
    magadanBut.style('background','orange');
    astrakhanBut.style('background','lightblue');
    chitaBut.style('background','lightgreen');

}
function draw(){
if(appState===1){
background(bg1);
textSize(35);
fill("blue");
stroke("yellow");
strokeWeight(3)
text("GET LIVE TEMPERATURE, HUMIDITY, AND MORE",displayWidth/2-350,displayHeight/2-150);
text("OF DIFFERENT COUNTRIES",displayWidth/2-200,displayHeight/2-100);

startBut.mousePressed(()=>{
startBut.hide();
appState=2;
})
}
if(appState===2){
    background(bg2);
    fill("yellow");
    stroke("purple");
    strokeWeight(5.5);
    textSize(45);
    text("WHICH  COUNTRY'S  LIVE  WEATHER  DATA  WOULD  YOU  LIKE  TO  SEE ?",displayWidth/2-800,150)

    indiaBut.position(displayWidth/2-350,displayHeight/2-300);
    usBut.position(displayWidth/2-350,displayHeight/2-230);
    franceBut.position(displayWidth/2-350,displayHeight/2-160);
    italyBut.position(displayWidth/2-350,displayHeight/2-90);
    russiaBut.position(displayWidth/2-350,displayHeight/2-20);
    chinaBut.position(displayWidth/2,displayHeight/2-300);
    japanBut.position(displayWidth/2,displayHeight/2-230);
    australiaBut.position(displayWidth/2,displayHeight/2-160);
    germanyBut.position(displayWidth/2,displayHeight/2-90);
    singaporeBut.position(displayWidth/2,displayHeight/2-20);
   
    startBut.hide();
indiaBut.mousePressed(()=>{
    appState=3;
})
usBut.mousePressed(()=>{
    appState=14;
})
franceBut.mousePressed(()=>{
    appState=25;
})
italyBut.mousePressed(()=>{
    appState=36;
})
russiaBut.mousePressed(()=>{
    appState=47;
})
chinaBut.mousePressed(()=>{
    appState=148;
})
japanBut.mousePressed(()=>{
    appState=159;
})
australiaBut.mousePressed(()=>{
    appState=170;
})
germanyBut.mousePressed(()=>{
    appState=181;
})
singaporeBut.mousePressed(()=>{
    appState=192;
})
}
if(appState===3){
    background(bg2);
    mpBut.position(displayWidth/2-350,displayHeight/2-300);
    upBut.position(displayWidth/2-350,displayHeight/2-230);
    uttarakhandBut.position(displayWidth/2-350,displayHeight/2-160);
    rajBut.position(displayWidth/2-350,displayHeight/2-90);
    gujaratBut.position(displayWidth/2-350,displayHeight/2-20);
    sikkimBut.position(displayWidth/2,displayHeight/2-300);
    westBut.position(displayWidth/2,displayHeight/2-230);
    tamilBut.position(displayWidth/2,displayHeight/2-160);
    maharashtraBut.position(displayWidth/2,displayHeight/2-90);
    delhiBut.position(displayWidth/2,displayHeight/2-20);
    startBut.hide();
    textSize(40);
    fill("black");
    stroke(0);
    strokeWeight(2);
    text("WHICH  STATE'S  LIVE  WEATHER  DATA  WOULD  YOU  LIKE  TO  SEE ?",displayWidth/2-700,150)
}
if(appState===14){
    background(bg2);
    fill("yellow");
    stroke("purple");
    strokeWeight(5.5);
    textSize(45);
    text("WHICH  CITY'S  LIVE  WEATHER  DATA  WOULD  YOU  LIKE  TO  SEE ?",displayWidth/2-770,150)
    newBut.position(displayWidth/2-350,displayHeight/2-300);
    sanBut.position(displayWidth/2-350,displayHeight/2-230);
    philadelphiaBut.position(displayWidth/2-350,displayHeight/2-160);
    chicagoBut.position(displayWidth/2-350,displayHeight/2-90);
    losBut.position(displayWidth/2-350,displayHeight/2-20);
    washBut.position(displayWidth/2,displayHeight/2-300);
    phoenixBut.position(displayWidth/2,displayHeight/2-230);
    miamiBut.position(displayWidth/2,displayHeight/2-160);
    stLouisBut.position(displayWidth/2,displayHeight/2-90);
    pittsburghBut.position(displayWidth/2,displayHeight/2-20);
    startBut.hide();
}
if(appState===25){
    background(bg2);
    fill("yellow");
    stroke("purple");
    strokeWeight(5.5);
    textSize(45);
    text("WHICH  CITY'S  LIVE  WEATHER  DATA  WOULD  YOU  LIKE  TO  SEE ?",displayWidth/2-770,150)
    parisBut.position(displayWidth/2-350,displayHeight/2-300);
    lyonBut.position(displayWidth/2-350,displayHeight/2-230);
    strasbourgBut.position(displayWidth/2-350,displayHeight/2-160);
    nantesBut.position(displayWidth/2-350,displayHeight/2-90);
    toulouseBut.position(displayWidth/2-350,displayHeight/2-20);
    bordeauxBut.position(displayWidth/2,displayHeight/2-300);
    marseilleBut.position(displayWidth/2,displayHeight/2-230);
    lilleBut.position(displayWidth/2,displayHeight/2-160);
    dijonBut.position(displayWidth/2,displayHeight/2-90);
    limogesBut.position(displayWidth/2,displayHeight/2-20);
    startBut.hide();
}
if(appState===36){
    background(bg2);
    fill("yellow");
    stroke("purple");
    strokeWeight(5.5);
    textSize(45);
    text("WHICH  CITY'S  LIVE  WEATHER  DATA  WOULD  YOU  LIKE  TO  SEE ?",displayWidth/2-770,150)
    romeBut.position(displayWidth/2-350,displayHeight/2-300);
    veniceBut.position(displayWidth/2-350,displayHeight/2-230);
    pisaBut.position(displayWidth/2-350,displayHeight/2-160);
    sienaBut.position(displayWidth/2-350,displayHeight/2-90);
    cataniaBut.position(displayWidth/2-350,displayHeight/2-20);
    parmaBut.position(displayWidth/2,displayHeight/2-300);
    bolzanoBut.position(displayWidth/2,displayHeight/2-230);
    tarantoBut.position(displayWidth/2,displayHeight/2-160);
    vicenzaBut.position(displayWidth/2,displayHeight/2-90);
    pompeiiBut.position(displayWidth/2,displayHeight/2-20);
    startBut.hide();
}
if(appState===47){
    background(bg2);
    fill("yellow");
    stroke("purple");
    strokeWeight(5.5);
    textSize(45);
    text("WHICH  CITY'S  LIVE  WEATHER  DATA  WOULD  YOU  LIKE  TO  SEE ?",displayWidth/2-770,150)
    moscowBut.position(displayWidth/2-350,displayHeight/2-300);
    kazanBut.position(displayWidth/2-350,displayHeight/2-230);
    yekaterinburgBut.position(displayWidth/2-350,displayHeight/2-160);
    omskBut.position(displayWidth/2-350,displayHeight/2-90);
    samaraBut.position(displayWidth/2-350,displayHeight/2-20);
    tomskBut.position(displayWidth/2,displayHeight/2-300);
    ufaBut.position(displayWidth/2,displayHeight/2-230);
    magadanBut.position(displayWidth/2,displayHeight/2-160);
    astrakhanBut.position(displayWidth/2,displayHeight/2-90);
    chitaBut.position(displayWidth/2,displayHeight/2-20);
    startBut.hide();
}
if(appState===148){
    background(bg2);
    fill("yellow");
    stroke("purple");
    strokeWeight(5.5);
    textSize(45);
    text("WHICH  CITY'S  LIVE  WEATHER  DATA  WOULD  YOU  LIKE  TO  SEE ?",displayWidth/2-770,150)

    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();

    beijingBut.position(displayWidth/2-350,displayHeight/2-300);
    wuhanBut.position(displayWidth/2-350,displayHeight/2-230);
    xianBut.position(displayWidth/2-350,displayHeight/2-160);
    shanghaiBut.position(displayWidth/2-350,displayHeight/2-90);
    chengduBut.position(displayWidth/2-350,displayHeight/2-20);
    tianjinBut.position(displayWidth/2,displayHeight/2-300);
    nanchangBut.position(displayWidth/2,displayHeight/2-230);
    nanjingBut.position(displayWidth/2,displayHeight/2-160);
    kunmingBut.position(displayWidth/2,displayHeight/2-90);
    ningboBut.position(displayWidth/2,displayHeight/2-20);
    startBut.hide();
}
if(appState===159){
    background(bg2);
    fill("yellow");
    stroke("purple");
    strokeWeight(5.5);
    textSize(45);
    text("WHICH  CITY'S  LIVE  WEATHER  DATA  WOULD  YOU  LIKE  TO  SEE ?",displayWidth/2-770,150)

    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();

    tokyoBut.position(displayWidth/2-350,displayHeight/2-300);
    kyotoBut.position(displayWidth/2-350,displayHeight/2-230);
    kitakyushuBut.position(displayWidth/2-350,displayHeight/2-160);
    nagasakiBut.position(displayWidth/2-350,displayHeight/2-90);
    osakaBut.position(displayWidth/2-350,displayHeight/2-20);
    sapporoBut.position(displayWidth/2,displayHeight/2-300);
    hiroshimaBut.position(displayWidth/2,displayHeight/2-230);
    kagoshimaBut.position(displayWidth/2,displayHeight/2-160);
    yokohamaBut.position(displayWidth/2,displayHeight/2-90);
    kawasakiBut.position(displayWidth/2,displayHeight/2-20);
    startBut.hide();
}
if(appState===170){
    background(bg2);
    fill("yellow");
    stroke("purple");
    strokeWeight(5.5);
    textSize(45);
    text("WHICH  CITY'S  LIVE  WEATHER  DATA  WOULD  YOU  LIKE  TO  SEE ?",displayWidth/2-770,150)

    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();

    adelaideBut.position(displayWidth/2-350,displayHeight/2-300);
    sydneyBut.position(displayWidth/2-350,displayHeight/2-230);
    melbourneBut.position(displayWidth/2-350,displayHeight/2-160);
    bunburyBut.position(displayWidth/2-350,displayHeight/2-90);
    brisbaneBut.position(displayWidth/2-350,displayHeight/2-20);
    canberraBut.position(displayWidth/2,displayHeight/2-300);
    hobartBut.position(displayWidth/2,displayHeight/2-230);
    mackayBut.position(displayWidth/2,displayHeight/2-160);
    lismoreBut.position(displayWidth/2,displayHeight/2-90);
    perthBut.position(displayWidth/2,displayHeight/2-20);
    startBut.hide();
}
if(appState===181){
    background(bg2);
    fill("yellow");
    stroke("purple");
    strokeWeight(5.5);
    textSize(45);
    text("WHICH  CITY'S  LIVE  WEATHER  DATA  WOULD  YOU  LIKE  TO  SEE ?",displayWidth/2-770,150)

    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();

    hamburgBut.position(displayWidth/2-350,displayHeight/2-300);
    munichBut.position(displayWidth/2-350,displayHeight/2-230);
    nurembergBut.position(displayWidth/2-350,displayHeight/2-160);
    berlinBut.position(displayWidth/2-350,displayHeight/2-90);
    cologneBut.position(displayWidth/2-350,displayHeight/2-20);
    aachenBut.position(displayWidth/2,displayHeight/2-300);
    duisburgBut.position(displayWidth/2,displayHeight/2-230);
    rostockBut.position(displayWidth/2,displayHeight/2-160);
    bochumBut.position(displayWidth/2,displayHeight/2-90);
    oldenburgBut.position(displayWidth/2,displayHeight/2-20);
    startBut.hide();
}
if(appState===192){
    background(bg2);
    fill("yellow");
    stroke("purple");
    strokeWeight(5.5);
    textSize(45);
    text("WHICH  CITY'S  LIVE  WEATHER  DATA  WOULD  YOU  LIKE  TO  SEE ?",displayWidth/2-770,150)

    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();

    jurongBut.position(displayWidth/2-350,displayHeight/2-300);
    seletarBut.position(displayWidth/2-350,displayHeight/2-230);
    yishunBut.position(displayWidth/2-350,displayHeight/2-160);
    kranjiBut.position(displayWidth/2-350,displayHeight/2-90);
    clementiBut.position(displayWidth/2-350,displayHeight/2-20);
    rochorBut.position(displayWidth/2,displayHeight/2-300);
    sengkangBut.position(displayWidth/2,displayHeight/2-230);
    novenaBut.position(displayWidth/2,displayHeight/2-160);
    temasekBut.position(displayWidth/2,displayHeight/2-90);
    hougangBut.position(displayWidth/2,displayHeight/2-20);
    startBut.hide();
}

uttarakhandBut.mousePressed(()=>{
    appState=4;
})
delhiBut.mousePressed(()=>{
    appState=5;
})
upBut.mousePressed(()=>{
    appState=6;
})
maharashtraBut.mousePressed(()=>{
    appState=7;
})
mpBut.mousePressed(()=>{
    appState=8;
})
tamilBut.mousePressed(()=>{
    appState=9;
})
sikkimBut.mousePressed(()=>{
    appState=10;
})
rajBut.mousePressed(()=>{
    appState=11;
})
westBut.mousePressed(()=>{
    appState=12;
})
gujaratBut.mousePressed(()=>{
    appState=13;
})


newBut.mousePressed(()=>{
    appState=15;
})
sanBut.mousePressed(()=>{
    appState=16;
})
losBut.mousePressed(()=>{
    appState=17;
})
washBut.mousePressed(()=>{
    appState=18;
})
philadelphiaBut.mousePressed(()=>{
    appState=19;
})
phoenixBut.mousePressed(()=>{
    appState=20;
})
stLouisBut.mousePressed(()=>{
    appState=21;
})
pittsburghBut.mousePressed(()=>{
    appState=22;
})
miamiBut.mousePressed(()=>{
    appState=23;
})
chicagoBut.mousePressed(()=>{
    appState=24;
})


parisBut.mousePressed(()=>{
    appState=26;
})
lyonBut.mousePressed(()=>{
    appState=27;
})
strasbourgBut.mousePressed(()=>{
    appState=28;
})
nantesBut.mousePressed(()=>{
    appState=29;
})
toulouseBut.mousePressed(()=>{
    appState=30;
})
bordeauxBut.mousePressed(()=>{
    appState=31;
})
marseilleBut.mousePressed(()=>{
    appState=32;
})
lilleBut.mousePressed(()=>{
    appState=33;
})
dijonBut.mousePressed(()=>{
    appState=34;
})
limogesBut.mousePressed(()=>{
    appState=35;
})


romeBut.mousePressed(()=>{
    appState=37;
})
veniceBut.mousePressed(()=>{
    appState=38;
})
pisaBut.mousePressed(()=>{
    appState=39;
})
sienaBut.mousePressed(()=>{
    appState=40;
})
cataniaBut.mousePressed(()=>{
    appState=41;
})
parmaBut.mousePressed(()=>{
    appState=42;
})
bolzanoBut.mousePressed(()=>{
    appState=43;
})
tarantoBut.mousePressed(()=>{
    appState=44;
})
vicenzaBut.mousePressed(()=>{
    appState=45;
})
pompeiiBut.mousePressed(()=>{
    appState=46;
})


moscowBut.mousePressed(()=>{
    appState=48;
})
kazanBut.mousePressed(()=>{
    appState=49;
})
yekaterinburgBut.mousePressed(()=>{
    appState=50;
})
omskBut.mousePressed(()=>{
    appState=51;
})
samaraBut.mousePressed(()=>{
    appState=52;
})
tomskBut.mousePressed(()=>{
    appState=53;
})
ufaBut.mousePressed(()=>{
    appState=54;
})
magadanBut.mousePressed(()=>{
    appState=55;
})
astrakhanBut.mousePressed(()=>{
    appState=56;
})
chitaBut.mousePressed(()=>{
    appState=57;
})

beijingBut.mousePressed(()=>{
    appState=149;
})
shanghaiBut.mousePressed(()=>{
    appState=150;
})
xianBut.mousePressed(()=>{
    appState=151;
})
tianjinBut.mousePressed(()=>{
    appState=152;
})
kunmingBut.mousePressed(()=>{
    appState=153;
})
wuhanBut.mousePressed(()=>{
    appState=154;
})
chengduBut.mousePressed(()=>{
    appState=155;
})
ningboBut.mousePressed(()=>{
    appState=156;
})
nanchangBut.mousePressed(()=>{
    appState=157;
})
nanjingBut.mousePressed(()=>{
    appState=158;
})

tokyoBut.mousePressed(()=>{
    appState=160;
})
kyotoBut.mousePressed(()=>{
    appState=161;
})
osakaBut.mousePressed(()=>{
    appState=162;
})
sapporoBut.mousePressed(()=>{
    appState=163;
})
hiroshimaBut.mousePressed(()=>{
    appState=164;
})
yokohamaBut.mousePressed(()=>{
    appState=165;
})
nagasakiBut.mousePressed(()=>{
    appState=166;
})
kitakyushuBut.mousePressed(()=>{
    appState=167;
})
kawasakiBut.mousePressed(()=>{
    appState=168;
})
kagoshimaBut.mousePressed(()=>{
    appState=169;
})

adelaideBut.mousePressed(()=>{
    appState=171;
})
sydneyBut.mousePressed(()=>{
    appState=172;
})
melbourneBut.mousePressed(()=>{
    appState=173;
})
bunburyBut.mousePressed(()=>{
    appState=174;
})
brisbaneBut.mousePressed(()=>{
    appState=175;
})
canberraBut.mousePressed(()=>{
    appState=176;
})
hobartBut.mousePressed(()=>{
    appState=177;
})
mackayBut.mousePressed(()=>{
    appState=178;
})
lismoreBut.mousePressed(()=>{
    appState=179;
})
perthBut.mousePressed(()=>{
    appState=180;
})

hamburgBut.mousePressed(()=>{
    appState=182;
})
munichBut.mousePressed(()=>{
    appState=183;
})
nurembergBut.mousePressed(()=>{
    appState=184;
})
berlinBut.mousePressed(()=>{
    appState=185;
})
cologneBut.mousePressed(()=>{
    appState=186;
})
aachenBut.mousePressed(()=>{
    appState=187;
})
duisburgBut.mousePressed(()=>{
    appState=188;
})
rostockBut.mousePressed(()=>{
    appState=189;
})
bochumBut.mousePressed(()=>{
    appState=190;
})
oldenburgBut.mousePressed(()=>{
    appState=191;
})

jurongBut.mousePressed(()=>{
    appState=193;
})
seletarBut.mousePressed(()=>{
    appState=194;
})
yishunBut.mousePressed(()=>{
    appState=195;
})
rochorBut.mousePressed(()=>{
    appState=196;
})
clementiBut.mousePressed(()=>{
    appState=197;
})
kranjiBut.mousePressed(()=>{
    appState=198;
})
novenaBut.mousePressed(()=>{
    appState=199;
})
temasekBut.mousePressed(()=>{
    appState=200;
})
hougangBut.mousePressed(()=>{
    appState=201;
})
sengkangBut.mousePressed(()=>{
    appState=202;
})

if(appState===4){
    background(bg2);
    startBut.hide();
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();

    uttarakhandBut.hide();
    westBut.hide();
    mpBut.hide();
    delhiBut.hide();
    upBut.hide();
    tamilBut.hide();
    sikkimBut.hide();
    gujaratBut.hide();
    rajBut.hide();
    maharashtraBut.hide();

    dehradunBut.position(displayWidth/2-350,displayHeight/2-300);
    haridwarBut.position(displayWidth/2-350,displayHeight/2-230);
    uttarkashiBut.position(displayWidth/2-350,displayHeight/2-160);
    chakrataBut.position(displayWidth/2-350,displayHeight/2-90);
    chamoliBut.position(displayWidth/2-350,displayHeight/2-20);
    champawatBut.position(displayWidth/2,displayHeight/2-300);
    pithoragarhBut.position(displayWidth/2,displayHeight/2-230);
    almoraBut.position(displayWidth/2,displayHeight/2-160);
    nainitalBut.position(displayWidth/2,displayHeight/2-90);
    pauriBut.position(displayWidth/2,displayHeight/2-20);

    textSize(40);
    fill("black");
    stroke(0);
    strokeWeight(2);
    text("WHICH  CITY'S  LIVE  WEATHER  DATA  WOULD  YOU  LIKE  TO  SEE ?",displayWidth/2-700,150)

}
dehradunBut.mousePressed(()=>{
   appState=58;
})
haridwarBut.mousePressed(()=>{
    appState=59;
})
pauriBut.mousePressed(()=>{
    appState=60;
 })
 nainitalBut.mousePressed(()=>{
     appState=61;
 })
 almoraBut.mousePressed(()=>{
    appState=62;
 })
 uttarkashiBut.mousePressed(()=>{
     appState=63;
 })
 pithoragarhBut.mousePressed(()=>{
    appState=64;
 })
 champawatBut.mousePressed(()=>{
     appState=65;
 })
 chamoliBut.mousePressed(()=>{
    appState=66;
 })
 chakrataBut.mousePressed(()=>{
     appState=67;
 })
if(appState===5){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    uttarakhandBut.hide();
    westBut.hide();
    mpBut.hide();
    delhiBut.hide();
    upBut.hide();
    tamilBut.hide();
    sikkimBut.hide();
    gujaratBut.hide();
    rajBut.hide();
    maharashtraBut.hide();

    textSize(48);
    fill("black");
    stroke(0);
    strokeWeight(2);
    text("DELHI CURRENT DATA",displayWidth/2-280,displayHeight/2-430)
}
if(appState===6){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    uttarakhandBut.hide();
    westBut.hide();
    mpBut.hide();
    delhiBut.hide();
    upBut.hide();
    tamilBut.hide();
    sikkimBut.hide();
    gujaratBut.hide();
    rajBut.hide();
    maharashtraBut.hide();
    textSize(40);
    fill("black");
    stroke(0);
    strokeWeight(2);
    text("WHICH  CITY'S  LIVE  WEATHER  DATA  WOULD  YOU  LIKE  TO  SEE ?",displayWidth/2-700,150)

    lucknowBut.position(displayWidth/2-350,displayHeight/2-300);
    kanpurBut.position(displayWidth/2-350,displayHeight/2-230);
    mathuraBut.position(displayWidth/2-350,displayHeight/2-160);
    meerutBut.position(displayWidth/2-350,displayHeight/2-90);
    muzaffarnagarBut.position(displayWidth/2-350,displayHeight/2-20);
    varanasiBut.position(displayWidth/2,displayHeight/2-300);
    jhansiBut.position(displayWidth/2,displayHeight/2-230);
    firozabadBut.position(displayWidth/2,displayHeight/2-160);
    agraBut.position(displayWidth/2,displayHeight/2-90);
    saharanpurBut.position(displayWidth/2,displayHeight/2-20);
}
lucknowBut.mousePressed(()=>{
    appState=78;
})
kanpurBut.mousePressed(()=>{
    appState=79;
})
mathuraBut.mousePressed(()=>{
    appState=80;
})
meerutBut.mousePressed(()=>{
    appState=81;
})
muzaffarnagarBut.mousePressed(()=>{
    appState=82;
})
varanasiBut.mousePressed(()=>{
    appState=83;
})
jhansiBut.mousePressed(()=>{
    appState=84;
})
firozabadBut.mousePressed(()=>{
    appState=85;
})
agraBut.mousePressed(()=>{
    appState=86;
})
saharanpurBut.mousePressed(()=>{
    appState=87;
})

if(appState===7){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    uttarakhandBut.hide();
    westBut.hide();
    mpBut.hide();
    delhiBut.hide();
    upBut.hide();
    tamilBut.hide();
    sikkimBut.hide();
    gujaratBut.hide();
    rajBut.hide();
    maharashtraBut.hide();

    mumbaiBut.position(displayWidth/2-350,displayHeight/2-300);
    shirdiBut.position(displayWidth/2-350,displayHeight/2-230);
    puneBut.position(displayWidth/2-350,displayHeight/2-160);
    jalgaonBut.position(displayWidth/2-350,displayHeight/2-90);
    ahmednagarBut.position(displayWidth/2-350,displayHeight/2-20);
    nagpurBut.position(displayWidth/2,displayHeight/2-300);
    aurangabadBut.position(displayWidth/2,displayHeight/2-230);
    chandrapurBut.position(displayWidth/2,displayHeight/2-160);
    osmanabadBut.position(displayWidth/2,displayHeight/2-90);
    ulhasnagarBut.position(displayWidth/2,displayHeight/2-20);

    textSize(40);
    fill("black");
    stroke(0);
    strokeWeight(2);
    text("WHICH  CITY'S  LIVE  WEATHER  DATA  WOULD  YOU  LIKE  TO  SEE ?",displayWidth/2-700,150)
}
mumbaiBut.mousePressed(()=>{
appState=138;
})
shirdiBut.mousePressed(()=>{
appState=139;
})
puneBut.mousePressed(()=>{
 appState=140;
})
jalgaonBut.mousePressed(()=>{
appState=141;
})
ahmednagarBut.mousePressed(()=>{
appState=142;
})
nagpurBut.mousePressed(()=>{
appState=143;
})
 aurangabadBut.mousePressed(()=>{
appState=144;
})
chandrapurBut.mousePressed(()=>{
appState=145;
})
osmanabadBut.mousePressed(()=>{
appState=146;
})
ulhasnagarBut.mousePressed(()=>{
appState=147;
})

if(appState===8){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    uttarakhandBut.hide();
    westBut.hide();
    mpBut.hide();
    delhiBut.hide();
    upBut.hide();
    tamilBut.hide();
    sikkimBut.hide();
    gujaratBut.hide();
    rajBut.hide();
    maharashtraBut.hide();

    bhopalBut.position(displayWidth/2-350,displayHeight/2-300);
    gwaliorBut.position(displayWidth/2-350,displayHeight/2-230);
    indoreBut.position(displayWidth/2-350,displayHeight/2-160);
    betulBut.position(displayWidth/2-350,displayHeight/2-90);
    jabalpurBut.position(displayWidth/2-350,displayHeight/2-20);
    chhindwaraBut.position(displayWidth/2,displayHeight/2-300);
    satnaBut.position(displayWidth/2,displayHeight/2-230);
    khajurahoBut.position(displayWidth/2,displayHeight/2-160);
    rewaBut.position(displayWidth/2,displayHeight/2-90);
    shivpuriBut.position(displayWidth/2,displayHeight/2-20);

    textSize(40);
    fill("black");
    stroke(0);
    strokeWeight(2);
    text("WHICH  CITY'S  LIVE  WEATHER  DATA  WOULD  YOU  LIKE  TO  SEE ?",displayWidth/2-700,150)

}
bhopalBut.mousePressed(()=>{
        appState=68;
})
gwaliorBut.mousePressed(()=>{
    appState=69;
})
indoreBut.mousePressed(()=>{
    appState=70;
})
betulBut.mousePressed(()=>{
        appState=71;
})
jabalpurBut.mousePressed(()=>{
    appState=72;
})
chhindwaraBut.mousePressed(()=>{
    appState=73;
})
satnaBut.mousePressed(()=>{
    appState=74;
})
khajurahoBut.mousePressed(()=>{
    appState=75;
})
rewaBut.mousePressed(()=>{
    appState=76;
})
shivpuriBut.mousePressed(()=>{
    appState=77;
})

if(appState===9){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();

    uttarakhandBut.hide();
    westBut.hide();
    mpBut.hide();
    delhiBut.hide();
    upBut.hide();
    tamilBut.hide();
    sikkimBut.hide();
    gujaratBut.hide();
    rajBut.hide();
    maharashtraBut.hide();
    startBut.hide();
    chennaiBut.position(displayWidth/2-350,displayHeight/2-300);
    rameswaramBut.position(displayWidth/2-350,displayHeight/2-230);
    krishnagiriBut.position(displayWidth/2-350,displayHeight/2-160);
    thiruvarurBut.position(displayWidth/2-350,displayHeight/2-90);
    thanjavurBut.position(displayWidth/2-350,displayHeight/2-20);
    maduraiBut.position(displayWidth/2,displayHeight/2-300);
    ootyBut.position(displayWidth/2,displayHeight/2-230);
    dharmapuriBut.position(displayWidth/2,displayHeight/2-160);
    kanyakumariBut.position(displayWidth/2,displayHeight/2-90);
    kanchipuramBut.position(displayWidth/2,displayHeight/2-20);

    textSize(40);
    fill("black");
    stroke(0);
    strokeWeight(2);
    text("WHICH  CITY'S  LIVE  WEATHER  DATA  WOULD  YOU  LIKE  TO  SEE ?",displayWidth/2-700,150)
}
chennaiBut.mousePressed(()=>{
    appState=128;
})
rameswaramBut.mousePressed(()=>{
    appState=129;
})
krishnagiriBut.mousePressed(()=>{
    appState=130;
})
thiruvarurBut.mousePressed(()=>{
    appState=131;
})
thanjavurBut.mousePressed(()=>{
    appState=132;
})
maduraiBut.mousePressed(()=>{
    appState=133;
})
ootyBut.mousePressed(()=>{
    appState=134;
})
dharmapuriBut.mousePressed(()=>{
    appState=135;
})
kanyakumariBut.mousePressed(()=>{
    appState=136;
})
kanchipuramBut.mousePressed(()=>{
    appState=137;
})
if(appState===10){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();

    uttarakhandBut.hide();
    westBut.hide();
    mpBut.hide();
    delhiBut.hide();
    upBut.hide();
    tamilBut.hide();
    sikkimBut.hide();
    gujaratBut.hide();
    rajBut.hide();
    maharashtraBut.hide();
    startBut.hide();
    gangtokBut.position(displayWidth/2-350,displayHeight/2-300);
    ranipoolBut.position(displayWidth/2-350,displayHeight/2-230);
    geyzingBut.position(displayWidth/2-350,displayHeight/2-160);
    ravanglaBut.position(displayWidth/2-350,displayHeight/2-90);
    rongliBut.position(displayWidth/2-350,displayHeight/2-20);
    rangpoBut.position(displayWidth/2,displayHeight/2-300);
    singtamBut.position(displayWidth/2,displayHeight/2-230);
    lachungBut.position(displayWidth/2,displayHeight/2-160);
    pakyongBut.position(displayWidth/2,displayHeight/2-90);
    namchiBut.position(displayWidth/2,displayHeight/2-20);

    textSize(40);
    fill("black");
    stroke(0);
    strokeWeight(2);
    text("WHICH  CITY'S  LIVE  WEATHER  DATA  WOULD  YOU  LIKE  TO  SEE ?",displayWidth/2-700,150)
}
gangtokBut.mousePressed(()=>{
    appState=108;
})
ranipoolBut.mousePressed(()=>{
    appState=109;
})
geyzingBut.mousePressed(()=>{
    appState=110;
})
ravanglaBut.mousePressed(()=>{
    appState=111;
})
rongliBut.mousePressed(()=>{
    appState=112;
})
rangpoBut.mousePressed(()=>{
    appState=113;
})
singtamBut.mousePressed(()=>{
    appState=114;
})
lachungBut.mousePressed(()=>{
    appState=115;
})
pakyongBut.mousePressed(()=>{
    appState=116;
})
namchiBut.mousePressed(()=>{
    appState=117;
})

if(appState===11){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();

    uttarakhandBut.hide();
    westBut.hide();
    mpBut.hide();
    delhiBut.hide();
    upBut.hide();
    tamilBut.hide();
    sikkimBut.hide();
    gujaratBut.hide();
    rajBut.hide();
    maharashtraBut.hide();
    startBut.hide();
    jaipurBut.position(displayWidth/2-350,displayHeight/2-300);
    jodhpurBut.position(displayWidth/2-350,displayHeight/2-230);
    udaipurBut.position(displayWidth/2-350,displayHeight/2-160);
    jaisalmerBut.position(displayWidth/2-350,displayHeight/2-90);
    alwarBut.position(displayWidth/2-350,displayHeight/2-20);
    ajmerBut.position(displayWidth/2,displayHeight/2-300);
    chhitorgarhBut.position(displayWidth/2,displayHeight/2-230);
    mandoreBut.position(displayWidth/2,displayHeight/2-160);
    bharatpurBut.position(displayWidth/2,displayHeight/2-90);
    kotaBut.position(displayWidth/2,displayHeight/2-20);

    textSize(40);
    fill("black");
    stroke(0);
    strokeWeight(2);
    text("WHICH  CITY'S  LIVE  WEATHER  DATA  WOULD  YOU  LIKE  TO  SEE ?",displayWidth/2-700,150)
}
jaipurBut.mousePressed(()=>{
    appState=88;
})
jodhpurBut.mousePressed(()=>{
    appState=89;
})
udaipurBut.mousePressed(()=>{
    appState=90;
})
jaisalmerBut.mousePressed(()=>{
    appState=91;
})
alwarBut.mousePressed(()=>{
    appState=92;
})
ajmerBut.mousePressed(()=>{
    appState=93;
})
chhitorgarhBut.mousePressed(()=>{
    appState=94;
})
mandoreBut.mousePressed(()=>{
    appState=95;
})
bharatpurBut.mousePressed(()=>{
    appState=96;
})
kotaBut.mousePressed(()=>{
    appState=97;
})

if(appState===12){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();

    uttarakhandBut.hide();
    westBut.hide();
    mpBut.hide();
    delhiBut.hide();
    upBut.hide();
    tamilBut.hide();
    sikkimBut.hide();
    gujaratBut.hide();
    rajBut.hide();
    maharashtraBut.hide();
    startBut.hide();
    kolkataBut.position(displayWidth/2-350,displayHeight/2-300);
    siliguriBut.position(displayWidth/2-350,displayHeight/2-230);
    darjeelingBut.position(displayWidth/2-350,displayHeight/2-160);
    hooghlyBut.position(displayWidth/2-350,displayHeight/2-90);
    durgapurBut.position(displayWidth/2-350,displayHeight/2-20);
    krishnanagarBut.position(displayWidth/2,displayHeight/2-300);
    bolpurBut.position(displayWidth/2,displayHeight/2-230);
    bankuraBut.position(displayWidth/2,displayHeight/2-160);
    midnaporeBut.position(displayWidth/2,displayHeight/2-90);
    murshidabadBut.position(displayWidth/2,displayHeight/2-20);

    textSize(40);
    fill("black");
    stroke(0);
    strokeWeight(2);
    text("WHICH  CITY'S  LIVE  WEATHER  DATA  WOULD  YOU  LIKE  TO  SEE ?",displayWidth/2-700,150)
}
kolkataBut.mousePressed(()=>{
    appState=118;
})
siliguriBut.mousePressed(()=>{
    appState=119;
})
darjeelingBut.mousePressed(()=>{
    appState=120;
})
hooghlyBut.mousePressed(()=>{
    appState=121;
})
durgapurBut.mousePressed(()=>{
    appState=122;
})
krishnanagarBut.mousePressed(()=>{
    appState=123;
})
bolpurBut.mousePressed(()=>{
    appState=124;
})
bankuraBut.mousePressed(()=>{
    appState=125;
})
midnaporeBut.mousePressed(()=>{
    appState=126;
})
murshidabadBut.mousePressed(()=>{
    appState=127;
})
if(appState===13){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    uttarakhandBut.hide();
    westBut.hide();
    mpBut.hide();
    delhiBut.hide();
    upBut.hide();
    tamilBut.hide();
    sikkimBut.hide();
    gujaratBut.hide();
    rajBut.hide();
    maharashtraBut.hide();

    gandhinagarBut.position(displayWidth/2-350,displayHeight/2-300);
    suratBut.position(displayWidth/2-350,displayHeight/2-230);
    rajkotBut.position(displayWidth/2-350,displayHeight/2-160);
    ahmedabadbut.position(displayWidth/2-350,displayHeight/2-90);
    jamnagarBut.position(displayWidth/2-350,displayHeight/2-20);
    anandBut.position(displayWidth/2,displayHeight/2-300);
    ankleshwarBut.position(displayWidth/2,displayHeight/2-230);
    dwarkaBut.position(displayWidth/2,displayHeight/2-160);
    khedaBut.position(displayWidth/2,displayHeight/2-90);
    jetpurBut.position(displayWidth/2,displayHeight/2-20);

    textSize(40);
    fill("black");
    stroke(0);
    strokeWeight(2);
    text("WHICH  CITY'S  LIVE  WEATHER  DATA  WOULD  YOU  LIKE  TO  SEE ?",displayWidth/2-700,150)
}
gandhinagarBut.mousePressed(()=>{
    appState=98;
})
suratBut.mousePressed(()=>{
    appState=99;
})
rajkotBut.mousePressed(()=>{
    appState=100;
})
ahmedabadbut.mousePressed(()=>{
    appState=101;
})
jamnagarBut.mousePressed(()=>{
    appState=102;
})
anandBut.mousePressed(()=>{
    appState=103;
})
ankleshwarBut.mousePressed(()=>{
    appState=104;
})
dwarkaBut.mousePressed(()=>{
    appState=105;
})
khedaBut.mousePressed(()=>{
    appState=106;
})
jetpurBut.mousePressed(()=>{
    appState=107;
})

if(appState===15){
   background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();

    newBut.hide();
    sanBut.hide();
    losBut.hide();
    washBut.hide();
    philadelphiaBut.hide();
    phoenixBut.hide();
    stLouisBut.hide();
    pittsburghBut.hide();
    miamiBut.hide();
    chicagoBut.hide();
    startBut.hide();
    
    fill("black");
    stroke(0);
    strokeWeight(2);
    textSize(48);
    text("NEW YORK CURRENT DATA",displayWidth/2-350,displayHeight/2-430);
    
    textSize(50);
    fill(0);
    stroke(0);
    strokeWeight(1);
    text("CURRENT TIME :",displayWidth/2-300,displayHeight/2-300);

    textSize(52);
    fill("red");
    stroke(255);
    strokeWeight(2);
    text(newhr,displayWidth/2+150,displayHeight/2-300);
}
if(appState===16){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    newBut.hide();
    sanBut.hide();
    losBut.hide();
    washBut.hide();
    philadelphiaBut.hide();
    phoenixBut.hide();
    stLouisBut.hide();
    pittsburghBut.hide();
    miamiBut.hide();
    chicagoBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("SAN FRANCISCO CURRENT DATA",displayWidth/2-350,displayHeight/2-430);
   

    textSize(50);
    fill(0);
    stroke(0);
    strokeWeight(1);
    text("CURRENT TIME :",displayWidth/2-300,displayHeight/2-300);

    textSize(52);
    fill("red");
    stroke(255);
    strokeWeight(2);
    text(sanhr,displayWidth/2+150,displayHeight/2-300);

}
if(appState===17){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    newBut.hide();
    sanBut.hide();
    losBut.hide();
    washBut.hide();
    philadelphiaBut.hide();
    phoenixBut.hide();
    stLouisBut.hide();
    pittsburghBut.hide();
    miamiBut.hide();
    chicagoBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("LOS ANGELES CURRENT DATA",displayWidth/2-380,displayHeight/2-430);


    textSize(50);
    fill(0);
    stroke(0);
    strokeWeight(1);
    text("CURRENT TIME :",displayWidth/2-300,displayHeight/2-300);

    textSize(52);
    fill("red");
    stroke(255);
    strokeWeight(2);
    text(loshr,displayWidth/2+150,displayHeight/2-300);
}
if(appState===18){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    newBut.hide();
    sanBut.hide();
    losBut.hide();
    washBut.hide();
    philadelphiaBut.hide();
    phoenixBut.hide();
    stLouisBut.hide();
    pittsburghBut.hide();
    miamiBut.hide();
    chicagoBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("WASHINGTON D.C. CURRENT DATA",displayWidth/2-400,displayHeight/2-430);

    textSize(50);
    fill(0);
    stroke(0);
    strokeWeight(1);
    text("CURRENT TIME :",displayWidth/2-300,displayHeight/2-300);
  
    textSize(52);
    fill("red");
    stroke(255);
    strokeWeight(2);
    text(washhr,displayWidth/2+150,displayHeight/2-300);
}
if(appState===19){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    newBut.hide();
    sanBut.hide();
    losBut.hide();
    washBut.hide();
    philadelphiaBut.hide();
    phoenixBut.hide();
    stLouisBut.hide();
    pittsburghBut.hide();
    miamiBut.hide();
    chicagoBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("PHILADELPHIA CURRENT DATA",displayWidth/2-370,displayHeight/2-430);

    getphiladelphiaTime();

    textSize(50);
    fill(0);
    stroke(0);
    strokeWeight(1);
    text("CURRENT TIME :",displayWidth/2-300,displayHeight/2-300);

    textSize(52);
    fill("red");
    stroke(255);
    strokeWeight(2);
    text(philadelphiahr,displayWidth/2+150,displayHeight/2-300);
}
if(appState===20){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    newBut.hide();
    sanBut.hide();
    losBut.hide();
    washBut.hide();
    philadelphiaBut.hide();
    phoenixBut.hide();
    stLouisBut.hide();
    pittsburghBut.hide();
    miamiBut.hide();
    chicagoBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("PHOENIX CURRENT DATA",displayWidth/2-350,displayHeight/2-430);
}
if(appState===21){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    newBut.hide();
    sanBut.hide();
    losBut.hide();
    washBut.hide();
    philadelphiaBut.hide();
    phoenixBut.hide();
    stLouisBut.hide();
    pittsburghBut.hide();
    miamiBut.hide();
    chicagoBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("ST.LOUIS CURRENT DATA",displayWidth/2-330,displayHeight/2-430);
    
    textSize(50);
    fill(0);
    stroke(0);
    strokeWeight(1);
    text("CURRENT TIME :",displayWidth/2-300,displayHeight/2-300);

    textSize(52);
    fill("red");
    stroke(255);
    strokeWeight(2);
    text(stlouishr,displayWidth/2+150,displayHeight/2-300);

}
if(appState===22){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    newBut.hide();
    sanBut.hide();
    losBut.hide();
    washBut.hide();
    philadelphiaBut.hide();
    phoenixBut.hide();
    stLouisBut.hide();
    pittsburghBut.hide();
    miamiBut.hide();
    chicagoBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("PITTSBURGH CURRENT DATA",displayWidth/2-370,displayHeight/2-430);
}
if(appState===23){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    newBut.hide();
    sanBut.hide();
    losBut.hide();
    washBut.hide();
    philadelphiaBut.hide();
    phoenixBut.hide();
    stLouisBut.hide();
    pittsburghBut.hide();
    miamiBut.hide();
    chicagoBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("MIAMI CURRENT DATA",displayWidth/2-300,displayHeight/2-430);

    textSize(50);
    fill(0);
    stroke(0);
    strokeWeight(1);
    text("CURRENT TIME :",displayWidth/2-300,displayHeight/2-300);
  
    textSize(52);
    fill("red");
    stroke(255);
    strokeWeight(2);
    text(miamihr,displayWidth/2+150,displayHeight/2-300);

}
if(appState===24){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    newBut.hide();
    sanBut.hide();
    losBut.hide();
    washBut.hide();
    philadelphiaBut.hide();
    phoenixBut.hide();
    stLouisBut.hide();
    pittsburghBut.hide();
    miamiBut.hide();
    chicagoBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("CHICAGO CURRENT DATA",displayWidth/2-350,displayHeight/2-430);

    textSize(50);
    fill(0);
    stroke(0);
    strokeWeight(1);
    text("CURRENT TIME :",displayWidth/2-300,displayHeight/2-300);
  
    textSize(52);
    fill("red");
    stroke(255);
    strokeWeight(2);
    text(chicagohr,displayWidth/2+150,displayHeight/2-300);

}


if(appState===26){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    parisBut.hide();
    lyonBut.hide();
    strasbourgBut.hide();
    nantesBut.hide();
    toulouseBut.hide();
    bordeauxBut.hide();
    marseilleBut.hide();
    lilleBut.hide();
    dijonBut.hide();
    limogesBut.hide();
    
    fill("black");
    stroke(0);
    strokeWeight(2);
    textSize(48);
    text("PARIS CURRENT DATA",displayWidth/2-300,displayHeight/2-430);
    console.log("hello")
}
if(appState===27){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    parisBut.hide();
    lyonBut.hide();
    strasbourgBut.hide();
    nantesBut.hide();
    toulouseBut.hide();
    bordeauxBut.hide();
    marseilleBut.hide();
    lilleBut.hide();
    dijonBut.hide();
    limogesBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("LYON CURRENT DATA",displayWidth/2-300,displayHeight/2-430);
}
if(appState===28){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    parisBut.hide();
    lyonBut.hide();
    strasbourgBut.hide();
    nantesBut.hide();
    toulouseBut.hide();
    bordeauxBut.hide();
    marseilleBut.hide();
    lilleBut.hide();
    dijonBut.hide();
    limogesBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("STRASBOURG CURRENT DATA",displayWidth/2-380,displayHeight/2-430);
}
if(appState===29){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    parisBut.hide();
    lyonBut.hide();
    strasbourgBut.hide();
    nantesBut.hide();
    toulouseBut.hide();
    bordeauxBut.hide();
    marseilleBut.hide();
    lilleBut.hide();
    dijonBut.hide();
    limogesBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("NANTES CURRENT DATA",displayWidth/2-330,displayHeight/2-430);
    startBut.hide();
}
if(appState===30){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    parisBut.hide();
    lyonBut.hide();
    strasbourgBut.hide();
    nantesBut.hide();
    toulouseBut.hide();
    bordeauxBut.hide();
    marseilleBut.hide();
    lilleBut.hide();
    dijonBut.hide();
    limogesBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("TOULOUSE CURRENT DATA",displayWidth/2-350,displayHeight/2-430);
}
if(appState===31){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    parisBut.hide();
    lyonBut.hide();
    strasbourgBut.hide();
    nantesBut.hide();
    toulouseBut.hide();
    bordeauxBut.hide();
    marseilleBut.hide();
    lilleBut.hide();
    dijonBut.hide();
    limogesBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("BORDEAUX CURRENT DATA",displayWidth/2-350,displayHeight/2-430);
}
if(appState===32){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    parisBut.hide();
    lyonBut.hide();
    strasbourgBut.hide();
    nantesBut.hide();
    toulouseBut.hide();
    bordeauxBut.hide();
    marseilleBut.hide();
    lilleBut.hide();
    dijonBut.hide();
    limogesBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("MARSEILLE CURRENT DATA",displayWidth/2-330,displayHeight/2-430);
}
if(appState===33){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    parisBut.hide();
    lyonBut.hide();
    strasbourgBut.hide();
    nantesBut.hide();
    toulouseBut.hide();
    bordeauxBut.hide();
    marseilleBut.hide();
    lilleBut.hide();
    dijonBut.hide();
    limogesBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("LILLE CURRENT DATA",displayWidth/2-280,displayHeight/2-430);
}
if(appState===34){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    parisBut.hide();
    lyonBut.hide();
    strasbourgBut.hide();
    nantesBut.hide();
    toulouseBut.hide();
    bordeauxBut.hide();
    marseilleBut.hide();
    lilleBut.hide();
    dijonBut.hide();
    limogesBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("DIJON CURRENT DATA",displayWidth/2-300,displayHeight/2-430);
}
if(appState===35){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    parisBut.hide();
    lyonBut.hide();
    strasbourgBut.hide();
    nantesBut.hide();
    toulouseBut.hide();
    bordeauxBut.hide();
    marseilleBut.hide();
    lilleBut.hide();
    dijonBut.hide();
    limogesBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("LIMOGES CURRENT DATA",displayWidth/2-330,displayHeight/2-430);
}


if(appState===37){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    romeBut.hide();
    veniceBut.hide();
    pisaBut.hide();
    sienaBut.hide();
    cataniaBut.hide();
    parmaBut.hide();
    bolzanoBut.hide();
    tarantoBut.hide();
    vicenzaBut.hide();
    pompeiiBut.hide();
    
    fill("black");
    stroke(0);
    strokeWeight(2);
    textSize(48);
    text("ROME CURRENT DATA",displayWidth/2-300,displayHeight/2-430);
}
if(appState===38){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    romeBut.hide();
    veniceBut.hide();
    pisaBut.hide();
    sienaBut.hide();
    cataniaBut.hide();
    parmaBut.hide();
    bolzanoBut.hide();
    tarantoBut.hide();
    vicenzaBut.hide();
    pompeiiBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("VENICE CURRENT DATA",displayWidth/2-300,displayHeight/2-430);
}
if(appState===39){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    romeBut.hide();
    veniceBut.hide();
    pisaBut.hide();
    sienaBut.hide();
    cataniaBut.hide();
    parmaBut.hide();
    bolzanoBut.hide();
    tarantoBut.hide();
    vicenzaBut.hide();
    pompeiiBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("PISA CURRENT DATA",displayWidth/2-300,displayHeight/2-430);
}
if(appState===40){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
     romeBut.hide();
    veniceBut.hide();
    pisaBut.hide();
    sienaBut.hide();
    cataniaBut.hide();
    parmaBut.hide();
    bolzanoBut.hide();
    tarantoBut.hide();
    vicenzaBut.hide();
    pompeiiBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("SIENA CURRENT DATA",displayWidth/2-310,displayHeight/2-430);
}
if(appState===41){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    romeBut.hide();
    veniceBut.hide();
    pisaBut.hide();
    sienaBut.hide();
    cataniaBut.hide();
    parmaBut.hide();
    bolzanoBut.hide();
    tarantoBut.hide();
    vicenzaBut.hide();
    pompeiiBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("CATANIA CURRENT DATA",displayWidth/2-350,displayHeight/2-430);
}
if(appState===42){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    romeBut.hide();
    veniceBut.hide();
    pisaBut.hide();
    sienaBut.hide();
    cataniaBut.hide();
    parmaBut.hide();
    bolzanoBut.hide();
    tarantoBut.hide();
    vicenzaBut.hide();
    pompeiiBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("PARMA CURRENT DATA",displayWidth/2-300,displayHeight/2-430);
}
if(appState===43){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    romeBut.hide();
    veniceBut.hide();
    pisaBut.hide();
    sienaBut.hide();
    cataniaBut.hide();
    parmaBut.hide();
    bolzanoBut.hide();
    tarantoBut.hide();
    vicenzaBut.hide();
    pompeiiBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("BOLZANO CURRENT DATA",displayWidth/2-330,displayHeight/2-430);
}
if(appState===44){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    romeBut.hide();
    veniceBut.hide();
    pisaBut.hide();
    sienaBut.hide();
    cataniaBut.hide();
    parmaBut.hide();
    bolzanoBut.hide();
    tarantoBut.hide();
    vicenzaBut.hide();
    pompeiiBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("TARANTO CURRENT DATA",displayWidth/2-330,displayHeight/2-430);
}
if(appState===45){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    romeBut.hide();
    veniceBut.hide();
    pisaBut.hide();
    sienaBut.hide();
    cataniaBut.hide();
    parmaBut.hide();
    bolzanoBut.hide();
    tarantoBut.hide();
    vicenzaBut.hide();
    pompeiiBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("VICENZA CURRENT DATA",displayWidth/2-330,displayHeight/2-430);
}
if(appState===46){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    romeBut.hide();
    veniceBut.hide();
    pisaBut.hide();
    sienaBut.hide();
    cataniaBut.hide();
    parmaBut.hide();
    bolzanoBut.hide();
    tarantoBut.hide();
    vicenzaBut.hide();
    pompeiiBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("POMPEII CURRENT DATA",displayWidth/2-330,displayHeight/2-430);
}


if(appState===48){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    moscowBut.hide();
    kazanBut.hide();
    yekaterinburgBut.hide();
    omskBut.hide();
    samaraBut.hide();
    tomskBut.hide();
    ufaBut.hide();
    magadanBut.hide();
    astrakhanBut.hide();
    chitaBut.hide();
    
    fill("black");
    stroke(0);
    strokeWeight(2);
    textSize(48);
    text("MOSCOW CURRENT DATA",displayWidth/2-300,displayHeight/2-430);
}
if(appState===49){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    moscowBut.hide();
    kazanBut.hide();
    yekaterinburgBut.hide();
    omskBut.hide();
    samaraBut.hide();
    tomskBut.hide();
    ufaBut.hide();
    magadanBut.hide();
    astrakhanBut.hide();
    chitaBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("KAZAN CURRENT DATA",displayWidth/2-300,displayHeight/2-430);
}
if(appState===50){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    moscowBut.hide();
    kazanBut.hide();
    yekaterinburgBut.hide();
    omskBut.hide();
    samaraBut.hide();
    tomskBut.hide();
    ufaBut.hide();
    magadanBut.hide();
    astrakhanBut.hide();
    chitaBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("YEKATERINBURG CURRENT DATA",displayWidth/2-360,displayHeight/2-430);
}
if(appState===51){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    moscowBut.hide();
    kazanBut.hide();
    yekaterinburgBut.hide();
    omskBut.hide();
    samaraBut.hide();
    tomskBut.hide();
    ufaBut.hide();
    magadanBut.hide();
    astrakhanBut.hide();
    chitaBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("OMSK CURRENT DATA",displayWidth/2-310,displayHeight/2-430);
}
if(appState===52){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    moscowBut.hide();
    kazanBut.hide();
    yekaterinburgBut.hide();
    omskBut.hide();
    samaraBut.hide();
    tomskBut.hide();
    ufaBut.hide();
    magadanBut.hide();
    astrakhanBut.hide();
    chitaBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("SAMARA CURRENT DATA",displayWidth/2-320,displayHeight/2-430);
}
if(appState===53){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    moscowBut.hide();
    kazanBut.hide();
    yekaterinburgBut.hide();
    omskBut.hide();
    samaraBut.hide();
    tomskBut.hide();
    ufaBut.hide();
    magadanBut.hide();
    astrakhanBut.hide();
    chitaBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("TOMSK CURRENT DATA",displayWidth/2-300,displayHeight/2-430);
}
if(appState===54){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    moscowBut.hide();
    kazanBut.hide();
    yekaterinburgBut.hide();
    omskBut.hide();
    samaraBut.hide();
    tomskBut.hide();
    ufaBut.hide();
    magadanBut.hide();
    astrakhanBut.hide();
    chitaBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("UFA CURRENT DATA",displayWidth/2-280,displayHeight/2-430);
}
if(appState===55){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    moscowBut.hide();
    kazanBut.hide();
    yekaterinburgBut.hide();
    omskBut.hide();
    samaraBut.hide();
    tomskBut.hide();
    ufaBut.hide();
    magadanBut.hide();
    astrakhanBut.hide();
    chitaBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("MAGADAN CURRENT DATA",displayWidth/2-330,displayHeight/2-430);
}
if(appState===56){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    moscowBut.hide();
    kazanBut.hide();
    yekaterinburgBut.hide();
    omskBut.hide();
    samaraBut.hide();
    tomskBut.hide();
    ufaBut.hide();
    magadanBut.hide();
    astrakhanBut.hide();
    chitaBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("ASTRAKHAN CURRENT DATA",displayWidth/2-330,displayHeight/2-430);
}
if(appState===57){
    background(bg2);
    indiaBut.hide();
    usBut.hide();
    germanyBut.hide();
    franceBut.hide();
    italyBut.hide();
    chinaBut.hide();
    japanBut.hide();
    australiaBut.hide();
    singaporeBut.hide();
    russiaBut.hide();
    startBut.hide();
    moscowBut.hide();
    kazanBut.hide();
    yekaterinburgBut.hide();
    omskBut.hide();
    samaraBut.hide();
    tomskBut.hide();
    ufaBut.hide();
    magadanBut.hide();
    astrakhanBut.hide();
    chitaBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("CHITA CURRENT DATA",displayWidth/2-290,displayHeight/2-430);
}
if(appState===58){
    background(bg2);
    dehradunBut.hide();
    pauriBut.hide();
    uttarkashiBut.hide();
    pithoragarhBut.hide();
    champawatBut.hide();
    chamoliBut.hide();
    haridwarBut.hide();
    nainitalBut.hide();
    almoraBut.hide();
    chakrataBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("DEHRADUN CURRENT DATA",displayWidth/2-310,displayHeight/2-430);
    
}
if(appState===59){
    background(bg2);
    dehradunBut.hide();
    pauriBut.hide();
    uttarkashiBut.hide();
    pithoragarhBut.hide();
    champawatBut.hide();
    chamoliBut.hide();
    haridwarBut.hide();
    nainitalBut.hide();
    almoraBut.hide();
    chakrataBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("HARIDWAR CURRENT DATA",displayWidth/2-310,displayHeight/2-430);
    
}
if(appState===60){
    background(bg2);
    dehradunBut.hide();
    pauriBut.hide();
    uttarkashiBut.hide();
    pithoragarhBut.hide();
    champawatBut.hide();
    chamoliBut.hide();
    haridwarBut.hide();
    nainitalBut.hide();
    almoraBut.hide();
    chakrataBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("PAURI CURRENT DATA",displayWidth/2-285,displayHeight/2-430);
    
}
if(appState===61){
    background(bg2);
    dehradunBut.hide();
    pauriBut.hide();
    uttarkashiBut.hide();
    pithoragarhBut.hide();
    champawatBut.hide();
    chamoliBut.hide();
    haridwarBut.hide();
    nainitalBut.hide();
    almoraBut.hide();
    chakrataBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("NAINITAL CURRENT DATA",displayWidth/2-310,displayHeight/2-430);
    
}
if(appState===62){
    background(bg2);
    dehradunBut.hide();
    pauriBut.hide();
    uttarkashiBut.hide();
    pithoragarhBut.hide();
    champawatBut.hide();
    chamoliBut.hide();
    haridwarBut.hide();
    nainitalBut.hide();
    almoraBut.hide();
    chakrataBut.hide();

    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("ALMORA CURRENT DATA",displayWidth/2-310,displayHeight/2-430);
    startBut.hide();
}
if(appState===63){
    background(bg2);
    dehradunBut.hide();
    pauriBut.hide();
    uttarkashiBut.hide();
    pithoragarhBut.hide();
    champawatBut.hide();
    chamoliBut.hide();
    haridwarBut.hide();
    nainitalBut.hide();
    almoraBut.hide();
    chakrataBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("UTTARKASHI CURRENT DATA",displayWidth/2-330,displayHeight/2-430);
    
}
if(appState===64){
    background(bg2);
    dehradunBut.hide();
    pauriBut.hide();
    uttarkashiBut.hide();
    pithoragarhBut.hide();
    champawatBut.hide();
    chamoliBut.hide();
    haridwarBut.hide();
    nainitalBut.hide();
    almoraBut.hide();
    chakrataBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("PITHORAGARH CURRENT DATA",displayWidth/2-330,displayHeight/2-430);
    
}
if(appState===65){
    background(bg2);
    dehradunBut.hide();
    pauriBut.hide();
    uttarkashiBut.hide();
    pithoragarhBut.hide();
    champawatBut.hide();
    chamoliBut.hide();
    haridwarBut.hide();
    nainitalBut.hide();
    almoraBut.hide();
    chakrataBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("CHAMPAWAT CURRENT DATA",displayWidth/2-330,displayHeight/2-430);
    
}
if(appState===66){
    background(bg2);
    dehradunBut.hide();
    pauriBut.hide();
    uttarkashiBut.hide();
    pithoragarhBut.hide();
    champawatBut.hide();
    chamoliBut.hide();
    haridwarBut.hide();
    nainitalBut.hide();
    almoraBut.hide();
    chakrataBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("CHAMOLI CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
    
}
if(appState===67){
    background(bg2);
    dehradunBut.hide();
    pauriBut.hide();
    uttarkashiBut.hide();
    pithoragarhBut.hide();
    champawatBut.hide();
    chamoliBut.hide();
    haridwarBut.hide();
    nainitalBut.hide();
    almoraBut.hide();
    chakrataBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("CHAKRATA CURRENT DATA",displayWidth/2-310,displayHeight/2-430);
    
}
if(appState===68){
    background(bg2);
    bhopalBut.hide();
    indoreBut.hide();
    gwaliorBut.hide();
    jabalpurBut.hide();
    chhindwaraBut.hide();
    satnaBut.hide();
    khajurahoBut.hide();
    rewaBut.hide();
    shivpuriBut.hide();
    betulBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("BHOPAL CURRENT DATA",displayWidth/2-300,displayHeight/2-430);
    
}
if(appState===69){
    background(bg2);
    bhopalBut.hide();
    indoreBut.hide();
    gwaliorBut.hide();
    jabalpurBut.hide();
    chhindwaraBut.hide();
    satnaBut.hide();
    khajurahoBut.hide();
    rewaBut.hide();
    shivpuriBut.hide();
    betulBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("GWALIOR CURRENT DATA",displayWidth/2-310,displayHeight/2-430);
    
}
if(appState===70){
    background(bg2);
    bhopalBut.hide();
    indoreBut.hide();
    gwaliorBut.hide();
    jabalpurBut.hide();
    chhindwaraBut.hide();
    satnaBut.hide();
    khajurahoBut.hide();
    rewaBut.hide();
    shivpuriBut.hide();
    betulBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("INDORE CURRENT DATA",displayWidth/2-310,displayHeight/2-430);
    
}
if(appState===71){
    background(bg2);
    bhopalBut.hide();
    indoreBut.hide();
    gwaliorBut.hide();
    jabalpurBut.hide();
    chhindwaraBut.hide();
    satnaBut.hide();
    khajurahoBut.hide();
    rewaBut.hide();
    shivpuriBut.hide();
    betulBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("BETUL CURRENT DATA",displayWidth/2-310,displayHeight/2-430);
    
}
if(appState===72){
    background(bg2);
    bhopalBut.hide();
    indoreBut.hide();
    gwaliorBut.hide();
    jabalpurBut.hide();
    chhindwaraBut.hide();
    satnaBut.hide();
    khajurahoBut.hide();
    rewaBut.hide();
    shivpuriBut.hide();
    betulBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("JABALPUR CURRENT DATA",displayWidth/2-310,displayHeight/2-430);
    startBut.hide();
}
if(appState===73){
    background(bg2);
    bhopalBut.hide();
    indoreBut.hide();
    gwaliorBut.hide();
    jabalpurBut.hide();
    chhindwaraBut.hide();
    satnaBut.hide();
    khajurahoBut.hide();
    rewaBut.hide();
    shivpuriBut.hide();
    betulBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("CHHINDWARA CURRENT DATA",displayWidth/2-325,displayHeight/2-430);
    
}
if(appState===74){
    background(bg2);
    bhopalBut.hide();
    indoreBut.hide();
    gwaliorBut.hide();
    jabalpurBut.hide();
    chhindwaraBut.hide();
    satnaBut.hide();
    khajurahoBut.hide();
    rewaBut.hide();
    shivpuriBut.hide();
    betulBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("SATNA CURRENT DATA",displayWidth/2-310,displayHeight/2-430);
    startBut.hide();
}
if(appState===75){
    background(bg2);
    bhopalBut.hide();
    indoreBut.hide();
    gwaliorBut.hide();
    jabalpurBut.hide();
    chhindwaraBut.hide();
    satnaBut.hide();
    khajurahoBut.hide();
    rewaBut.hide();
    shivpuriBut.hide();
    betulBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("KHAJURAHO CURRENT DATA",displayWidth/2-320,displayHeight/2-430);
    
}
if(appState===76){
    background(bg2);
     bhopalBut.hide();
    indoreBut.hide();
    gwaliorBut.hide();
    jabalpurBut.hide();
    chhindwaraBut.hide();
    satnaBut.hide();
    khajurahoBut.hide();
    rewaBut.hide();
    shivpuriBut.hide();
    betulBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("REWA CURRENT DATA",displayWidth/2-300,displayHeight/2-430);
    
}
if(appState===77){
    background(bg2);
    bhopalBut.hide();
    indoreBut.hide();
    gwaliorBut.hide();
    jabalpurBut.hide();
    chhindwaraBut.hide();
    satnaBut.hide();
    khajurahoBut.hide();
    rewaBut.hide();
    shivpuriBut.hide();
    betulBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("SHIVPURI CURRENT DATA",displayWidth/2-310,displayHeight/2-430);
    
}
if(appState===78){
    background(bg2);

    lucknowBut.hide();
    kanpurBut.hide();
    mathuraBut.hide();
    meerutBut.hide();
    muzaffarnagarBut.hide();
    varanasiBut.hide();
    jhansiBut.hide();
    firozabadBut.hide();
    agraBut.hide();
    saharanpurBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("LUCKNOW CURRENT DATA",displayWidth/2-310,displayHeight/2-430);
    
}
if(appState===79){
    background(bg2);

    lucknowBut.hide();
    kanpurBut.hide();
    mathuraBut.hide();
    meerutBut.hide();
    muzaffarnagarBut.hide();
    varanasiBut.hide();
    jhansiBut.hide();
    firozabadBut.hide();
    agraBut.hide();
    saharanpurBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("KANPUR CURRENT DATA",displayWidth/2-310,displayHeight/2-430);
    
}
if(appState===80){
    background(bg2);

    lucknowBut.hide();
    kanpurBut.hide();
    mathuraBut.hide();
    meerutBut.hide();
    muzaffarnagarBut.hide();
    varanasiBut.hide();
    jhansiBut.hide();
    firozabadBut.hide();
    agraBut.hide();
    saharanpurBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("MATHURA CURRENT DATA",displayWidth/2-310,displayHeight/2-430);
    
}
if(appState===81){
    background(bg2);

    lucknowBut.hide();
    kanpurBut.hide();
    mathuraBut.hide();
    meerutBut.hide();
    muzaffarnagarBut.hide();
    varanasiBut.hide();
    jhansiBut.hide();
    firozabadBut.hide();
    agraBut.hide();
    saharanpurBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("MEERUT CURRENT DATA",displayWidth/2-310,displayHeight/2-430);
    
}
if(appState===82){
    background(bg2);
    startBut.hide();
    lucknowBut.hide();
    kanpurBut.hide();
    mathuraBut.hide();
    meerutBut.hide();
    muzaffarnagarBut.hide();
    varanasiBut.hide();
    jhansiBut.hide();
    firozabadBut.hide();
    agraBut.hide();
    saharanpurBut.hide();

    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("MUZAFFARNAGAR CURRENT DATA",displayWidth/2-350,displayHeight/2-430);
    
}
if(appState===83){
    background(bg2);

    lucknowBut.hide();
    kanpurBut.hide();
    mathuraBut.hide();
    meerutBut.hide();
    muzaffarnagarBut.hide();
    varanasiBut.hide();
    jhansiBut.hide();
    firozabadBut.hide();
    agraBut.hide();
    saharanpurBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("VARANASI CURRENT DATA",displayWidth/2-310,displayHeight/2-430);
    
}
if(appState===84){
    background(bg2);

    lucknowBut.hide();
    kanpurBut.hide();
    mathuraBut.hide();
    meerutBut.hide();
    muzaffarnagarBut.hide();
    varanasiBut.hide();
    jhansiBut.hide();
    firozabadBut.hide();
    agraBut.hide();
    saharanpurBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("JHANSI CURRENT DATA",displayWidth/2-310,displayHeight/2-430);
    
}
if(appState===85){
    background(bg2);

    lucknowBut.hide();
    kanpurBut.hide();
    mathuraBut.hide();
    meerutBut.hide();
    muzaffarnagarBut.hide();
    varanasiBut.hide();
    jhansiBut.hide();
    firozabadBut.hide();
    agraBut.hide();
    saharanpurBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("FIROZABAD CURRENT DATA",displayWidth/2-325,displayHeight/2-430);
    
}
if(appState===86){
    background(bg2);

    lucknowBut.hide();
    kanpurBut.hide();
    mathuraBut.hide();
    meerutBut.hide();
    muzaffarnagarBut.hide();
    varanasiBut.hide();
    jhansiBut.hide();
    firozabadBut.hide();
    agraBut.hide();
    saharanpurBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("AGRA CURRENT DATA",displayWidth/2-270,displayHeight/2-430);
    
}
if(appState===87){
    background(bg2);

    lucknowBut.hide();
    kanpurBut.hide();
    mathuraBut.hide();
    meerutBut.hide();
    muzaffarnagarBut.hide();
    varanasiBut.hide();
    jhansiBut.hide();
    firozabadBut.hide();
    agraBut.hide();
    saharanpurBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("SAHARANPUR CURRENT DATA",displayWidth/2-320,displayHeight/2-430);
    
}
if(appState===88){
    background(bg2);

    jaipurBut.hide();
    jodhpurBut.hide();
    udaipurBut.hide();
    jaisalmerBut.hide();
    alwarBut.hide();
    ajmerBut.hide();
    chhitorgarhBut.hide();
    mandoreBut.hide();
    bharatpurBut.hide();
    kotaBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("JAIPUR CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
    
}
if(appState===89){
    background(bg2);

    jaipurBut.hide();
    jodhpurBut.hide();
    udaipurBut.hide();
    jaisalmerBut.hide();
    alwarBut.hide();
    ajmerBut.hide();
    chhitorgarhBut.hide();
    mandoreBut.hide();
    bharatpurBut.hide();
    kotaBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("JODHPUR CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
    
}
if(appState===90){
    background(bg2);

    jaipurBut.hide();
    jodhpurBut.hide();
    udaipurBut.hide();
    jaisalmerBut.hide();
    alwarBut.hide();
    ajmerBut.hide();
    chhitorgarhBut.hide();
    mandoreBut.hide();
    bharatpurBut.hide();
    kotaBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("UDAIPUR CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
    
}
if(appState===91){
    background(bg2);

     jaipurBut.hide();
    jodhpurBut.hide();
    udaipurBut.hide();
    jaisalmerBut.hide();
    alwarBut.hide();
    ajmerBut.hide();
    chhitorgarhBut.hide();
    mandoreBut.hide();
    bharatpurBut.hide();
    kotaBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("JAISALMER CURRENT DATA",displayWidth/2-330,displayHeight/2-430);
    startBut.hide();
}
if(appState===92){
    background(bg2);

    jaipurBut.hide();
    jodhpurBut.hide();
    udaipurBut.hide();
    jaisalmerBut.hide();
    alwarBut.hide();
    ajmerBut.hide();
    chhitorgarhBut.hide();
    mandoreBut.hide();
    bharatpurBut.hide();
    kotaBut.hide();

    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("ALWAR CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
    startBut.hide();
}
if(appState===93){
    background(bg2);
    jaipurBut.hide();
    jodhpurBut.hide();
    udaipurBut.hide();
    jaisalmerBut.hide();
    alwarBut.hide();
    ajmerBut.hide();
    chhitorgarhBut.hide();
    mandoreBut.hide();
    bharatpurBut.hide();
    kotaBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("AJMER CURRENT DATA",displayWidth/2-295,displayHeight/2-430);
    startBut.hide();
}
if(appState===94){
    background(bg2);

    jaipurBut.hide();
    jodhpurBut.hide();
    udaipurBut.hide();
    jaisalmerBut.hide();
    alwarBut.hide();
    ajmerBut.hide();
    chhitorgarhBut.hide();
    mandoreBut.hide();
    bharatpurBut.hide();
    kotaBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("CHHITORGARH CURRENT DATA",displayWidth/2-330,displayHeight/2-430);
    startBut.hide();
}
if(appState===95){
    background(bg2);

    jaipurBut.hide();
    jodhpurBut.hide();
    udaipurBut.hide();
    jaisalmerBut.hide();
    alwarBut.hide();
    ajmerBut.hide();
    chhitorgarhBut.hide();
    mandoreBut.hide();
    bharatpurBut.hide();
    kotaBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("MANDORE CURRENT DATA",displayWidth/2-330,displayHeight/2-430);
    startBut.hide();
}
if(appState===96){
    background(bg2);

    jaipurBut.hide();
    jodhpurBut.hide();
    udaipurBut.hide();
    jaisalmerBut.hide();
    alwarBut.hide();
    ajmerBut.hide();
    chhitorgarhBut.hide();
    mandoreBut.hide();
    bharatpurBut.hide();
    kotaBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("BHARATPUR CURRENT DATA",displayWidth/2-290,displayHeight/2-430);
    
}
if(appState===97){
    background(bg2);

     jaipurBut.hide();
    jodhpurBut.hide();
    udaipurBut.hide();
    jaisalmerBut.hide();
    alwarBut.hide();
    ajmerBut.hide();
    chhitorgarhBut.hide();
    mandoreBut.hide();
    bharatpurBut.hide();
    kotaBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("KOTA CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
    
}
if(appState===98){
    background(bg2);

    gandhinagarBut.hide();
    suratBut.hide();
    rajkotBut.hide();
    ahmedabadbut.hide();
    jamnagarBut.hide();
    anandBut.hide();
    ankleshwarBut.hide();
    dwarkaBut.hide();
    khedaBut.hide();
    jetpurBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("GANDHINAGAR CURRENT DATA",displayWidth/2-335,displayHeight/2-430);
    
}
if(appState===99){
    background(bg2);

    gandhinagarBut.hide();
    suratBut.hide();
    rajkotBut.hide();
    ahmedabadbut.hide();
    jamnagarBut.hide();
    anandBut.hide();
    ankleshwarBut.hide();
    dwarkaBut.hide();
    khedaBut.hide();
    jetpurBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("SURAT CURRENT DATA",displayWidth/2-295,displayHeight/2-430);
    
}
if(appState===100){
    background(bg2);

    gandhinagarBut.hide();
    suratBut.hide();
    rajkotBut.hide();
    ahmedabadbut.hide();
    jamnagarBut.hide();
    anandBut.hide();
    ankleshwarBut.hide();
    dwarkaBut.hide();
    khedaBut.hide();
    jetpurBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("RAJKOT CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
    
}
if(appState===101){
    background(bg2);

    gandhinagarBut.hide();
    suratBut.hide();
    rajkotBut.hide();
    ahmedabadbut.hide();
    jamnagarBut.hide();
    anandBut.hide();
    ankleshwarBut.hide();
    dwarkaBut.hide();
    khedaBut.hide();
    jetpurBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("AHMEDABAD CURRENT DATA",displayWidth/2-335,displayHeight/2-430);
    
}
if(appState===102){
    background(bg2);

    gandhinagarBut.hide();
    suratBut.hide();
    rajkotBut.hide();
    ahmedabadbut.hide();
    jamnagarBut.hide();
    anandBut.hide();
    ankleshwarBut.hide();
    dwarkaBut.hide();
    khedaBut.hide();
    jetpurBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("JAMNAGAR CURRENT DATA",displayWidth/2-325,displayHeight/2-430);
    
}
if(appState===103){
    background(bg2);

    gandhinagarBut.hide();
    suratBut.hide();
    rajkotBut.hide();
    ahmedabadbut.hide();
    jamnagarBut.hide();
    anandBut.hide();
    ankleshwarBut.hide();
    dwarkaBut.hide();
    khedaBut.hide();
    jetpurBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("ANAND CURRENT DATA",displayWidth/2-295,displayHeight/2-430);
    
}
if(appState===104){
    background(bg2);

    gandhinagarBut.hide();
    suratBut.hide();
    rajkotBut.hide();
    ahmedabadbut.hide();
    jamnagarBut.hide();
    anandBut.hide();
    ankleshwarBut.hide();
    dwarkaBut.hide();
    khedaBut.hide();
    jetpurBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("ANKLESHWAR CURRENT DATA",displayWidth/2-335,displayHeight/2-430);
    
}
if(appState===105){
    background(bg2);

    gandhinagarBut.hide();
    suratBut.hide();
    rajkotBut.hide();
    ahmedabadbut.hide();
    jamnagarBut.hide();
    anandBut.hide();
    ankleshwarBut.hide();
    dwarkaBut.hide();
    khedaBut.hide();
    jetpurBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("DWARKA CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
    
}
if(appState===106){
    background(bg2);

    gandhinagarBut.hide();
    suratBut.hide();
    rajkotBut.hide();
    ahmedabadbut.hide();
    jamnagarBut.hide();
    anandBut.hide();
    ankleshwarBut.hide();
    dwarkaBut.hide();
    khedaBut.hide();
    jetpurBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("KHEDA CURRENT DATA",displayWidth/2-300,displayHeight/2-430);
    
}
if(appState===107){
    background(bg2);

    gandhinagarBut.hide();
    suratBut.hide();
    rajkotBut.hide();
    ahmedabadbut.hide();
    jamnagarBut.hide();
    anandBut.hide();
    ankleshwarBut.hide();
    dwarkaBut.hide();
    khedaBut.hide();
    jetpurBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("JETPUR CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
    
}
if(appState===108){
    background(bg2);

    gangtokBut.hide();
    ranipoolBut.hide();
    geyzingBut.hide();
    ravanglaBut.hide();
    rongliBut.hide();
    rangpoBut.hide();
    singtamBut.hide();
    pakyongBut.hide();
    lachungBut.hide();
    namchiBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("GANGTOK CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
}
if(appState===109){
    background(bg2);

    gangtokBut.hide();
    ranipoolBut.hide();
    geyzingBut.hide();
    ravanglaBut.hide();
    rongliBut.hide();
    rangpoBut.hide();
    singtamBut.hide();
    pakyongBut.hide();
    lachungBut.hide();
    namchiBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("RANIPOOL CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
}
if(appState===110){
    background(bg2);

    gangtokBut.hide();
    ranipoolBut.hide();
    geyzingBut.hide();
    ravanglaBut.hide();
    rongliBut.hide();
    rangpoBut.hide();
    singtamBut.hide();
    pakyongBut.hide();
    lachungBut.hide();
    namchiBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("GEYZING CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
}
if(appState===111){
    background(bg2);

    gangtokBut.hide();
    ranipoolBut.hide();
    geyzingBut.hide();
    ravanglaBut.hide();
    rongliBut.hide();
    rangpoBut.hide();
    singtamBut.hide();
    pakyongBut.hide();
    lachungBut.hide();
    namchiBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("RAVANGLA CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
}
if(appState===112){
    background(bg2);

    gangtokBut.hide();
    ranipoolBut.hide();
    geyzingBut.hide();
    ravanglaBut.hide();
    rongliBut.hide();
    rangpoBut.hide();
    singtamBut.hide();
    pakyongBut.hide();
    lachungBut.hide();
    namchiBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("RONGLI CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
}
if(appState===113){
    background(bg2);
    startBut.hide();
    gangtokBut.hide();
    ranipoolBut.hide();
    geyzingBut.hide();
    ravanglaBut.hide();
    rongliBut.hide();
    rangpoBut.hide();
    singtamBut.hide();
    pakyongBut.hide();
    lachungBut.hide();
    namchiBut.hide();

    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("RANGPO CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
}
if(appState===114){
    background(bg2);
    startBut.hide();
    gangtokBut.hide();
    ranipoolBut.hide();
    geyzingBut.hide();
    ravanglaBut.hide();
    rongliBut.hide();
    rangpoBut.hide();
    singtamBut.hide();
    pakyongBut.hide();
    lachungBut.hide();
    namchiBut.hide();

    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("SINGTAM CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
}
if(appState===115){
    background(bg2);
    startBut.hide();
    gangtokBut.hide();
    ranipoolBut.hide();
    geyzingBut.hide();
    ravanglaBut.hide();
    rongliBut.hide();
    rangpoBut.hide();
    singtamBut.hide();
    pakyongBut.hide();
    lachungBut.hide();
    namchiBut.hide();

    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("LACHUNG CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
}
if(appState===116){
    background(bg2);
    startBut.hide();
    gangtokBut.hide();
    ranipoolBut.hide();
    geyzingBut.hide();
    ravanglaBut.hide();
    rongliBut.hide();
    rangpoBut.hide();
    singtamBut.hide();
    pakyongBut.hide();
    lachungBut.hide();
    namchiBut.hide();

    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("PAKYONG CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
}
if(appState===117){
    background(bg2);

    gangtokBut.hide();
    ranipoolBut.hide();
    geyzingBut.hide();
    ravanglaBut.hide();
    rongliBut.hide();
    rangpoBut.hide();
    singtamBut.hide();
    pakyongBut.hide();
    lachungBut.hide();
    namchiBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("NAMCHI CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
}
if(appState===118){
    background(bg2);

    kolkataBut.hide();
    siliguriBut.hide();
    hooghlyBut.hide();
    darjeelingBut.hide();
    durgapurBut.hide();
    krishnanagarBut.hide();
    bolpurBut.hide();
    bankuraBut.hide();
    midnaporeBut.hide();
    murshidabadBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("KOLKATA CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
}
if(appState===119){
    background(bg2);

    kolkataBut.hide();
    siliguriBut.hide();
    hooghlyBut.hide();
    darjeelingBut.hide();
    durgapurBut.hide();
    krishnanagarBut.hide();
    bolpurBut.hide();
    bankuraBut.hide();
    midnaporeBut.hide();
    murshidabadBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("SILIGURI CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
}
if(appState===120){
    background(bg2);

    kolkataBut.hide();
    siliguriBut.hide();
    hooghlyBut.hide();
    darjeelingBut.hide();
    durgapurBut.hide();
    krishnanagarBut.hide();
    bolpurBut.hide();
    bankuraBut.hide();
    midnaporeBut.hide();
    murshidabadBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("DARJEELING CURRENT DATA",displayWidth/2-320,displayHeight/2-430);
}
if(appState===121){
    background(bg2);

    kolkataBut.hide();
    siliguriBut.hide();
    hooghlyBut.hide();
    darjeelingBut.hide();
    durgapurBut.hide();
    krishnanagarBut.hide();
    bolpurBut.hide();
    bankuraBut.hide();
    midnaporeBut.hide();
    murshidabadBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("HOOGHLY CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
}
if(appState===122){
    background(bg2);

    kolkataBut.hide();
    siliguriBut.hide();
    hooghlyBut.hide();
    darjeelingBut.hide();
    durgapurBut.hide();
    krishnanagarBut.hide();
    bolpurBut.hide();
    bankuraBut.hide();
    midnaporeBut.hide();
    murshidabadBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("DURGAPUR CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
}
if(appState===123){
    background(bg2);

    kolkataBut.hide();
    siliguriBut.hide();
    hooghlyBut.hide();
    darjeelingBut.hide();
    durgapurBut.hide();
    krishnanagarBut.hide();
    bolpurBut.hide();
    bankuraBut.hide();
    midnaporeBut.hide();
    murshidabadBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("KRISHNANAGAR CURRENT DATA",displayWidth/2-330,displayHeight/2-430);
}
if(appState===124){
    background(bg2);

    kolkataBut.hide();
    siliguriBut.hide();
    hooghlyBut.hide();
    darjeelingBut.hide();
    durgapurBut.hide();
    krishnanagarBut.hide();
    bolpurBut.hide();
    bankuraBut.hide();
    midnaporeBut.hide();
    murshidabadBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("BOLPUR CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
}
if(appState===125){
    background(bg2);

    kolkataBut.hide();
    siliguriBut.hide();
    hooghlyBut.hide();
    darjeelingBut.hide();
    durgapurBut.hide();
    krishnanagarBut.hide();
    bolpurBut.hide();
    bankuraBut.hide();
    midnaporeBut.hide();
    murshidabadBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("BANKURA CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
}
if(appState===126){
    background(bg2);

    kolkataBut.hide();
    siliguriBut.hide();
    hooghlyBut.hide();
    darjeelingBut.hide();
    durgapurBut.hide();
    krishnanagarBut.hide();
    bolpurBut.hide();
    bankuraBut.hide();
    midnaporeBut.hide();
    murshidabadBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("MIDNAPORE CURRENT DATA",displayWidth/2-315,displayHeight/2-430);
}
if(appState===127){
    background(bg2);

    kolkataBut.hide();
    siliguriBut.hide();
    hooghlyBut.hide();
    darjeelingBut.hide();
    durgapurBut.hide();
    krishnanagarBut.hide();
    bolpurBut.hide();
    bankuraBut.hide();
    midnaporeBut.hide();
    murshidabadBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("MURSHIDABAD CURRENT DATA",displayWidth/2-320,displayHeight/2-430);
}
if(appState===128){
    background(bg2);

    chennaiBut.hide();
    krishnagiriBut.hide();
    rameswaramBut.hide();
    kanyakumariBut.hide();
    kanchipuramBut.hide();
    dharmapuriBut.hide();
    thiruvarurBut.hide();
    thanjavurBut.hide();
    ootyBut.hide();
    maduraiBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("CHENNAI CURRENT DATA",displayWidth/2-310,displayHeight/2-430);
}
if(appState===129){
    background(bg2);

    chennaiBut.hide();
    krishnagiriBut.hide();
    rameswaramBut.hide();
    kanyakumariBut.hide();
    kanchipuramBut.hide();
    dharmapuriBut.hide();
    thiruvarurBut.hide();
    thanjavurBut.hide();
    ootyBut.hide();
    maduraiBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("RAMESWARAM CURRENT DATA",displayWidth/2-330,displayHeight/2-430);
}
if(appState===130){
    background(bg2);

    chennaiBut.hide();
    krishnagiriBut.hide();
    rameswaramBut.hide();
    kanyakumariBut.hide();
    kanchipuramBut.hide();
    dharmapuriBut.hide();
    thiruvarurBut.hide();
    thanjavurBut.hide();
    ootyBut.hide();
    maduraiBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("KRISHNAGIRI CURRENT DATA",displayWidth/2-325,displayHeight/2-430);
}
if(appState===131){
    background(bg2);

    chennaiBut.hide();
    krishnagiriBut.hide();
    rameswaramBut.hide();
    kanyakumariBut.hide();
    kanchipuramBut.hide();
    dharmapuriBut.hide();
    thiruvarurBut.hide();
    thanjavurBut.hide();
    ootyBut.hide();
    maduraiBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("THIRUVARUR CURRENT DATA",displayWidth/2-310,displayHeight/2-430);
}
if(appState===132){
    background(bg2);

    chennaiBut.hide();
    krishnagiriBut.hide();
    rameswaramBut.hide();
    kanyakumariBut.hide();
    kanchipuramBut.hide();
    dharmapuriBut.hide();
    thiruvarurBut.hide();
    thanjavurBut.hide();
    ootyBut.hide();
    maduraiBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("THANJAVUR CURRENT DATA",displayWidth/2-315,displayHeight/2-430);
}
if(appState===133){
    background(bg2);

    chennaiBut.hide();
    krishnagiriBut.hide();
    rameswaramBut.hide();
    kanyakumariBut.hide();
    kanchipuramBut.hide();
    dharmapuriBut.hide();
    thiruvarurBut.hide();
    thanjavurBut.hide();
    ootyBut.hide();
    maduraiBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("MADURAI CURRENT DATA",displayWidth/2-310,displayHeight/2-430);
}
if(appState===134){
    background(bg2);

    chennaiBut.hide();
    krishnagiriBut.hide();
    rameswaramBut.hide();
    kanyakumariBut.hide();
    kanchipuramBut.hide();
    dharmapuriBut.hide();
    thiruvarurBut.hide();
    thanjavurBut.hide();
    ootyBut.hide();
    maduraiBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("OOTY CURRENT DATA",displayWidth/2-300,displayHeight/2-430);
}
if(appState===135){
    background(bg2);

    chennaiBut.hide();
    krishnagiriBut.hide();
    rameswaramBut.hide();
    kanyakumariBut.hide();
    kanchipuramBut.hide();
    dharmapuriBut.hide();
    thiruvarurBut.hide();
    thanjavurBut.hide();
    ootyBut.hide();
    maduraiBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("DHARMAPURI CURRENT DATA",displayWidth/2-325,displayHeight/2-430);
}
if(appState===136){
    background(bg2);

    chennaiBut.hide();
    krishnagiriBut.hide();
    rameswaramBut.hide();
    kanyakumariBut.hide();
    kanchipuramBut.hide();
    dharmapuriBut.hide();
    thiruvarurBut.hide();
    thanjavurBut.hide();
    ootyBut.hide();
    maduraiBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("KANYAKUMARI CURRENT DATA",displayWidth/2-330,displayHeight/2-430);
}
if(appState===137){
    background(bg2);

    chennaiBut.hide();
    krishnagiriBut.hide();
    rameswaramBut.hide();
    kanyakumariBut.hide();
    kanchipuramBut.hide();
    dharmapuriBut.hide();
    thiruvarurBut.hide();
    thanjavurBut.hide();
    ootyBut.hide();
    maduraiBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("KANCHIPURAM CURRENT DATA",displayWidth/2-330,displayHeight/2-430);
}
if(appState===138){
    background(bg2);

    mumbaiBut.hide();
    shirdiBut.hide();
    puneBut.hide();
    ahmednagarBut.hide();
    jalgaonBut.hide();
    nagpurBut.hide();
    aurangabadBut.hide();
    chandrapurBut.hide();
    osmanabadBut.hide();
    ulhasnagarBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("MUMBAI CURRENT DATA",displayWidth/2-310,displayHeight/2-430);
}
if(appState===139){
    background(bg2);

    mumbaiBut.hide();
    shirdiBut.hide();
    puneBut.hide();
    ahmednagarBut.hide();
    jalgaonBut.hide();
    nagpurBut.hide();
    aurangabadBut.hide();
    chandrapurBut.hide();
    osmanabadBut.hide();
    ulhasnagarBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("SHIRDI CURRENT DATA",displayWidth/2-310,displayHeight/2-430);
}
if(appState===140){
    background(bg2);

    mumbaiBut.hide();
    shirdiBut.hide();
    puneBut.hide();
    ahmednagarBut.hide();
    jalgaonBut.hide();
    nagpurBut.hide();
    aurangabadBut.hide();
    chandrapurBut.hide();
    osmanabadBut.hide();
    ulhasnagarBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("PUNE CURRENT DATA",displayWidth/2-290,displayHeight/2-430);
}
if(appState===141){
    background(bg2);

    mumbaiBut.hide();
    shirdiBut.hide();
    puneBut.hide();
    ahmednagarBut.hide();
    jalgaonBut.hide();
    nagpurBut.hide();
    aurangabadBut.hide();
    chandrapurBut.hide();
    osmanabadBut.hide();
    ulhasnagarBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("JALGAON CURRENT DATA",displayWidth/2-310,displayHeight/2-430);
}
if(appState===142){
    background(bg2);
    startBut.hide();
    mumbaiBut.hide();
    shirdiBut.hide();
    puneBut.hide();
    ahmednagarBut.hide();
    jalgaonBut.hide();
    nagpurBut.hide();
    aurangabadBut.hide();
    chandrapurBut.hide();
    osmanabadBut.hide();
    ulhasnagarBut.hide();

    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("AHMEDNAGAR CURRENT DATA",displayWidth/2-330,displayHeight/2-430);
}
if(appState===143){
    background(bg2);

    mumbaiBut.hide();
    shirdiBut.hide();
    puneBut.hide();
    ahmednagarBut.hide();
    jalgaonBut.hide();
    nagpurBut.hide();
    aurangabadBut.hide();
    chandrapurBut.hide();
    osmanabadBut.hide();
    ulhasnagarBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("NAGPUR CURRENT DATA",displayWidth/2-310,displayHeight/2-430);
}
if(appState===144){
    background(bg2);

    mumbaiBut.hide();
    shirdiBut.hide();
    puneBut.hide();
    ahmednagarBut.hide();
    jalgaonBut.hide();
    nagpurBut.hide();
    aurangabadBut.hide();
    chandrapurBut.hide();
    osmanabadBut.hide();
    ulhasnagarBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("AURANGABAD CURRENT DATA",displayWidth/2-330,displayHeight/2-430);
}
if(appState===145){
    background(bg2);

    mumbaiBut.hide();
    shirdiBut.hide();
    puneBut.hide();
    ahmednagarBut.hide();
    jalgaonBut.hide();
    nagpurBut.hide();
    aurangabadBut.hide();
    chandrapurBut.hide();
    osmanabadBut.hide();
    ulhasnagarBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("CHANDRAPUR CURRENT DATA",displayWidth/2-325,displayHeight/2-430);
}
if(appState===146){
    background(bg2);

    mumbaiBut.hide();
    shirdiBut.hide();
    puneBut.hide();
    ahmednagarBut.hide();
    jalgaonBut.hide();
    nagpurBut.hide();
    aurangabadBut.hide();
    chandrapurBut.hide();
    osmanabadBut.hide();
    ulhasnagarBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("OSMANABAD CURRENT DATA",displayWidth/2-325,displayHeight/2-430);
}
if(appState===147){
    background(bg2);

    mumbaiBut.hide();
    shirdiBut.hide();
    puneBut.hide();
    ahmednagarBut.hide();
    jalgaonBut.hide();
    nagpurBut.hide();
    aurangabadBut.hide();
    chandrapurBut.hide();
    osmanabadBut.hide();
    ulhasnagarBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("ULHASNAGAR CURRENT DATA",displayWidth/2-325,displayHeight/2-430);
}
if(appState===149){
    background(bg2);

    beijingBut.hide();
    shanghaiBut.hide();
    xianBut.hide();
    nanjingBut.hide();
    tianjinBut.hide();
    wuhanBut.hide();
    kunmingBut.hide();
    chengduBut.hide();
    ningboBut.hide();
    nanchangBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("BEIJING CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
}
if(appState===150){
    background(bg2);

    beijingBut.hide();
    shanghaiBut.hide();
    xianBut.hide();
    nanjingBut.hide();
    tianjinBut.hide();
    wuhanBut.hide();
    kunmingBut.hide();
    chengduBut.hide();
    ningboBut.hide();
    nanchangBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("SHANGHAI CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
}
if(appState===151){
    background(bg2);

    beijingBut.hide();
    shanghaiBut.hide();
    xianBut.hide();
    nanjingBut.hide();
    tianjinBut.hide();
    wuhanBut.hide();
    kunmingBut.hide();
    chengduBut.hide();
    ningboBut.hide();
    nanchangBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("XIAN CURRENT DATA",displayWidth/2-275,displayHeight/2-430);
}
if(appState===152){
    background(bg2);

    beijingBut.hide();
    shanghaiBut.hide();
    xianBut.hide();
    nanjingBut.hide();
    tianjinBut.hide();
    wuhanBut.hide();
    kunmingBut.hide();
    chengduBut.hide();
    ningboBut.hide();
    nanchangBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("TIANJIN CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
}
if(appState===153){
    background(bg2);

    beijingBut.hide();
    shanghaiBut.hide();
    xianBut.hide();
    nanjingBut.hide();
    tianjinBut.hide();
    wuhanBut.hide();
    kunmingBut.hide();
    chengduBut.hide();
    ningboBut.hide();
    nanchangBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("KUNMING CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
}
if(appState===154){
    background(bg2);

    beijingBut.hide();
    shanghaiBut.hide();
    xianBut.hide();
    nanjingBut.hide();
    tianjinBut.hide();
    wuhanBut.hide();
    kunmingBut.hide();
    chengduBut.hide();
    ningboBut.hide();
    nanchangBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("WUHAN CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
}
if(appState===155){
    background(bg2);

    beijingBut.hide();
    shanghaiBut.hide();
    xianBut.hide();
    nanjingBut.hide();
    tianjinBut.hide();
    wuhanBut.hide();
    kunmingBut.hide();
    chengduBut.hide();
    ningboBut.hide();
    nanchangBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("CHENGDU CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
}
if(appState===156){
    background(bg2);

    beijingBut.hide();
    shanghaiBut.hide();
    xianBut.hide();
    nanjingBut.hide();
    tianjinBut.hide();
    wuhanBut.hide();
    kunmingBut.hide();
    chengduBut.hide();
    ningboBut.hide();
    nanchangBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("NINGBO CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
}
if(appState===157){
    background(bg2);

    beijingBut.hide();
    shanghaiBut.hide();
    xianBut.hide();
    nanjingBut.hide();
    tianjinBut.hide();
    wuhanBut.hide();
    kunmingBut.hide();
    chengduBut.hide();
    ningboBut.hide();
    nanchangBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("NANCHANG CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
}
if(appState===158){
    background(bg2);

    beijingBut.hide();
    shanghaiBut.hide();
    xianBut.hide();
    nanjingBut.hide();
    tianjinBut.hide();
    wuhanBut.hide();
    kunmingBut.hide();
    chengduBut.hide();
    ningboBut.hide();
    nanchangBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("NANJING CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
}
if(appState===160){
    background(bg2);

    tokyoBut.hide();
    kyotoBut.hide();
    kawasakiBut.hide();
    hiroshimaBut.hide();
    nagasakiBut.hide();
    sapporoBut.hide();
    osakaBut.hide();
    yokohamaBut.hide();
    kitakyushuBut.hide();
    kagoshimaBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("TOKYO CURRENT DATA",displayWidth/2-300,displayHeight/2-430);
}
if(appState===161){
    background(bg2);

    tokyoBut.hide();
    kyotoBut.hide();
    kawasakiBut.hide();
    hiroshimaBut.hide();
    nagasakiBut.hide();
    sapporoBut.hide();
    osakaBut.hide();
    yokohamaBut.hide();
    kitakyushuBut.hide();
    kagoshimaBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("KYOTO CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
}
if(appState===162){
    background(bg2);

    tokyoBut.hide();
    kyotoBut.hide();
    kawasakiBut.hide();
    hiroshimaBut.hide();
    nagasakiBut.hide();
    sapporoBut.hide();
    osakaBut.hide();
    yokohamaBut.hide();
    kitakyushuBut.hide();
    kagoshimaBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("OSAKA CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
}
if(appState===163){
    background(bg2);

    tokyoBut.hide();
    kyotoBut.hide();
    kawasakiBut.hide();
    hiroshimaBut.hide();
    nagasakiBut.hide();
    sapporoBut.hide();
    osakaBut.hide();
    yokohamaBut.hide();
    kitakyushuBut.hide();
    kagoshimaBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("SAPPARO CURRENT DATA",displayWidth/2-315,displayHeight/2-430);
}
if(appState===164){
    background(bg2);

    tokyoBut.hide();
    kyotoBut.hide();
    kawasakiBut.hide();
    hiroshimaBut.hide();
    nagasakiBut.hide();
    sapporoBut.hide();
    osakaBut.hide();
    yokohamaBut.hide();
    kitakyushuBut.hide();
    kagoshimaBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("HIROSHIMA CURRENT DATA",displayWidth/2-330,displayHeight/2-430);
}
if(appState===165){
    background(bg2);

    tokyoBut.hide();
    kyotoBut.hide();
    kawasakiBut.hide();
    hiroshimaBut.hide();
    nagasakiBut.hide();
    sapporoBut.hide();
    osakaBut.hide();
    yokohamaBut.hide();
    kitakyushuBut.hide();
    kagoshimaBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("YOKOHAMA CURRENT DATA",displayWidth/2-330,displayHeight/2-430);
}
if(appState===166){
    background(bg2);

    tokyoBut.hide();
    kyotoBut.hide();
    kawasakiBut.hide();
    hiroshimaBut.hide();
    nagasakiBut.hide();
    sapporoBut.hide();
    osakaBut.hide();
    yokohamaBut.hide();
    kitakyushuBut.hide();
    kagoshimaBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("NAGASAKI CURRENT DATA",displayWidth/2-325,displayHeight/2-430);
}
if(appState===167){
    background(bg2);

    tokyoBut.hide();
    kyotoBut.hide();
    kawasakiBut.hide();
    hiroshimaBut.hide();
    nagasakiBut.hide();
    sapporoBut.hide();
    osakaBut.hide();
    yokohamaBut.hide();
    kitakyushuBut.hide();
    kagoshimaBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("KITAKYUSHU CURRENT DATA",displayWidth/2-330,displayHeight/2-430);
}
if(appState===168){
    background(bg2);

    tokyoBut.hide();
    kyotoBut.hide();
    kawasakiBut.hide();
    hiroshimaBut.hide();
    nagasakiBut.hide();
    sapporoBut.hide();
    osakaBut.hide();
    yokohamaBut.hide();
    kitakyushuBut.hide();
    kagoshimaBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("KAWASAKI CURRENT DATA",displayWidth/2-320,displayHeight/2-430);
}
if(appState===169){
    background(bg2);

    tokyoBut.hide();
    kyotoBut.hide();
    kawasakiBut.hide();
    hiroshimaBut.hide();
    nagasakiBut.hide();
    sapporoBut.hide();
    osakaBut.hide();
    yokohamaBut.hide();
    kitakyushuBut.hide();
    kagoshimaBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("KAGOSHIMA CURRENT DATA",displayWidth/2-320,displayHeight/2-430);
}
if(appState===171){
    background(bg2);

    adelaideBut.hide();
    sydneyBut.hide();
    melbourneBut.hide();
    bunburyBut.hide();
    brisbaneBut.hide();
    canberraBut.hide();
    hobartBut.hide();
    mackayBut.hide();
    lismoreBut.hide();
    perthBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("ADELAIDE CURRENT DATA",displayWidth/2-320,displayHeight/2-430);
}
if(appState===172){
    background(bg2);

    adelaideBut.hide();
    sydneyBut.hide();
    melbourneBut.hide();
    bunburyBut.hide();
    brisbaneBut.hide();
    canberraBut.hide();
    hobartBut.hide();
    mackayBut.hide();
    lismoreBut.hide();
    perthBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("SYDNEY CURRENT DATA",displayWidth/2-310,displayHeight/2-430);
}
if(appState===173){
    background(bg2);

    adelaideBut.hide();
    sydneyBut.hide();
    melbourneBut.hide();
    bunburyBut.hide();
    brisbaneBut.hide();
    canberraBut.hide();
    hobartBut.hide();
    mackayBut.hide();
    lismoreBut.hide();
    perthBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("MELBOURNE CURRENT DATA",displayWidth/2-330,displayHeight/2-430);
}
if(appState===174){
    background(bg2);

    adelaideBut.hide();
    sydneyBut.hide();
    melbourneBut.hide();
    bunburyBut.hide();
    brisbaneBut.hide();
    canberraBut.hide();
    hobartBut.hide();
    mackayBut.hide();
    lismoreBut.hide();
    perthBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("BUNBURY CURRENT DATA",displayWidth/2-310,displayHeight/2-430);
}
if(appState===175){
    background(bg2);

    adelaideBut.hide();
    sydneyBut.hide();
    melbourneBut.hide();
    bunburyBut.hide();
    brisbaneBut.hide();
    canberraBut.hide();
    hobartBut.hide();
    mackayBut.hide();
    lismoreBut.hide();
    perthBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("BRISBANE CURRENT DATA",displayWidth/2-312,displayHeight/2-430);
}
if(appState===176){
    background(bg2);

    adelaideBut.hide();
    sydneyBut.hide();
    melbourneBut.hide();
    bunburyBut.hide();
    brisbaneBut.hide();
    canberraBut.hide();
    hobartBut.hide();
    mackayBut.hide();
    lismoreBut.hide();
    perthBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("CANBERRA CURRENT DATA",displayWidth/2-315,displayHeight/2-430);
}
if(appState===177){
    background(bg2);

    adelaideBut.hide();
    sydneyBut.hide();
    melbourneBut.hide();
    bunburyBut.hide();
    brisbaneBut.hide();
    canberraBut.hide();
    hobartBut.hide();
    mackayBut.hide();
    lismoreBut.hide();
    perthBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("HOBART CURRENT DATA",displayWidth/2-310,displayHeight/2-430);
}
if(appState===178){
    background(bg2);

    adelaideBut.hide();
    sydneyBut.hide();
    melbourneBut.hide();
    bunburyBut.hide();
    brisbaneBut.hide();
    canberraBut.hide();
    hobartBut.hide();
    mackayBut.hide();
    lismoreBut.hide();
    perthBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("MACKAY CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
}
if(appState===179){
    background(bg2);

    adelaideBut.hide();
    sydneyBut.hide();
    melbourneBut.hide();
    bunburyBut.hide();
    brisbaneBut.hide();
    canberraBut.hide();
    hobartBut.hide();
    mackayBut.hide();
    lismoreBut.hide();
    perthBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("LISMORE CURRENT DATA",displayWidth/2-320,displayHeight/2-430);
}
if(appState===180){
    background(bg2);

    adelaideBut.hide();
    sydneyBut.hide();
    melbourneBut.hide();
    bunburyBut.hide();
    brisbaneBut.hide();
    canberraBut.hide();
    hobartBut.hide();
    mackayBut.hide();
    lismoreBut.hide();
    perthBut.hide();
    startBut.hide();
    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("PERTH CURRENT DATA",displayWidth/2-285,displayHeight/2-430);
}

if(appState===182){
    background(bg2);

    hamburgBut.hide();
    berlinBut.hide();
    munichBut.hide();
    nurembergBut.hide();
    bochumBut.hide();
    cologneBut.hide();
    aachenBut.hide();
    duisburgBut.hide();
    rostockBut.hide();
    oldenburgBut.hide();
    startBut.hide();

    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("HAMBURG CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
}
if(appState===183){
    background(bg2);

    hamburgBut.hide();
    berlinBut.hide();
    munichBut.hide();
    nurembergBut.hide();
    bochumBut.hide();
    cologneBut.hide();
    aachenBut.hide();
    duisburgBut.hide();
    rostockBut.hide();
    oldenburgBut.hide();
    startBut.hide();

    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("MUNICH CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
}
if(appState===184){
    background(bg2);

    hamburgBut.hide();
    berlinBut.hide();
    munichBut.hide();
    nurembergBut.hide();
    bochumBut.hide();
    cologneBut.hide();
    aachenBut.hide();
    duisburgBut.hide();
    rostockBut.hide();
    oldenburgBut.hide();
    startBut.hide();

    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("NUREMBURG CURRENT DATA",displayWidth/2-325,displayHeight/2-430);
}
if(appState===185){
    background(bg2);

    hamburgBut.hide();
    berlinBut.hide();
    munichBut.hide();
    nurembergBut.hide();
    bochumBut.hide();
    cologneBut.hide();
    aachenBut.hide();
    duisburgBut.hide();
    rostockBut.hide();
    oldenburgBut.hide();
    startBut.hide();

    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("BERLIN CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
}
if(appState===186){
    background(bg2);

    hamburgBut.hide();
    berlinBut.hide();
    munichBut.hide();
    nurembergBut.hide();
    bochumBut.hide();
    cologneBut.hide();
    aachenBut.hide();
    duisburgBut.hide();
    rostockBut.hide();
    oldenburgBut.hide();
    startBut.hide();

    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("COLOGNE CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
}
if(appState===187){
    background(bg2);

    hamburgBut.hide();
    berlinBut.hide();
    munichBut.hide();
    nurembergBut.hide();
    bochumBut.hide();
    cologneBut.hide();
    aachenBut.hide();
    duisburgBut.hide();
    rostockBut.hide();
    oldenburgBut.hide();
    startBut.hide();

    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("AACHEN CURRENT DATA",displayWidth/2-285,displayHeight/2-430);
}
if(appState===188){
    background(bg2);

    hamburgBut.hide();
    berlinBut.hide();
    munichBut.hide();
    nurembergBut.hide();
    bochumBut.hide();
    cologneBut.hide();
    aachenBut.hide();
    duisburgBut.hide();
    rostockBut.hide();
    oldenburgBut.hide();
    startBut.hide();

    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("DUISBURG CURRENT DATA",displayWidth/2-295,displayHeight/2-430);
}
if(appState===189){
    background(bg2);

    hamburgBut.hide();
    berlinBut.hide();
    munichBut.hide();
    nurembergBut.hide();
    bochumBut.hide();
    cologneBut.hide();
    aachenBut.hide();
    duisburgBut.hide();
    rostockBut.hide();
    oldenburgBut.hide();
    startBut.hide();

    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("ROSTOCK CURRENT DATA",displayWidth/2-300,displayHeight/2-430);
}
if(appState===190){
    background(bg2);

    hamburgBut.hide();
    berlinBut.hide();
    munichBut.hide();
    nurembergBut.hide();
    bochumBut.hide();
    cologneBut.hide();
    aachenBut.hide();
    duisburgBut.hide();
    rostockBut.hide();
    oldenburgBut.hide();
    startBut.hide();

    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("BOCHUM CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
}
if(appState===191){
    background(bg2);

    hamburgBut.hide();
    berlinBut.hide();
    munichBut.hide();
    nurembergBut.hide();
    bochumBut.hide();
    cologneBut.hide();
    aachenBut.hide();
    duisburgBut.hide();
    rostockBut.hide();
    oldenburgBut.hide();
    startBut.hide();

    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("OLDENBURG CURRENT DATA",displayWidth/2-325,displayHeight/2-430);
}

if(appState===193){
    background(bg2);

    jurongBut.hide();
    seletarBut.hide();
    yishunBut.hide();
    rochorBut.hide();
    clementiBut.hide();
    kranjiBut.hide();
    novenaBut.hide();
    sengkangBut.hide();
    temasekBut.hide();
    hougangBut.hide();
    startBut.hide();

    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("JURONG CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
}
if(appState===194){
    background(bg2);
    jurongBut.hide();
    seletarBut.hide();
    yishunBut.hide();
    rochorBut.hide();
    clementiBut.hide();
    kranjiBut.hide();
    novenaBut.hide();
    sengkangBut.hide();
    temasekBut.hide();
    hougangBut.hide();
    startBut.hide();

    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("SELETAR CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
}

if(appState===195){
    background(bg2);

    jurongBut.hide();
    seletarBut.hide();
    yishunBut.hide();
    rochorBut.hide();
    clementiBut.hide();
    kranjiBut.hide();
    novenaBut.hide();
    sengkangBut.hide();
    temasekBut.hide();
    hougangBut.hide();
    startBut.hide();


    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("YISHUN CURRENT DATA",displayWidth/2-295,displayHeight/2-430);
}
if(appState===196){
    background(bg2);

    jurongBut.hide();
    seletarBut.hide();
    yishunBut.hide();
    rochorBut.hide();
    clementiBut.hide();
    kranjiBut.hide();
    novenaBut.hide();
    sengkangBut.hide();
    temasekBut.hide();
    hougangBut.hide();
    startBut.hide();

    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("ROCHOR CURRENT DATA",displayWidth/2-295,displayHeight/2-430);
}
if(appState===197){
    background(bg2);

    jurongBut.hide();
    seletarBut.hide();
    yishunBut.hide();
    rochorBut.hide();
    clementiBut.hide();
    kranjiBut.hide();
    novenaBut.hide();
    sengkangBut.hide();
    temasekBut.hide();
    hougangBut.hide();
    startBut.hide();

    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("CLEMENTI CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
}
if(appState===198){
    background(bg2);

    jurongBut.hide();
    seletarBut.hide();
    yishunBut.hide();
    rochorBut.hide();
    clementiBut.hide();
    kranjiBut.hide();
    novenaBut.hide();
    sengkangBut.hide();
    temasekBut.hide();
    hougangBut.hide();
    startBut.hide();

    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("KRANJI CURRENT DATA",displayWidth/2-295,displayHeight/2-430);
}
if(appState===199){
    background(bg2);

    jurongBut.hide();
    seletarBut.hide();
    yishunBut.hide();
    rochorBut.hide();
    clementiBut.hide();
    kranjiBut.hide();
    novenaBut.hide();
    sengkangBut.hide();
    temasekBut.hide();
    hougangBut.hide();
    startBut.hide();

    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("NOVENA CURRENT DATA",displayWidth/2-295,displayHeight/2-430);
}
if(appState===200){
    background(bg2);

    jurongBut.hide();
    seletarBut.hide();
    yishunBut.hide();
    rochorBut.hide();
    clementiBut.hide();
    kranjiBut.hide();
    novenaBut.hide();
    sengkangBut.hide();
    temasekBut.hide();
    hougangBut.hide();
    startBut.hide();

    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("TEMASEK CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
}
if(appState===201){
    background(bg2);

    jurongBut.hide();
    seletarBut.hide();
    yishunBut.hide();
    rochorBut.hide();
    clementiBut.hide();
    kranjiBut.hide();
    novenaBut.hide();
    sengkangBut.hide();
    temasekBut.hide();
    hougangBut.hide();
    startBut.hide();

    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("HOUGANG CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
}
if(appState===202){
    background(bg2);

    jurongBut.hide();
    seletarBut.hide();
    yishunBut.hide();
    rochorBut.hide();
    clementiBut.hide();
    kranjiBut.hide();
    novenaBut.hide();
    sengkangBut.hide();
    temasekBut.hide();
    hougangBut.hide();
    startBut.hide();

    stroke(0);
    strokeWeight(2);
    fill("black");
    textSize(48);
    text("SENGKANG CURRENT DATA",displayWidth/2-305,displayHeight/2-430);
}
}
async function getnewTime(){
    var responsenew=await fetch("https://api.weatherapi.com/v1/current.json?key=469320127ae8429099f105012212407&q&q=new%20york&aqi=no");
    var responseJSONnew=await responsenew.json();
    newhr=await responseJSONnew.location.localtime.slice(11,16);
}
async function getsanTime(){
    var responsesan=await fetch("https://api.weatherapi.com/v1/current.json?key=469320127ae8429099f105012212407&q&q=san%20francisco&aqi=no");
    var responseJSONsan=await responsesan.json();
    sanhr=await responseJSONsan.location.localtime.slice(11,16);
}
async function getphiladelphiaTime(){
    var responsephiladelphia=await fetch("https://api.weatherapi.com/v1/current.json?key=469320127ae8429099f105012212407&q&q=philadelphia&aqi=no");
    var responseJSONphiladelphia=await responsephiladelphia.json();
    philadelphiahr=await responseJSONphiladelphia.location.localtime.slice(11,16);
}
async function getchicagoTime(){
    var responsechicago=await fetch("https://api.weatherapi.com/v1/current.json?key=469320127ae8429099f105012212407&q&q=chicago&aqi=no");
    var responseJSONchicago=await responsechicago.json();
    chicagohr=await responseJSONchicago.location.localtime.slice(11,16);
}
async function getlosTime(){
    var responselos=await fetch("https://api.weatherapi.com/v1/current.json?key=469320127ae8429099f105012212407&q&q=los%20angeles&aqi=no");
    var responseJSONlos=await responselos.json();
    loshr=await responseJSONlos.location.localtime.slice(11,16);
}
async function getstlouisTime(){
    var responsestlouis=await fetch("http://api.weatherapi.com/v1/current.json?key=469320127ae8429099f105012212407&q&q=saint%20louis&aqi=no");
    var responseJSONstlouis=await responsestlouis.json();
    stlouishr=await responseJSONstlouis.location.localtime.slice(11,16);
}
async function getmiamiTime(){
    var reponsemiami=await fetch("https://api.weatherapi.com/v1/current.json?key=469320127ae8429099f105012212407&q&q=miami&aqi=no");
    var responseJSONmiami=await reponsemiami.json();
    miamihr=await responseJSONmiami.location.localtime.slice(11,16);
}
async function getwashTime(){
    var responsewash=await fetch("https://api.weatherapi.com/v1/current.json?key=469320127ae8429099f105012212407&q&q=washington%20dc&aqi=no");
    var responseJSONwash=await responsewash.json();
    washhr=await responseJSONwash.location.localtime.slice(11,16);
}