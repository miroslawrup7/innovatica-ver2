// h - header
// q - quick contact
// f - footer

// c - content, ch - home, ca - about, cs - services, cp - portfolio, cc - contact

const h_translate = {
    pl: {
        h1: "Home",
        h2: "O nas",
        h3: "Usługi",
        h4: "Realizacje",
        h5: "Kontakt",
    },
    en: {
        h1: "Home",
        h2: "About us",
        h3: "Services",
        h4: "Realizations",
        h5: "Contact",
    },
    de: {
        h1: "Home",
        h2: "Über uns",
        h3: "Leistungen",
        h4: "Umsetzungen",
        h5: "Kontakt",
    },
};

const q_translate = {
    pl: {
        q1: "Szybki kontakt",
    },
    en: {
        q1: "Instant contact",
    },
    de: {
        q1: "Schnelle Kontaktaufnahme",
    },
};

const f_translate = {
    pl: {
        f1: "Home",
        f2: "O nas",
        f3: "Usługi",
        f4: "Realizacje",
        f5: "Kontakt",
        f6: "Prywatność",
        f7: "Warunki",
    },
    en: {
        f1: "Home",
        f2: "About us",
        f3: "Services",
        f4: "Realizations",
        f5: "Contact",
        f6: "Privacy",
        f7: "Conditions",
    },
    de: {
        f1: "Home",
        f2: "Über uns",
        f3: "Leistungen",
        f4: "Umsetzungen",
        f5: "Kontakt",
        f6: "Datenschutz",
        f7: "Bedingungen",
    },
};

const ch_translate = {
    pl: {
        ch1: "Usługi CNC na których możesz polegać!",
        ch2: "Nasza oferta",
        ch3: "Certyfikat ISO 9001",
        ch4: "Obróbka CNC w Innovatica obejmuje zarówno części z metalu jak i tworzyw sztucznych. Gwarantujemy usługę na wysokim poziomie i w czasie krótszym niż gdziekolwiek indziej. Prześlij plik CAD, wybierz materiał, podaj ilość i termin, a w ciągu kilku godzin otrzymasz od nas wycenę.",
        ch5: "Dowiedz się dlaczego wyróżniamy się na rynku!",
        ch6: "O nas",
        ch7: "Wyślij zapytanie ofertowe na: office@innovatica3d.com",
        ch8: "Kontakt",
    },
    en: {
        ch1: "CNC Services you can rely on!",
        ch2: "Our offer",
        ch3: "Certificate ISO 9001",
        ch4: "CNC machining in Innovativa covers both metal and plastic parts. We guarantee the highest standard of services and in a shorter time than anywhere else. Upload a CAD file, choose your material, quantity and deadline, and in a matter of hours you will receive a quote from us.",
        ch5: "Find out why we stand out on the market!",
        ch6: "About us",
        ch7: "Send request for quotation to office@innovatica.com.pl",
        ch8: "Contact",
    },
    de: {
        ch1: "CNC-Dienstleistungen, auf die Sie sich verlassen können!",
        ch2: "Unser Angebot",
        ch3: "ISO 9001 Zertifikat",
        ch4: "Die cnc-bearbeitung bei innovatica umfasst sowohl metall- als auch kunststoffteile. Wir garantieren einen qualitativ hochwertigen service und das in kürzerer zeit als anderswo. Laden sie eine cad-datei hoch, wählen sie ihr material, geben sie die menge und den termin an, und innerhalb weniger stunden erhalten sie ein preisangebot.",
        ch5: "Finden sie heraus, warum wir uns vom markt abheben!",
        ch6: "Über uns",
        ch7: "Senden Sie eine Anfrage an: office@innovatica.com.pl",
        ch8: "Kontakt",
    },
};

const ch_translate_html = {
    pl: {
        ch1h: "Skuteczność<br><span>w innowacji</span>",
        ch2h: "Proste<br><span>zamawianie!</span>",
        ch3h: "Poznaj<br><span>nas</span>",
        ch4h: "Zleć wycenę<br><span>już teraz!</span>",
    },
    en: {
        ch1h: "Effective<br><span>in innovation</span>",
        ch2h: "Easy<br><span>ordering!</span>",
        ch3h: "Meet<br><span>us</span>",
        ch4h: "Order<br><span>a quote now!</span>",
    },
    de: {
        ch1h: "Innovations<br><span>kraft</span>",
        ch2h: "Einfach<br><span>bestellen!</span>",
        ch3h: "Lernen sie<br><span>uns kennen</span>",
        ch4h: "Jetzt ein angebot<br><span> einholen!</span>",
    },
};

const ca_translate = {
    pl: {
        ca1: "Obrabiamy materiały z metalu oraz tworzyw sztucznych. Do naszego zespołu należą posiadający wieloletnie doświadczenie oraz niezbędną wiedzę operatorzy, programiście CAM i technolodzy. Dokładamy wszelkich starań, aby wykonane przez nas elementy były jak najwyższej jakości.",
        ca2: "W ramach wcześniejszych działań spółki zaprojektowaliśmy i stworzyliśmy prototyp nowoczesnej, innowacyjnej drukarki 3D. Zainteresowanym polecamy zapoznanie się z projektem.",
        ca3: "Jesteśmy pasjonatami techniki i nowych technologii. Pracujemy na wysokiej klasy sprzęcie. Za cel stawiamy sobie automatyzację i optymalizację procesu produkcyjnego. Szanujemy czas i pieniądze naszych Klientów.",
        ca4: "Mamy ambicję by ciagle polepszać jakość naszych usług. Aktualnie wdrażamy system zarządzania jakością poprzez certyfikację ISO 9001.",
        ca5: "Nazwa firmy, design oraz logotyp zostały zastrzeżone na terenie Unii Europejskiej, w EUIPO pod numerami 018127950 oraz 018127949.",
    },
    en: {
        ca1: "We process metal and plastic materials. Our team includes CAM programmers and technologists with many years of experience and necessary knowledge. We make every effort to ensure that elements produced by us are of the highest quality.",
        ca2: "Through the course of our earlier activities we have designed and created a prototype of a modern and innovative 3D printer. We invite you to familiarize yourself with our project.",
        ca3: "We are passionate about technique and new technologies. We work on high-end class equipment. Our main goal is to automate and optimize the production process. We respect our clients' time and money.",
        ca4: "We have the ambition to constantly improve the quality of our services. Currently we are implementing quality management system through ISO 9001 certification.",
        ca5: "Company’s name, its design and logotype are registered trademarks in the European Union under EUIPO numbers 018127950 and 018127949.",
    },
    de: {
        ca1: "Wir bearbeiten metall- und kunststoffmaterialien. Unser team besteht aus bedienern, cam-programmierern und spezialisten mit langjähriger erfahrung und dem nötigen wissen. Wir unternehmen alle anstrengungen, um sicherzustellen, dass die von uns produzierten komponenten von höchster qualität sind.",
        ca2: "Im rahmen der bisherigen aktivitäten des unternehmens haben wir einen prototyp eines modernen, innovativen 3d-druckers entworfen und gebauit. Interessenten empfehlen wir, sich mit dem projekt vertraut zu machen.",
        ca3: "Wir begeistern uns für technik und neue technologien. Wir arbeiten mit erstklassigem equipment. Unser ziel ist es, den produktionsprozess zu automatisieren und zu optimieren. Wir respektieren die zeit und das geld unserer kunden.",
        ca4: "Wir haben den ehrgeiz, die qualität unserer dienstleistungen ständig zu verbessern. Wir implementieren derzeit ein qualitätsmanagementsystem, das nach iso 9001 zertifiziert ist.",
        ca5: "Der firmenname, das design und das logo sind bei der euipo unter den nummern 018127950 und 018127949 für die europäischen union geschützt.",
    },
};

const ca_translate_html = {
    pl: {
        ca1h: "Usługi<br>CNC",
        ca2h: "Dlaczego<br>Innovatica?",
        ca3h: "Jak<br>pracujemy?",
        ca4h: "Nieustanny<br>rozwój",
        ca5h: "Unikatowa<br>marka",
        ca6h: "Pobierz ofertę <img src='./img/arrow-down-to-line.svg'>",
        ca7h: "Pobierz specyfikację prototypu <img src='./img/arrow-down-to-line.svg'>",
        ca8h: "Odtwórz film pokazowy <img src='./img/play.svg'>",
        ca9h: "Pobierz zaświadczenie ISO <img src='./img/arrow-down-to-line.svg'>",
    },
    en: {
        ca1h: "CNC<br>Services",
        ca2h: "Why<br>Innovatica?",
        ca3h: "How do<br>we work?",
        ca4h: "Continuous<br>development",
        ca5h: "Unique<br>brand",
        ca6h: "Download the offer <img src='./img/arrow-down-to-line.svg'>",
        ca7h: "Download the prototype specification <img src='./img/arrow-down-to-line.svg'>",
        ca8h: "Play the demonstration film <img src='./img/play.svg'>",
        ca9h: "Download ISO certification <img src='./img/arrow-down-to-line.svg'>",
    },
    de: {
        ca1h: "CNC<br>dienstleistungen",
        ca2h: "Warum<br>Innovatica?",
        ca3h: "Wie<br>arbeiten wir",
        ca4h: "Stetige<br>weiterentwicklung",
        ca5h: "Einzigartige<br>marke",
        ca6h: "Angebot herunterladen <img src='./img/arrow-down-to-line.svg'>",
        ca7h: "Prototyp-spezifikation herunterladen <img src='./img/arrow-down-to-line.svg'>",
        ca8h: "Abspielen des demonstrationsfilms  <img src='./img/play.svg'>",
        ca9h: "ISO-zertifizierung herunterladen <img src='./img/arrow-down-to-line.svg'>",
    },
};

const cs_translate = {
    pl: {
        cs1: "Dokonujemy obróbki CNC z aluminium, stali, ale również z mosiądzu, miedzi czy tytanu. Obrabiamy również tworzywa sztuczne. Doradzamy.",
        cs2: "Dysponujemy maszyną renomowanej amerykańskiej marki Haas (model VF3SSYT). Nasza maszyna frezuje części z bloku metodą subtrakcyjnego frezowania&nbsp;3 osiowego. Frezarka, której używamy gwarantuje najwyższą jakość obrabianych detali. Pionowe centrum obróbcze Haas posiada szybkie wrzeciono oraz bardzo wydajną wymianę narzędzi, co znacznie skraca czas cyklu i zwiększa wydajność produkcji.",
        cs3: "Do tworzenia dokumentacji technologicznej oraz programowania CAM, wykorzystujemy program Autodesk Fusion 360.",
    },
    en: {
        cs1: "We provide CNC machining services in aluminum and steel, but also in brass and copper parts. We process plastics as well, and provide necessary advice.",
        cs2: "We have a machine from a renowned USA brand Haas (model VF3SSYT). Our machine mills parts from a block using a 3-axis subtractive milling method. The machine we use guarantees themhighest quality of machined parts. The Haas high-performance Super-Speed vertical machining centers provide the high spindle speeds, fast rapids, and quick tool changes necessary for high-volume production and reduced cycle times.",
        cs3: "We use Autodesk Fusion 360 to create technological documentation and CAM programming.",
    },
    de: {
        cs1: "Wir führen cnc-bearbeitung von aluminium, stahl, aber auch messing und kupfer durch. 	Wir verarbeiten auch kunststoffe. Wir bieten beratung.",
        cs2: "Wir verfügen über eine maschine des renommierten amerikanischen herstellers haas (modell VF3SSYT). Unsere maschine fräst teile aus dem block mit dem subtraktiven 3-achsen fräsverfahren. Die von uns verwendete fräsmaschine garantiert höchste qualität der bearbeiteten teile. Das vertikale haas-bearbeitungs zentrum verfügt über eine hochgeschwindigkeits spindel und einen hocheffizienten werkzeugwechsel, der die zykluszeit deutlich reduziert und die produktionseffizienz erhöht.",
        cs3: "Wir verwenden die Software Autodesk Fusion 360 zur Erstellung der technischen Dokumentation und der CAM-Programmierung.",
    },
};

const cs_translate_html = {
    pl: {
        cs1h: "Zakres<br>usług",
        cs2h: "Park<br>maszyn",
        cs3h: "Akcesoria",
        cs4h: "Pobierz specyfikację maszyny <img src='./img/arrow-down-to-line.svg'>",
        cs5h: "Dysponujemy wieloma zestawami narzędzi do frezowania metali i tworzyw sztucznych. Gotowe elementy (np. z aluminium) na życzenie Klienta mogą zostać poddane <strong>anodowaniu</strong> lub <strong>lakierowaniu proszkowemu</strong>.</p>",
    },
    en: {
        cs1h: "Scope of<br>Services",
        cs2h: "Machinery<br>Park",
        cs3h: "Accessories",
        cs4h: "Download machine specification <img src='./img/arrow-down-to-line.svg'>",
        cs5h: "We have many sets of tools for metal and plastics machining. Finished parts (i.e. aluminum) can be <strong>anodized</strong> or <strong>powder coated</strong> at the customer’s request.</p>",
    },
    de: {
        cs1h: "Leitungs<br>spektrum",
        cs2h: "Maschinen<br>park",
        cs3h: "Zubehör",
        cs4h: "Maschinenspezifikation herunterladen <img src='./img/arrow-down-to-line.svg'>",
        cs5h: "Wir verfügen über zahlreiche werkzeugsätze für die Metall- und Kunststoffbearbeitung. Fertige Bauteile (z.B. Aluminium) können auf Wunsch <strong>eloxiert</strong> oder <strong>pulverbeschichtet werden</strong>.</p>",
    },
};

const cp_translate = {
    pl: {
        cp1: "Zapoznaj się z galerią przykładowych detali, wykonanych w technologii CNC w naszym warsztacie.",
    },
    en: {
        cp1: "See the gallery of sample details made with the use of CNC technology in our workshop.",
    },
    de: {
        cp1: "Werfen Sie einen Blick auf die Galerie mit Detailsbeispielen, die in unserer Werkstatt mit CNC-Technik hergestellt wurden.",
    },
};

const cc_translate = {
    pl: {
        cc1: "Usługę wyceniamy w 24 godziny lub szybciej. Jeśli chcesz porozmawiać o zleceniu osobiście, to zapraszamy do naszej siedziby w miejscowości Rudniki. Możesz do nas dojechać autostradą A1 lub drogą krajową nr 91.",
        cc2: "Biuro",
        cc3: "Tu wyślij swoje zapytanie ofertowe.",
        cc4: "Produkcja",
        cc5: "Tu wyślij projekt lub pytanie techniczne.",
    },
    en: {
        cc1: "We will quote the service in 24 hours or less. If you want to talk about the order in person, we invite you to our headquarters in Rudniki. You can reach us via A1 highway or state road no. 91.",
        cc2: "The Office",
        cc3: "Send your quotation request here.",
        cc4: "Production",
        cc5: "Send your project or technical question here.",
    },
    de: {
        cc1: "Einen Kostenvoranschlag für unsere Dienstleistungen erhalten Sie innerhalb von 24 Stunden oder weniger. Wenn Sie eine Bestellung persönlich besprechen möchten, besuchen Sie bitte unsere Hauptgeschäftsstelle in Rudniki. Sie erreichen uns über die Autobahn A1 oder die Bundesstraße 91.",
        cc2: "Büro",
        cc3: "Senden Sie hier Ihre Anfrage an.",
        cc4: "Fertigung",
        cc5: "Senden Sie Ihr Projekt oder Ihre technische Frage hier an.",
    },
};
