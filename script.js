/**
 * श्री गो-आश्रम व गौशाळा सेवा पोर्टल
 * Full Bug-Free Logic with Clean Portal Switching
 */

const I18N = {
  mr: {
    langBtnText: "English",
    topHelpline: "तातडीची अंत्यसंस्कार व गोसेवा हेल्पलाईन: <strong>+91 98765 43210</strong> (24x7)",
    regNo: "नोंदणी: महा/गौ-सेवा/२०२४",
    openAdmin: "ॲडमिन डॅशबोर्ड",
    openCustomer: "ग्राहक पोर्टल",
    portalTitle: "श्री सुरभी गो-आश्रम",
    portalSubtitle: "गौ-संवर्धन, सेवा आणि सेंद्रिय उत्पादने",
    navHome: "मुख्यपृष्ठ",
    navStore: "गौ-उत्पादने",
    navDonate: "गौदान व चारा",
    navAdopt: "दत्तक / समर्पण",
    navUrgent: "अंत्यविधी गोवऱ्या",
    heroMotto: "गावो विश्वस्य मातरः — गाय ही विश्वाची माता आहे",
    heroHeading: "देशी गोवंशाचे संवर्धन, संरक्षण आणि जनसेवा",
    heroSubtext: "श्री सुरभी गो-आश्रमात निराधार, वृद्ध व भाकड गोवंशाचा सांभाळ केला जातो. शुद्ध सेंद्रिय उत्पादने खरेदी करा किंवा गोमातेच्या सेवेत देणगी अर्पण करा.",
    btnBuyProducts: "उत्पादने खरेदी करा",
    btnDonateNow: "गोदान / चारा देणगी",
    btnUrgentFuneral: "अंत्यसंस्कार गोवऱ्या सेवा",
    bannerUrgentTitle: "अंत्यविधीसाठी शेणाच्या गोवऱ्यांची तात्काळ सेवा",
    bannerUrgentSub: "अंतिम संस्कारासाठी शुद्ध सुकलेल्या गोवऱ्या थेट स्मशानभूमीत अवघ्या २ तासांत पोहोचवल्या जातात.",
    btnUrgentBook: "तातडीची मागणी करा",
    servicesHeading: "गौशाळेच्या प्रमुख सेवा",
    servicesSub: "सर्व सेवांचा नफा फक्त आणि फक्त गोवंशाच्या चाऱ्यासाठी वापरला जातो",
    card1Title: "A2 दूध व शुद्ध तूप",
    card1Desc: "गीर व खिल्लारी गायींचे वैदिक बिलोना पद्धतीने तयार केलेले शुद्ध तूप.",
    card2Title: "शेणाच्या गोवऱ्या व धूपबत्ती",
    card2Desc: "यज्ञ, होम-हवन आणि अंत्यविधीसाठी उन्हात वाळवलेल्या पवित्र गोवऱ्या.",
    card3Title: "चारा व औषध देणगी",
    card3Desc: "वाढदिवस, पुण्यतिथी निमित्त गायींना १ दिवसाचा चारा किंवा गोदान करा.",
    card4Title: "गोवंश दत्तक व समर्पण",
    card4Desc: "शेतीसाठी गोवंश हवा असल्यास किंवा असमर्थ असल्यास गोशाळेत दाखल करा.",
    storeTitle: "गौ-उत्पादने ई-दुकान",
    storeSubtitle: "शुद्ध, सेंद्रिय आणि १००% नैसर्गिक उत्पादने",
    catAll: "सर्व",
    catMilkGhee: "दूध व तूप",
    catGaurya: "गोवऱ्या व धूप",
    catArk: "गोमूत्र अर्क व खत",
    btnAddToCart: "खरेदी करा",
    outOfStock: "स्टॉक संपला",
    stockLeft: "शिल्लक",
    donationTag: "पुण्य संचय",
    donationHeading: "गोमातेच्या सेवेत योगदान द्या",
    donationSubtext: "तुमच्या लहानशा देणगीमुळे एका मुक्या जनावराला भरपोट चारा आणि वेळेवर उपचार मिळतील.",
    lblSelectCause: "देणगीचा उद्देश निवडा *",
    cause1: "१ दिवसाचा चारा",
    cause2: "वैद्यकीय उपचार",
    cause3: "गाय दत्तक (१ महिना)",
    cause4: "ऐच्छिक निधी",
    lblAmount: "देणगी रक्कम (₹) *",
    lblFullName: "देणगीदाराचे पूर्ण नाव *",
    lblPhone: "मोबाईल नंबर *",
    lblCity: "पत्ता / गाव",
    lblPaymentMode: "सुरक्षित ऑनलाईन पेमेंट (UPI / QR / Net Banking)",
    lblPaymentSub: "पेमेंट पूर्ण होताच अधिकृत देणगी पावती डाऊनलोड करता येईल.",
    btnSubmitDonate: "देणगी अर्पण करा & पावती मिळवा",
    adoptHeader: "गोवंश दत्तक व समर्पण कक्ष",
    adoptSub: "शेतकऱ्यांसाठी गोवंश मागणी आणि अडचणीतील जनावरांना आश्रमात दाखल करण्याची सुविधा",
    adoptFormTitle: "गोवंश दत्तक घ्या (पालनासाठी)",
    adoptFormDesc: "जर तुम्ही शेतकरी किंवा गो-पालक असाल आणि तुम्हाला शेतीसाठी बैल किंवा दुधासाठी देशी गाय हवी असल्यास अर्ज करा.",
    lblSelectAnimal: "हवे असलेले जनावर निवडा *",
    lblFarmDetails: "पत्ता व शेतीचा तपशील *",
    btnSubmitAdopt: "दत्तक घेण्यासाठी अर्ज पाठवा",
    surrenderFormTitle: "जनावर गोशाळेत सोडा (समर्पण)",
    surrenderFormDesc: "अपघातात जखमी, वृद्ध, भाकड किंवा सांभाळणे अशक्य झालेले जनावर गोशाळेच्या आश्रयाला सोडण्यासाठी अर्ज करा.",
    lblOwnerName: "मालकाचे नाव *",
    lblAnimalAge: "जनावराचा प्रकार व वय *",
    lblReasonHealth: "सोडण्याचे कारण व आरोग्य स्थिती *",
    btnSubmitSurrender: "गोशाळेत सोडण्यासाठी नोंदवा",
    adminHeading: "गौशाळा मालक व व्यवस्थापक डॅशबोर्ड",
    adminSub: "ऑर्डर्स, देणग्या, तातडीची सेवा आणि गोवंश नोंदवहीचे थेट व्यवस्थापन",
    btnResetData: "डेटा रिसेट",
    kpiDonations: "एकूण जमा देणग्या",
    kpiOrders: "उत्पादन ऑर्डर्स",
    kpiUrgent: "अंत्यविधी मागण्या",
    kpiCattle: "एकूण गोवंश",
    tabAdminOrders: "ऑर्डर्स व इमर्जन्सी",
    tabAdminDonations: "देणगी वही",
    tabAdminRequests: "दत्तक व समर्पण",
    tabAdminCattle: "गोवंश नोंदवही",
    tabAdminInventory: "उत्पादन साठा",
    thOrderId: "ऑर्डर ID व वेळ",
    thCustomer: "ग्राहक व पत्ता",
    thType: "प्रकार",
    thDetails: "मागणी तपशील",
    thAmount: "रक्कम",
    thStatus: "सद्यस्थिती",
    thAction: "कृती",
    thReceiptNo: "पावती क्र.",
    thDonor: "देणगीदार",
    thCause: "उद्देश",
    thDate: "दिनांक",
    thPrintReceipt: "पावती",
    btnExportCsv: "CSV डाऊनलोड",
    thApplicant: "अर्जदार व मोबाईल",
    thAnimal: "जनावर तपशील",
    thDecision: "निर्णय",
    cattleHeading: "आश्रमातील गोवंश नोंदवही",
    btnAddNewCattle: "नवीन गोवंश नोंदवा",
    thTagId: "टॅग क्र.",
    thName: "नाव",
    thBreed: "जात",
    thAgeType: "वय / प्रकार",
    thHealth: "आरोग्य स्थिती",
    thAdoptStatus: "दत्तक स्थिती",
    thProduct: "उत्पादन",
    thCategory: "श्रेणी",
    thRate: "दर (₹)",
    thStockQty: "उपलब्ध शिल्लक साठा",
    thUpdateStock: "साठा अपडेट",
    modalUrgentTitle: "अंत्यविधी गोवऱ्या - तात्काळ ऑर्डर",
    lblContactPerson: "संपर्क व्यक्तीचे नाव *",
    lblActivePhone: "मोबाईल नंबर *",
    lblQuantity: "गोवऱ्यांचे प्रमाण निवडा *",
    lblCremationAddress: "स्मशानभूमीचा पत्ता / परिसर *",
    btnSendUrgent: "तातडीने पाठवा",
    cartTitle: "खरेदी सूची (Shopping Cart)",
    lblGrandTotal: "एकूण रक्कम:",
    btnConfirmOrder: "ऑर्डर निश्चित करा",
    receiptTrustName: "श्री सुरभी गो-आश्रम ट्रस्ट",
    receiptTitle: "अधिकृत देणगी पावती",
    lblReceivedAmount: "प्राप्त रक्कम:",
    btnPrintPdf: "प्रिंट / Save PDF",
    btnClose: "बंद करा",
    modalAddCattleTitle: "नवीन गोवंश नोंदणी",
    lblTagId: "टॅग क्रमांक (Tag ID) *",
    lblAnimalName: "नाव / ओळख *",
    btnSaveCattle: "नोंदवहीत जतन करा"
  },
  en: {
    langBtnText: "मराठी",
    topHelpline: "Emergency Funeral & GauSeva Helpline: <strong>+91 98765 43210</strong> (24x7)",
    regNo: "Reg: MH/GAU-SEVA/2024",
    openAdmin: "Admin Dashboard",
    openCustomer: "Customer Portal",
    portalTitle: "Shree Surbhi Gau-Ashram",
    portalSubtitle: "Cattle Protection, Service & Organic Products",
    navHome: "Home",
    navStore: "Gau-Products",
    navDonate: "Donation & Fodder",
    navAdopt: "Adopt / Rescue",
    navUrgent: "Funeral Dung",
    heroMotto: "Gavo Vishwasya Matarah — Cow is Mother of the Universe",
    heroHeading: "Conservation & Care of Indigenous Desi Cattle",
    heroSubtext: "Shelter for old, abandoned, and stray cattle. Buy Vedic farm products or donate to sustain sacred cows.",
    btnBuyProducts: "Shop Products",
    btnDonateNow: "Donate Fodder",
    btnUrgentFuneral: "Urgent Funeral Cakes",
    bannerUrgentTitle: "Instant Cowdung Cakes for Cremation Rituals",
    bannerUrgentSub: "Pure sun-dried dung cakes delivered directly to the cremation site within 2 hours.",
    btnUrgentBook: "Request Now",
    servicesHeading: "Our Core Offerings",
    servicesSub: "All proceeds support cow nutrition and critical medical care.",
    card1Title: "A2 Milk & Pure Ghee",
    card1Desc: "Handmade Bilona Ghee from Vedic Gir and Khillari cows.",
    card2Title: "Cowdung Cakes & Dhoop",
    card2Desc: "Purified dry cakes and herbal panchagavya incense.",
    card3Title: "Fodder & Healthcare",
    card3Desc: "Sponsor 1-day fodder or emergency medical aid.",
    card4Title: "Adoption & Surrender",
    card4Desc: "Adopt for farming or surrender cattle in need.",
    storeTitle: "Organic Gau-Products Store",
    storeSubtitle: "Pure, certified and 100% natural products",
    catAll: "All",
    catMilkGhee: "Milk & Ghee",
    catGaurya: "Cowdung & Dhoop",
    catArk: "Gomutra & Compost",
    btnAddToCart: "Add to Cart",
    outOfStock: "Out of Stock",
    stockLeft: "In Stock",
    donationTag: "Noble Support",
    donationHeading: "Contribute to Gau-Seva",
    donationSubtext: "Your support feeds and heals innocent rescued cows.",
    lblSelectCause: "Choose Purpose *",
    cause1: "1-Day Green Fodder",
    cause2: "Medical Care",
    cause3: "Adopt a Cow (1 Month)",
    cause4: "General Gau-Fund",
    lblAmount: "Amount (₹) *",
    lblFullName: "Donor's Full Name *",
    lblPhone: "Mobile Number *",
    lblCity: "City / Town",
    lblPaymentMode: "Secure Online Payment (UPI / QR / Net Banking)",
    lblPaymentSub: "Instant 80G tax receipt ready after confirmation.",
    btnSubmitDonate: "Donate & Get Receipt",
    adoptHeader: "Cattle Adoption & Surrender Desk",
    adoptSub: "Adopt oxen for farming or shelter helpless non-milking cattle.",
    adoptFormTitle: "Adopt Cattle (For Care/Farming)",
    adoptFormDesc: "Apply for purebred oxen or cows for sustainable farming.",
    lblSelectAnimal: "Select Animal *",
    lblFarmDetails: "Address & Farm Details *",
    btnSubmitAdopt: "Submit Request",
    surrenderFormTitle: "Surrender Cattle to Ashram",
    surrenderFormDesc: "Apply to shelter sick, old, or stray cows.",
    lblOwnerName: "Applicant Name *",
    lblAnimalAge: "Animal Type & Age *",
    lblReasonHealth: "Reason & Health State *",
    btnSubmitSurrender: "Register Surrender",
    adminHeading: "Gaushala Management Dashboard",
    adminSub: "Real-time dispatch, ledger, rescue requests, and cattle records.",
    btnResetData: "Reset Data",
    kpiDonations: "Total Donations",
    kpiOrders: "Product Orders",
    kpiUrgent: "Urgent Cremation",
    kpiCattle: "Total Cattle",
    tabAdminOrders: "Orders & Urgent",
    tabAdminDonations: "Donation Ledger",
    tabAdminRequests: "Adoption & Surrender",
    tabAdminCattle: "Cattle Registry",
    tabAdminInventory: "Inventory Stock",
    thOrderId: "Order ID & Time",
    thCustomer: "Customer & Address",
    thType: "Type",
    thDetails: "Details",
    thAmount: "Amount",
    thStatus: "Status",
    thAction: "Action",
    thReceiptNo: "Receipt No.",
    thDonor: "Donor Name",
    thCause: "Purpose",
    thDate: "Date",
    thPrintReceipt: "Print",
    btnExportCsv: "Download CSV",
    thApplicant: "Applicant & Phone",
    thAnimal: "Animal Type",
    thDecision: "Action",
    cattleHeading: "Shelter Cattle Registry",
    btnAddNewCattle: "Register Cattle",
    thTagId: "Tag ID",
    thName: "Name",
    thBreed: "Breed",
    thAgeType: "Age / Type",
    thHealth: "Health Status",
    thAdoptStatus: "Adopted?",
    thProduct: "Product Name",
    thCategory: "Category",
    thRate: "Rate (₹)",
    thStockQty: "Stock Qty",
    thUpdateStock: "Update Stock",
    modalUrgentTitle: "Cremation Cowdung Cakes - Urgent",
    lblContactPerson: "Contact Person *",
    lblActivePhone: "Mobile Number *",
    lblQuantity: "Select Quantity *",
    lblCremationAddress: "Cremation Ground / Address *",
    btnSendUrgent: "Dispatch Now",
    cartTitle: "Shopping Cart",
    lblGrandTotal: "Total Amount:",
    btnConfirmOrder: "Confirm Order",
    receiptTrustName: "Shree Surbhi Gau-Ashram Trust",
    receiptTitle: "Official Donation Receipt",
    lblReceivedAmount: "Amount Received:",
    btnPrintPdf: "Print / Save PDF",
    btnClose: "Close",
    modalAddCattleTitle: "Register New Cattle",
    lblTagId: "Tag ID *",
    lblAnimalName: "Name / Identification *",
    btnSaveCattle: "Save to Registry"
  }
};

const INITIAL_PRODUCTS = [
  {
    id: "P1",
    name_mr: "शुद्ध देशी गीर गायीचे बिलोना तूप",
    name_en: "Pure Gir Cow Vedic Bilona Ghee",
    category: "Milk_Ghee",
    price: 1800,
    unit_mr: "१ लिटर (काचेची बरणी)",
    unit_en: "1 Litre Glass Jar",
    desc_mr: "पारंपारिक वैदिक लाकडी घुसळणी पद्धतीने बनवलेले १००% शुद्ध व दाणेदार A2 तूप.",
    desc_en: "100% pure Vedic churned golden A2 clarified butter from Gir cows.",
    stock: 25,
    icon: "fa-bottle-droplet"
  },
  {
    id: "P2",
    name_mr: "ताजे शुद्ध A2 देशी गायीचे दूध",
    name_en: "Fresh Pure A2 Desi Cow Milk",
    category: "Milk_Ghee",
    price: 80,
    unit_mr: "१ लिटर पाऊच",
    unit_en: "1 Litre Pouch",
    desc_mr: "कोणतीही भेसळ नसलेले नैसर्गिक व पोषक ताजे दूध.",
    desc_en: "Unpasteurized, antibiotic-free nutritious fresh farm milk.",
    stock: 50,
    icon: "fa-glass-water"
  },
  {
    id: "P3",
    name_mr: "होम-हवन व अंत्यविधी शेणाच्या गोवऱ्या",
    name_en: "Vedic Ritual Cowdung Cakes (Gaurya)",
    category: "Gaurya_Ritual",
    price: 250,
    unit_mr: "५० गोवऱ्यांचे पोते",
    unit_en: "Bag of 50 Pieces",
    desc_mr: "देशी गायीच्या शेणापासून उन्हात वाळवलेल्या पवित्र व धूररहित गोवऱ्या.",
    desc_en: "Sun-dried smokeless holy cakes for havan, puja, and funeral rites.",
    stock: 120,
    icon: "fa-circle-dot"
  },
  {
    id: "P4",
    name_mr: "नैसर्गिक पंचगव्य धूपबत्ती",
    name_en: "Organic Panchagavya Dhoop Batti",
    category: "Gaurya_Ritual",
    price: 120,
    unit_mr: "१ पॅकेट (३० कांड्या)",
    unit_en: "Pack of 30 Sticks",
    desc_mr: "शेण, भीमसेनी कापूर आणि आयुर्वेदिक वनस्पतींनीयुक्त सुगंधी अगरबत्ती.",
    desc_en: "Purifying herbal incense sticks made with camphor and cow ghee.",
    stock: 80,
    icon: "fa-fire"
  },
  {
    id: "P5",
    name_mr: "शुद्ध गोमूत्र अर्क (औषधी)",
    name_en: "Distilled Pure Gomutra Ark",
    category: "Ark_Fertilizer",
    price: 150,
    unit_mr: "५०० मि.ली. बाटली",
    unit_en: "500 ml Bottle",
    desc_mr: "रोगप्रतिकारशक्ती आणि पोटाच्या तक्रारींवर उपयुक्त वैदिक पद्धतीने अर्क काढलेले.",
    desc_en: "Therapeutic herbal cow urine distillate for holistic vitality.",
    stock: 40,
    icon: "fa-flask"
  },
  {
    id: "P6",
    name_mr: "सेंद्रिय शेणखत व गांडूळ खत (Organic)",
    name_en: "Organic Compost & Vermicompost",
    category: "Ark_Fertilizer",
    price: 350,
    unit_mr: "२५ किलो बॅग",
    unit_en: "25 Kg Sack",
    desc_mr: "शेती, भाजीपाला आणि घरगुती रोपांसाठी १००% सेंद्रिय व ताकदवान खत.",
    desc_en: "Nutrient-rich decomposed organic manure for crops and gardens.",
    stock: 65,
    icon: "fa-seedling"
  }
];

const INITIAL_CATTLE = [
  { tag: "GAU-101", name: "गौरी", breed: "गीर (Gir)", age: "५ वर्षे", health: "उत्तम (Lactating)", adopted: "नाही" },
  { tag: "GAU-102", name: "नंदी", breed: "खिल्लारी (Khillari)", age: "४ वर्षे", health: "सशक्त व निरोगी", adopted: "होय (Amol Patil)" },
  { tag: "GAU-103", name: "शारदा", breed: "साहिवाल (Sahiwal)", age: "११ वर्षे", health: "उपचाराधीन", adopted: "नाही" },
  { tag: "GAU-104", name: "गोपाळ", breed: "गीर (Gir)", age: "८ महिने", health: "खेळकर वासरू", adopted: "नाही" }
];

const INITIAL_ORDERS = [
  {
    orderId: "URG-8801",
    customerName: "Rajesh Kulkarni",
    phone: "9822011223",
    address: "Vaikunth Crematorium, Pune",
    type: "तातडीची अंत्यविधी / Urgent",
    details: "2 Bags (200 Cowdung Cakes) - ₹ 950",
    amount: 950,
    status: "Delivered",
    date: "12/09/2026, 10:15 am",
    isUrgent: true
  },
  {
    orderId: "ORD-5402",
    customerName: "Pravin Salunkhe",
    phone: "9422033445",
    address: "Kothrud, Pune",
    type: "उत्पादने / Products",
    details: "1x Pure Gir Cow Vedic Bilona Ghee (1 L)",
    amount: 1800,
    status: "Packed",
    date: "12/09/2026, 12:40 pm",
    isUrgent: false
  }
];

const INITIAL_DONATIONS = [
  {
    receiptNo: "REC-2026-101",
    name: "Sachin Tanaji Sawant",
    phone: "9850123456",
    cause: "गाय दत्तक / Adoption (1 Month)",
    amount: 3000,
    address: "Satara",
    date: "11/09/2026"
  },
  {
    receiptNo: "REC-2026-102",
    name: "Sunita Joshi",
    phone: "9765432109",
    cause: "चारा देणगी / Fodder (1 Day)",
    amount: 500,
    address: "Pune",
    date: "12/09/2026"
  }
];

const INITIAL_REQUESTS = [
  {
    id: "REQ-701",
    date: "10/09/2026",
    type: "दत्तक मागणी (Adopt)",
    name: "Vikas Jagtap",
    phone: "9823124578",
    cattleType: "शेतीसाठी बैल (Khillari Ox)",
    details: "Requires pair for organic plowing on 5 acres.",
    status: "Approved"
  },
  {
    id: "REQ-702",
    date: "12/09/2026",
    type: "समर्पण (Surrender)",
    name: "Dnyaneshwar Shinde",
    phone: "9158764321",
    cattleType: "वृद्ध गाय (14 yrs)",
    details: "Owner unable to maintain due to fodder scarcity.",
    status: "Pending"
  }
];

// Persistent LocalStorage
const Storage = {
  getLanguage: () => localStorage.getItem("gaushala_lang") || "mr",
  setLanguage: (lang) => localStorage.setItem("gaushala_lang", lang),

  getProducts: () => {
    const data = JSON.parse(localStorage.getItem("gaushala_products_v3"));
    return (data && Array.isArray(data) && data.length > 0) ? data : INITIAL_PRODUCTS;
  },
  setProducts: (data) => localStorage.setItem("gaushala_products_v3", JSON.stringify(data)),

  getOrders: () => JSON.parse(localStorage.getItem("gaushala_orders_v3")) || INITIAL_ORDERS,
  setOrders: (data) => localStorage.setItem("gaushala_orders_v3", JSON.stringify(data)),

  getDonations: () => JSON.parse(localStorage.getItem("gaushala_donations_v3")) || INITIAL_DONATIONS,
  setDonations: (data) => localStorage.setItem("gaushala_donations_v3", JSON.stringify(data)),

  getCattle: () => JSON.parse(localStorage.getItem("gaushala_cattle_v3")) || INITIAL_CATTLE,
  setCattle: (data) => localStorage.setItem("gaushala_cattle_v3", JSON.stringify(data)),

  getRequests: () => JSON.parse(localStorage.getItem("gaushala_requests_v3")) || INITIAL_REQUESTS,
  setRequests: (data) => localStorage.setItem("gaushala_requests_v3", JSON.stringify(data)),

  getCart: () => JSON.parse(localStorage.getItem("gaushala_cart_v3")) || [],
  setCart: (data) => localStorage.setItem("gaushala_cart_v3", JSON.stringify(data))
};

function initStorage() {
  if (!localStorage.getItem("gaushala_products_v3")) Storage.setProducts(INITIAL_PRODUCTS);
  if (!localStorage.getItem("gaushala_orders_v3")) Storage.setOrders(INITIAL_ORDERS);
  if (!localStorage.getItem("gaushala_donations_v3")) Storage.setDonations(INITIAL_DONATIONS);
  if (!localStorage.getItem("gaushala_cattle_v3")) Storage.setCattle(INITIAL_CATTLE);
  if (!localStorage.getItem("gaushala_requests_v3")) Storage.setRequests(INITIAL_REQUESTS);
}

let currentLang = Storage.getLanguage();
let isCurrentAdmin = false;
let currentProductFilter = "All";

// Toggle between Customer Portal and Admin Dashboard
function togglePortalView() {
  isCurrentAdmin = !isCurrentAdmin;
  const custPortal = document.getElementById("customerPortal");
  const admPortal = document.getElementById("adminPortal");
  const custNav = document.getElementById("customerNavLinks");
  const toggleBtn = document.getElementById("btnTogglePortal");
  const toggleText = document.getElementById("portalToggleText");
  const dict = I18N[currentLang];

  if (isCurrentAdmin) {
    custPortal.classList.add("hidden");
    admPortal.classList.remove("hidden");
    custNav.classList.add("hidden");
    toggleBtn.classList.replace("bg-amber-600", "bg-rose-600");
    toggleText.innerText = dict.openCustomer;
    renderAdminDashboard();
  } else {
    custPortal.classList.remove("hidden");
    admPortal.classList.add("hidden");
    custNav.classList.remove("hidden");
    toggleBtn.classList.replace("bg-rose-600", "bg-amber-600");
    toggleText.innerText = dict.openAdmin;
  }
}

// Bilingual Toggle
function toggleLanguage() {
  currentLang = currentLang === "mr" ? "en" : "mr";
  Storage.setLanguage(currentLang);
  applyTranslations();
  renderAll();
}

function applyTranslations() {
  const dict = I18N[currentLang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  const langText = document.getElementById("langDisplayText");
  if (langText) langText.innerText = dict.langBtnText;

  const toggleText = document.getElementById("portalToggleText");
  if (toggleText) {
    toggleText.innerText = isCurrentAdmin ? dict.openCustomer : dict.openAdmin;
  }
}

// Customer Navigation
function switchCustomerTab(tabName) {
  if (isCurrentAdmin) togglePortalView();

  ["home", "store", "donate", "adopt"].forEach(t => {
    const el = document.getElementById(`tab${t.charAt(0).toUpperCase() + t.slice(1)}`);
    if (el) el.classList.add("hidden");
  });
  const target = document.getElementById(`tab${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`);
  if (target) target.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Admin Subtabs
function switchAdminTab(subTab) {
  ["orders", "donations", "requests", "cattle", "inventory"].forEach(v => {
    const el = document.getElementById(`adminTab${v.charAt(0).toUpperCase() + v.slice(1)}`);
    const btn = document.getElementById(`btnAdminTab${v.charAt(0).toUpperCase() + v.slice(1)}`);
    if (el) el.classList.add("hidden");
    if (btn) {
      btn.classList.remove("bg-amber-700", "text-white", "active-admin-tab");
      btn.classList.add("bg-white", "text-slate-700");
    }
  });

  const activeView = document.getElementById(`adminTab${subTab.charAt(0).toUpperCase() + subTab.slice(1)}`);
  const activeBtn = document.getElementById(`btnAdminTab${subTab.charAt(0).toUpperCase() + subTab.slice(1)}`);
  if (activeView) activeView.classList.remove("hidden");
  if (activeBtn) {
    activeBtn.classList.remove("bg-white", "text-slate-700");
    activeBtn.classList.add("bg-amber-700", "text-white", "active-admin-tab");
  }
}

// Render Products
function renderProducts() {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;
  const products = Storage.getProducts();
  const dict = I18N[currentLang];
  const filtered = currentProductFilter === "All" ? products : products.filter(p => p.category === currentProductFilter);

  grid.innerHTML = filtered.map(p => {
    const name = (currentLang === 'mr' ? p.name_mr : p.name_en) || p.name || "Gau-Product";
    const unit = (currentLang === 'mr' ? p.unit_mr : p.unit_en) || p.unit || "१ नग";
    const desc = (currentLang === 'mr' ? p.desc_mr : p.desc_en) || p.desc || "सेंद्रिय उत्पादन";

    return `
      <div class="bg-white rounded-xl border border-amber-200 p-4 shadow-sm hover:shadow-md transition flex flex-col justify-between">
        <div>
          <div class="h-32 bg-amber-50 rounded-lg flex items-center justify-center text-amber-800 text-3xl mb-3 border border-amber-100">
            <i class="fa-solid ${p.icon || 'fa-cow'}"></i>
          </div>
          <h4 class="font-bold text-sm text-slate-900 leading-snug">${name}</h4>
          <p class="text-xs text-amber-700 font-semibold mt-0.5">${unit}</p>
          <p class="text-xs text-slate-600 mt-1 line-clamp-2">${desc}</p>
        </div>

        <div class="mt-4 pt-3 border-t border-amber-100 flex items-center justify-between">
          <div>
            <span class="text-base font-extrabold text-amber-900">₹ ${p.price}</span>
            <p class="text-[10px] text-slate-500">${p.stock > 0 ? `${dict.stockLeft}: ${p.stock}` : `<span class="text-rose-600 font-bold">${dict.outOfStock}</span>`}</p>
          </div>
          <button onclick="addToCart('${p.id}')" ${p.stock <= 0 ? 'disabled' : ''} class="bg-amber-700 hover:bg-amber-800 disabled:bg-slate-300 text-white font-bold px-3 py-1.5 rounded-lg text-xs transition flex items-center gap-1">
            <i class="fa-solid fa-cart-plus"></i> ${dict.btnAddToCart}
          </button>
        </div>
      </div>
    `;
  }).join("");
}

function filterProducts(cat) {
  currentProductFilter = cat;
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.remove("active-filter", "bg-amber-700", "text-white");
    btn.classList.add("bg-white", "text-slate-700");
  });
  if (event && event.target) {
    event.target.classList.add("active-filter", "bg-amber-700", "text-white");
  }
  renderProducts();
}

// Cart System
function addToCart(productId) {
  const prod = Storage.getProducts().find(p => p.id === productId);
  if (!prod) return;

  let cart = Storage.getCart();
  const existing = cart.find(i => i.id === productId);

  if (existing) {
    if (existing.qty < prod.stock) {
      existing.qty++;
    } else {
      alert(currentLang === 'mr' ? "उपलब्ध साठा संपला आहे!" : "Out of stock limit reached!");
      return;
    }
  } else {
    cart.push({
      id: prod.id,
      name_mr: prod.name_mr || prod.name,
      name_en: prod.name_en || prod.name,
      price: prod.price,
      qty: 1
    });
  }

  Storage.setCart(cart);
  updateCartBadge();
  alert(currentLang === 'mr' ? "खरेदी सूचीत जोडले!" : "Added to cart!");
}

function updateCartBadge() {
  const cart = Storage.getCart();
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById("cartCountBadge");
  if (badge) badge.innerText = count;
}

function openCartModal() {
  renderCartItems();
  document.getElementById("cartModal").classList.remove("hidden");
}

function closeCartModal() {
  document.getElementById("cartModal").classList.add("hidden");
}

function renderCartItems() {
  const container = document.getElementById("cartItemsContainer");
  const cart = Storage.getCart();
  const grandTotalEl = document.getElementById("cartGrandTotal");

  if (cart.length === 0) {
    container.innerHTML = `<div class="text-center py-6 text-slate-400"><i class="fa-solid fa-basket-shopping text-2xl mb-1"></i><p>${currentLang === 'mr' ? 'खरेदी सूची रिकामी आहे.' : 'Your cart is empty.'}</p></div>`;
    grandTotalEl.innerText = "₹ 0";
    return;
  }

  let total = 0;
  container.innerHTML = cart.map((item, idx) => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;
    const name = (currentLang === 'mr' ? item.name_mr : item.name_en) || "Product";
    return `
      <div class="flex justify-between items-center py-2">
        <div>
          <p class="font-bold text-slate-800">${name}</p>
          <p class="text-xs text-slate-500">₹ ${item.price} × ${item.qty}</p>
        </div>
        <div class="flex items-center gap-2">
          <span class="font-bold text-amber-900">₹ ${itemTotal}</span>
          <button onclick="changeCartQty(${idx}, -1)" class="w-5 h-5 bg-slate-200 rounded text-slate-700 flex items-center justify-center font-bold hover:bg-slate-300">-</button>
          <span class="text-xs font-semibold">${item.qty}</span>
          <button onclick="changeCartQty(${idx}, 1)" class="w-5 h-5 bg-slate-200 rounded text-slate-700 flex items-center justify-center font-bold hover:bg-slate-300">+</button>
        </div>
      </div>
    `;
  }).join("");

  grandTotalEl.innerText = `₹ ${total}`;
}

function changeCartQty(index, delta) {
  let cart = Storage.getCart();
  cart[index].qty += delta;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  Storage.setCart(cart);
  updateCartBadge();
  renderCartItems();
}

function validatePhone(phone) {
  if (phone.length !== 10 || !/^\d{10}$/.test(phone)) {
    alert("कृपया अचूक १० अंकी मोबाईल नंबर टाका!");
    return false;
  }
  return true;
}

function handleCartCheckout(e) {
  e.preventDefault();
  const cart = Storage.getCart();
  if (cart.length === 0) return;

  const phone = document.getElementById("custPhone").value;
  if (!validatePhone(phone)) return;

  const totalAmount = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
  const details = cart.map(i => `${i.qty}x ${(currentLang === 'mr' ? i.name_mr : i.name_en)}`).join(", ");

  const newOrder = {
    orderId: "ORD-" + Math.floor(1000 + Math.random() * 9000),
    customerName: document.getElementById("custName").value,
    phone: phone,
    address: document.getElementById("custAddress").value,
    type: "उत्पादने / Products",
    details: details,
    amount: totalAmount,
    status: "Pending",
    date: new Date().toLocaleString(),
    isUrgent: false
  };

  const orders = Storage.getOrders();
  orders.unshift(newOrder);
  Storage.setOrders(orders);

  // Update Stock
  const products = Storage.getProducts();
  cart.forEach(cItem => {
    const prod = products.find(p => p.id === cItem.id);
    if (prod) prod.stock = Math.max(0, prod.stock - cItem.qty);
  });
  Storage.setProducts(products);

  Storage.setCart([]);
  updateCartBadge();
  closeCartModal();
  document.getElementById("checkoutForm").reset();

  alert(currentLang === 'mr' ? `ऑर्डर #${newOrder.orderId} यशस्वीपणे नोंदवली!` : `Order #${newOrder.orderId} placed successfully!`);
  renderAll();
}

// Urgent Funeral Modal
function openUrgentModal() { document.getElementById("urgentModal").classList.remove("hidden"); }
function closeUrgentModal() { document.getElementById("urgentModal").classList.add("hidden"); }

function handleUrgentOrderSubmit(e) {
  e.preventDefault();
  const phone = document.getElementById("urgPhone").value;
  if (!validatePhone(phone)) return;

  const qtyStr = document.getElementById("urgQuantity").value;
  let amount = 500;
  if (qtyStr.includes("९५०") || qtyStr.includes("950")) amount = 950;
  if (qtyStr.includes("१,४००") || qtyStr.includes("1400")) amount = 1400;

  const urgentOrder = {
    orderId: "URG-" + Math.floor(1000 + Math.random() * 9000),
    customerName: document.getElementById("urgName").value,
    phone: phone,
    address: document.getElementById("urgAddress").value,
    type: "तातडीची अंत्यविधी / Urgent",
    details: qtyStr,
    amount: amount,
    status: "Dispatching",
    date: new Date().toLocaleString(),
    isUrgent: true
  };

  const orders = Storage.getOrders();
  orders.unshift(urgentOrder);
  Storage.setOrders(orders);

  closeUrgentModal();
  document.getElementById("urgentForm").reset();
  alert(currentLang === 'mr' ? "तातडीची मागणी नोंदवली आहे!" : "Urgent cremation request registered!");
  renderAll();
}

// Donations
function handleDonationSubmit(e) {
  e.preventDefault();
  const causeRadio = document.querySelector('input[name="cause"]:checked');
  const cause = causeRadio ? causeRadio.value : "गोसेवा निधी";
  const amount = parseInt(document.getElementById("donorAmount").value, 10);
  const name = document.getElementById("donorName").value;
  const phone = document.getElementById("donorPhone").value;
  if (!validatePhone(phone)) return;

  const newDonation = {
    receiptNo: "REC-2026-" + Math.floor(100 + Math.random() * 900),
    name: name,
    phone: phone,
    cause: cause,
    amount: amount,
    date: new Date().toLocaleDateString()
  };

  const donations = Storage.getDonations();
  donations.unshift(newDonation);
  Storage.setDonations(donations);

  document.getElementById("donationForm").reset();
  showReceiptModal(newDonation);
  renderAll();
}

function showReceiptModal(d) {
  document.getElementById("recNo").innerText = d.receiptNo;
  document.getElementById("recDate").innerText = d.date;
  document.getElementById("recName").innerText = d.name;
  document.getElementById("recPhone").innerText = d.phone;
  document.getElementById("recCause").innerText = d.cause;
  document.getElementById("recAmount").innerText = `₹ ${d.amount.toLocaleString()} /-`;
  document.getElementById("receiptModal").classList.remove("hidden");
}

function closeReceiptModal() { document.getElementById("receiptModal").classList.add("hidden"); }

// Cattle Requests
function handleCattleRequest(e, typeKey) {
  e.preventDefault();
  const form = e.target;
  const type = typeKey === 'Adopt' ? "दत्तक मागणी (Adopt)" : "समर्पण (Surrender)";
  const phone = form.phone.value;
  if (!validatePhone(phone)) return;

  const newReq = {
    id: "REQ-" + Math.floor(100 + Math.random() * 900),
    date: new Date().toLocaleDateString(),
    type: type,
    name: form.name.value,
    phone: phone,
    cattleType: form.cattleType.value,
    details: form.details.value,
    status: "Pending"
  };

  const requests = Storage.getRequests();
  requests.unshift(newReq);
  Storage.setRequests(requests);

  form.reset();
  alert(currentLang === 'mr' ? "अर्ज सादर केला आहे!" : "Application submitted successfully!");
  renderAll();
}

// Admin Dashboard Functions
function renderAdminDashboard() {
  const orders = Storage.getOrders();
  const donations = Storage.getDonations();
  const cattle = Storage.getCattle();
  const requests = Storage.getRequests();
  const products = Storage.getProducts();

  document.getElementById("statTotalDonations").innerText = `₹ ${donations.reduce((s, d) => s + (d.amount || 0), 0).toLocaleString()}`;
  document.getElementById("statTotalOrders").innerText = orders.length;
  document.getElementById("statUrgentOrders").innerText = orders.filter(o => o.isUrgent && o.status !== "Delivered").length;
  document.getElementById("statTotalCattle").innerText = cattle.length;

  renderAdminOrdersTable(orders);
  renderAdminDonationsTable(donations);
  renderAdminRequestsTable(requests);
  renderAdminCattleTable(cattle);
  renderAdminInventoryTable(products);
}

function renderAdminOrdersTable(orders) {
  const tbody = document.getElementById("adminOrdersTableBody");
  if (!tbody) return;
  tbody.innerHTML = orders.map((o, idx) => `
    <tr class="${o.isUrgent ? 'bg-rose-50/70 font-semibold' : 'hover:bg-amber-50/40'}">
      <td class="p-2.5"><strong>${o.orderId}</strong><div class="text-[11px] text-slate-500">${o.date}</div></td>
      <td class="p-2.5"><div>${o.customerName}</div><div class="text-[11px] text-slate-500">${o.phone} | ${o.address}</div></td>
      <td class="p-2.5">${o.isUrgent ? '<span class="bg-rose-600 text-white px-2 py-0.5 rounded text-[11px] font-bold">Urgent</span>' : 'Regular'}</td>
      <td class="p-2.5 max-w-[180px] truncate">${o.details}</td>
      <td class="p-2.5 font-bold text-amber-900">₹ ${o.amount}</td>
      <td class="p-2.5"><span class="px-2 py-0.5 rounded text-[11px] font-bold ${o.status === 'Delivered' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}">${o.status}</span></td>
      <td class="p-2.5 text-right whitespace-nowrap">
        <button onclick="updateOrderStatus(${idx}, 'Packed')" class="bg-slate-100 px-2 py-1 rounded text-xs hover:bg-slate-200">Pack</button>
        <button onclick="updateOrderStatus(${idx}, 'Delivered')" class="bg-emerald-600 text-white px-2 py-1 rounded text-xs hover:bg-emerald-700">Complete</button>
      </td>
    </tr>
  `).join("");
}

function updateOrderStatus(idx, status) {
  const orders = Storage.getOrders();
  if (orders[idx]) {
    orders[idx].status = status;
    Storage.setOrders(orders);
    renderAdminDashboard();
  }
}

function renderAdminDonationsTable(donations) {
  const tbody = document.getElementById("adminDonationsTableBody");
  if (!tbody) return;
  tbody.innerHTML = donations.map((d, idx) => `
    <tr class="hover:bg-amber-50/40">
      <td class="p-2.5 font-bold">${d.receiptNo}</td>
      <td class="p-2.5">${d.name}</td>
      <td class="p-2.5">${d.phone}</td>
      <td class="p-2.5 text-amber-900">${d.cause}</td>
      <td class="p-2.5 font-bold text-emerald-700">₹ ${d.amount.toLocaleString()}</td>
      <td class="p-2.5 text-slate-500">${d.date}</td>
      <td class="p-2.5 text-right">
        <button onclick="reprintDonationByIndex(${idx})" class="bg-amber-100 text-amber-900 px-2 py-1 rounded text-xs font-semibold hover:bg-amber-200">Print</button>
      </td>
    </tr>
  `).join("");
}

function reprintDonationByIndex(idx) {
  const d = Storage.getDonations()[idx];
  if (d) showReceiptModal(d);
}

function renderAdminRequestsTable(requests) {
  const tbody = document.getElementById("adminRequestsTableBody");
  if (!tbody) return;
  tbody.innerHTML = requests.map((r, idx) => `
    <tr class="hover:bg-amber-50/40">
      <td class="p-2.5 text-slate-500">${r.date}</td>
      <td class="p-2.5 font-semibold">${r.type}</td>
      <td class="p-2.5">${r.name} (${r.phone})</td>
      <td class="p-2.5">${r.cattleType}</td>
      <td class="p-2.5 max-w-[180px] truncate">${r.details}</td>
      <td class="p-2.5"><span class="px-2 py-0.5 rounded text-[11px] font-bold ${r.status === 'Approved' ? 'bg-emerald-100 text-emerald-800' : (r.status === 'Rejected' ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-800')}">${r.status}</span></td>
      <td class="p-2.5 text-right whitespace-nowrap">
        <button onclick="updateRequestStatus(${idx}, 'Approved')" class="bg-emerald-600 text-white px-2 py-1 rounded text-xs">Approve</button>
        <button onclick="updateRequestStatus(${idx}, 'Rejected')" class="bg-rose-600 text-white px-2 py-1 rounded text-xs">Reject</button>
      </td>
    </tr>
  `).join("");
}

function updateRequestStatus(idx, st) {
  const requests = Storage.getRequests();
  if (requests[idx]) {
    requests[idx].status = st;
    Storage.setRequests(requests);
    renderAdminDashboard();
  }
}

function renderAdminCattleTable(cattle) {
  const tbody = document.getElementById("adminCattleTableBody");
  if (!tbody) return;
  tbody.innerHTML = cattle.map((c, idx) => `
    <tr class="hover:bg-amber-50/40">
      <td class="p-2.5 font-bold text-amber-900">${c.tag}</td>
      <td class="p-2.5 font-bold">${c.name}</td>
      <td class="p-2.5">${c.breed}</td>
      <td class="p-2.5">${c.age}</td>
      <td class="p-2.5">${c.health}</td>
      <td class="p-2.5"><span class="px-2 py-0.5 rounded text-[11px] ${c.adopted.includes('होय') ? 'bg-blue-100 text-blue-800' : 'bg-slate-100'}">${c.adopted}</span></td>
      <td class="p-2.5 text-right">
        <button onclick="deleteCattle(${idx})" class="text-rose-600 hover:text-rose-800 text-xs px-2"><i class="fa-solid fa-trash"></i></button>
      </td>
    </tr>
  `).join("");
}

function openAddCattleModal() { document.getElementById("cattleModal").classList.remove("hidden"); }
function closeCattleModal() { document.getElementById("cattleModal").classList.add("hidden"); }

function handleAddCattleSubmit(e) {
  e.preventDefault();
  const cattle = Storage.getCattle();
  cattle.push({
    tag: document.getElementById("catTag").value,
    name: document.getElementById("catName").value,
    breed: document.getElementById("catBreed").value,
    age: document.getElementById("catAge").value,
    health: document.getElementById("catHealth").value,
    adopted: "नाही"
  });
  Storage.setCattle(cattle);
  closeCattleModal();
  document.getElementById("addCattleForm").reset();
  renderAdminDashboard();
}

function deleteCattle(idx) {
  if (confirm("Delete this entry?")) {
    const cattle = Storage.getCattle();
    cattle.splice(idx, 1);
    Storage.setCattle(cattle);
    renderAdminDashboard();
  }
}

function renderAdminInventoryTable(products) {
  const tbody = document.getElementById("adminInventoryTableBody");
  if (!tbody) return;

  tbody.innerHTML = products.map((p, idx) => {
    const name = (currentLang === 'mr' ? p.name_mr : p.name_en) || p.name;
    const unit = (currentLang === 'mr' ? p.unit_mr : p.unit_en) || p.unit || "";

    return `
      <tr class="hover:bg-amber-50/40">
        <td class="p-2.5">
          <div class="font-bold text-slate-900">${name}</div>
          <div class="text-[11px] text-slate-500">${unit}</div>
        </td>
        <td class="p-2.5 text-slate-600">${p.category}</td>
        <td class="p-2.5 font-bold text-amber-900">₹ ${p.price}</td>
        <td class="p-2.5">
          <div class="flex items-center gap-1.5">
            <input type="number" min="0" id="manualStock_${idx}" value="${p.stock}"
              class="w-20 border-2 border-amber-300 focus:border-amber-600 rounded px-2 py-1 text-xs outline-none font-bold text-center ${p.stock < 10 ? 'text-rose-600 bg-rose-50' : 'text-slate-800'}">
            <span class="text-[11px] text-slate-500 font-medium">नग</span>
          </div>
        </td>
        <td class="p-2.5 text-right space-x-1.5 whitespace-nowrap">
          <button onclick="saveManualStock(${idx})" class="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded text-xs font-bold transition shadow-sm">
            <i class="fa-solid fa-floppy-disk mr-1"></i> सेव्ह
          </button>
          <button onclick="deleteProduct(${idx})" class="text-rose-600 hover:text-rose-800 text-xs px-2 py-1" title="उत्पादन हटवा">
            <i class="fa-solid fa-trash"></i>
          </button>
        </td>
      </tr>
    `;
  }).join("");
}

function saveManualStock(idx) {
  const stockInput = document.getElementById(`manualStock_${idx}`);
  const newStockVal = parseInt(stockInput.value, 10);

  if (isNaN(newStockVal) || newStockVal < 0) {
    alert(currentLang === 'mr' ? "कृपया योग्य संख्या प्रविष्ट करा!" : "Please enter a valid stock quantity!");
    return;
  }

  const products = Storage.getProducts();
  if (products[idx]) {
    products[idx].stock = newStockVal;
    Storage.setProducts(products);
    renderProducts();
    renderAdminDashboard();
    alert(currentLang === 'mr' ? "साठा यशस्वीरित्या अपडेट झाला!" : "Stock quantity updated successfully!");
  }
}

function openAddProductModal() {
  document.getElementById("addProductModal").classList.remove("hidden");
}

function closeAddProductModal() {
  document.getElementById("addProductModal").classList.add("hidden");
}

function handleAddNewProduct(e) {
  e.preventDefault();

  const nameMr = document.getElementById("newProdNameMr").value.trim();
  const nameEn = document.getElementById("newProdNameEn").value.trim();
  const category = document.getElementById("newProdCategory").value;
  const price = parseInt(document.getElementById("newProdPrice").value, 10);
  const unit = document.getElementById("newProdUnit").value.trim();
  const stock = parseInt(document.getElementById("newProdStock").value, 10);
  const desc = document.getElementById("newProdDesc").value.trim();

  let icon = "fa-box";
  if (category === "Milk_Ghee") icon = "fa-bottle-droplet";
  else if (category === "Gaurya_Ritual") icon = "fa-circle-dot";
  else if (category === "Ark_Fertilizer") icon = "fa-seedling";

  const newProduct = {
    id: "PROD-" + Date.now(),
    name_mr: nameMr,
    name_en: nameEn,
    category,
    price,
    unit_mr: unit,
    unit_en: unit,
    desc_mr: desc,
    desc_en: desc,
    stock,
    icon
  };

  const products = Storage.getProducts();
  products.unshift(newProduct);
  Storage.setProducts(products);

  document.getElementById("addProductForm").reset();
  closeAddProductModal();
  renderProducts();
  renderAdminDashboard();
  alert(currentLang === 'mr' ? `नवीन उत्पादन '${nameMr}' स्टोअरमध्ये समाविष्ट झाले!` : `Product '${nameEn}' added successfully!`);
}

function deleteProduct(idx) {
  const confirmMsg = currentLang === 'mr' ? "तुम्हाला खात्री आहे का हे उत्पादन हटवायचे आहे?" : "Are you sure you want to delete this product?";
  if (confirm(confirmMsg)) {
    const products = Storage.getProducts();
    products.splice(idx, 1);
    Storage.setProducts(products);
    renderProducts();
    renderAdminDashboard();
  }
}

function resetMockData() {
  if (confirm("Reset all data to defaults?")) {
    localStorage.removeItem("gaushala_products_v3");
    localStorage.removeItem("gaushala_orders_v3");
    localStorage.removeItem("gaushala_donations_v3");
    localStorage.removeItem("gaushala_cattle_v3");
    localStorage.removeItem("gaushala_requests_v3");
    localStorage.removeItem("gaushala_cart_v3");
    initStorage();
    renderAll();
    alert("Data reset complete!");
  }
}

function exportDonationsCSV() {
  const donations = Storage.getDonations();
  let csv = "Receipt,Name,Phone,Cause,Amount,Date\n";
  donations.forEach(d => {
    csv += `"${d.receiptNo}","${d.name}","${d.phone}","${d.cause}","${d.amount}","${d.date}"\n`;
  });
  const blob = new Blob(["\uFEFF" + csv], { type: 'text/csv;charset=utf-8;' });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `Donations_${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
}

function renderAll() {
  applyTranslations();
  renderProducts();
  updateCartBadge();
  if (isCurrentAdmin) {
    renderAdminDashboard();
  }
}

// Strict input validation helpers
function enforceNumericPhone(input) {
  input.value = input.value.replace(/[^0-9]/g, '').slice(0, 10);
}

function enforceOnlyLetters(input) {
  input.value = input.value.replace(/[0-9]/g, '');
}

function enforcePositiveNumber(input) {
  input.value = input.value.replace(/[^0-9]/g, '');
  if (input.value.startsWith('0') && input.value.length > 1) {
    input.value = input.value.replace(/^0+/, '');
  }
}

function setupInputValidation() {
  document.querySelectorAll('#donorPhone, #urgPhone, #custPhone, #adoptForm input[name="phone"], #surrenderForm input[name="phone"]').forEach(input => {
    input.addEventListener('input', () => enforceNumericPhone(input));
  });

  document.querySelectorAll('#donorName, #adoptForm input[name="name"], #surrenderForm input[name="name"], #urgName, #custName, #catName, #catHealth').forEach(input => {
    input.addEventListener('input', () => enforceOnlyLetters(input));
  });

  document.querySelectorAll('#donorAmount, #newProdPrice, #newProdStock').forEach(input => {
    input.addEventListener('input', () => enforcePositiveNumber(input));
  });

  document.addEventListener('input', event => {
    if (event.target.matches('[id^="manualStock_"]')) {
      enforcePositiveNumber(event.target);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initStorage();
  setupInputValidation();
  renderAll();
});