<div id="valuationContent" className={valuationStyles.content}>
  <div className={valuationStyles.header}>
    <div className={valuationStyles.title}>
      <h5>Wycena</h5>
      <p>z dnia 14.02.2021</p>
    </div>
    {/* ~questionnaire.createdAt  */}
    <div className={valuationStyles.hr}></div>
    <div className={valuationStyles.infoCardContainer}>
      <div className={valuationStyles.infoCard}>
        <div className={valuationStyles.icon}>
          <img className={valuationStyles.icon} src={Person} alt="icon"></img>
        </div>
        <div className={valuationStyles.infoCardContent}>
          <h3>Damian</h3>
          <p>606 498 039</p>
          <p>kontakt@damianpatkowski.pl</p>
        </div>
      </div>
      <div className={valuationStyles.infoCard}>
        <div className={valuationStyles.icon}>
          <img className={valuationStyles.icon} src={House} alt="icon"></img>
        </div>
        <div className={valuationStyles.infoCardContent}>
          <h3>Mieszkanie 120m2</h3>
          <p>Wrocław, Prusa</p>
        </div>
      </div>
      <div className={valuationStyles.infoCard}>
        <div className={valuationStyles.icon}>
          <img className={valuationStyles.icon} src={Calendar} alt="icon"></img>
        </div>
        <div className={valuationStyles.infoCardContent}>
          <h3>20.07.2021</h3>
          <p>Preferowany termin rozpoczęcia prac</p>
        </div>
      </div>
    </div>
    <div className={valuationStyles.hr}></div>
  </div>

  <div className={valuationStyles.room}>
    <h4 className={valuationStyles.roomHeader}>Łazienka 1 </h4>
    <div className={`${valuationStyles.serviceCardHeader} `}>
      <img
        className={valuationStyles.serviceIcon}
        src={Calendar}
        alt="icon"
      ></img>
      <h5 black className={valuationStyles.serviceHeader}>
        {"Prace glazurnicze"}
      </h5>
    </div>
    <div className={valuationStyles.services}>
      <div className={`${valuationStyles.serviceContainer} `}>
        <div className={`${valuationStyles.description}`}>
          <h4 className={`${valuationStyles.serviceAmount} `}>6m2</h4>
          <div className={`${valuationStyles.textContainer}`}>
            <h5 black className={valuationStyles.serviceHeader}>
              {"Kafelkowanie podłóg"}
            </h5>{" "}
            <h5 className={valuationStyles.hint}>
              (format płytki od 30x30 do 90x90)
            </h5>
          </div>
        </div>
        <div className={`${valuationStyles.price}`}>
          <h5 black className={valuationStyles.priceHeader}>
            648 zł
          </h5>{" "}
          <h5 className={valuationStyles.hint}>600 zł nettoo</h5>
        </div>
      </div>
      <div className={`${valuationStyles.serviceContainer} `}>
        <div className={`${valuationStyles.description}`}>
          <h4 className={`${valuationStyles.serviceAmount} `}>12m2</h4>
          <div className={`${valuationStyles.textContainer}`}>
            <h5 black className={valuationStyles.serviceHeader}>
              {"Kafelkowanie ścian"}
            </h5>
            <h5 className={valuationStyles.hint}>
              (format płytki od 30x30 do 90x90)
            </h5>
          </div>
        </div>

        <div className={`${valuationStyles.price}`}>
          <h5 black className={valuationStyles.priceHeader}>
            1 555,20 zł
          </h5>{" "}
          <h5 className={valuationStyles.hint}>1 440 zł netto</h5>
        </div>
      </div>
      <div className={`${valuationStyles.serviceContainer} `}>
        <div className={`${valuationStyles.description}`}>
          <h4 className={`${valuationStyles.serviceAmount} `}>2m2</h4>
          <div className={`${valuationStyles.textContainer}`}>
            <h5 black className={valuationStyles.serviceHeader}>
              {"Kafelkowanie format specjalny"}
            </h5>{" "}
            <h5 className={valuationStyles.hint}>
              (format płytki od 30x30 do 90x90)
            </h5>
          </div>
        </div>
        <div className={`${valuationStyles.price}`}>
          <h5 black className={valuationStyles.priceHeader}>
            324 zł
          </h5>{" "}
          <h5 className={valuationStyles.hint}>300 zł netto</h5>
        </div>
      </div>
    </div>

    <div className={valuationStyles.summary}>
      <div className={`${valuationStyles.summaryDescription} `}>
        <h5 black className={valuationStyles.header}>
          Koszt całkowity wykończenia pomieszczenia
        </h5>
      </div>
      <div className={`${valuationStyles.summaryPrice}`}>
        <h5 black className={valuationStyles.priceHeader}>
          2 656,80 zł
        </h5>
        <h5 className={valuationStyles.hint}>2 460 zł netto</h5>
      </div>
    </div>
  </div>
  <div className={valuationStyles.hr}></div>
  <div className={valuationStyles.servicesSummary}>
    <div className={`${valuationStyles.textContainer}`}>
      <h4 className={valuationStyles.servicesSummaryHeader}>
        Koszt całkowity prac
      </h4>
      <h5 black className={valuationStyles.header}>
        Koszt całkowity wykończenia wszystkich pomieszczeń
      </h5>
    </div>

    <div className={`${valuationStyles.price}`}>
      <h5 black className={valuationStyles.priceHeader}>
        5 961,60 zł
      </h5>{" "}
      <h5 className={valuationStyles.hint}>5 520 zł netto</h5>
    </div>
  </div>
  <div className={valuationStyles.hr}></div>
  {/* /////////////////////////////////////// */}

  <div className={`${valuationStyles.materials}`}>
    <h4 className={valuationStyles.materialsHeader}>
      Materiały niezbędne do wykonania prac
    </h4>
    <div className={`${valuationStyles.materialContainer} `}>
      <div className={`${valuationStyles.textContainer}`}>
        <h5 black className={valuationStyles.materialHeader}>
          zaprawy, klej do płytek
        </h5>
      </div>
      <div className={`${valuationStyles.price}`}>
        <h5 black className={valuationStyles.priceHeader}>
          184,50 zł
        </h5>{" "}
        <h5 className={valuationStyles.hint}>150 zł netto</h5>
      </div>
    </div>{" "}
    <div className={`${valuationStyles.materialContainer} `}>
      <div className={`${valuationStyles.textContainer}`}>
        <h5 black className={valuationStyles.materialHeader}>
          zaprawy, klej do płytek
        </h5>
      </div>
      <div className={`${valuationStyles.price}`}>
        <h5 black className={valuationStyles.priceHeader}>
          184,50 zł
        </h5>{" "}
        <h5 className={valuationStyles.hint}>150 zł netto</h5>
      </div>
    </div>{" "}
    <div className={`${valuationStyles.materialContainer} `}>
      <div className={`${valuationStyles.textContainer}`}>
        <h5 black className={valuationStyles.materialHeader}>
          zaprawy, klej do płytek
        </h5>
      </div>
      <div className={`${valuationStyles.price}`}>
        <h5 black className={valuationStyles.priceHeader}>
          184,50 zł
        </h5>{" "}
        <h5 className={valuationStyles.hint}>150 zł netto</h5>
      </div>
    </div>{" "}
    <div className={`${valuationStyles.materialContainer} `}>
      <div className={`${valuationStyles.textContainer}`}>
        <h5 black className={valuationStyles.materialHeader}>
          zaprawy, klej do płytek
        </h5>
      </div>
      <div className={`${valuationStyles.price}`}>
        <h5 black className={valuationStyles.priceHeader}>
          184,50 zł
        </h5>{" "}
        <h5 className={valuationStyles.hint}>150 zł netto</h5>
      </div>
    </div>
    <div className={`${valuationStyles.materialContainer} `}>
      <div className={`${valuationStyles.textContainer}`}>
        <h5 black className={valuationStyles.materialHeader}>
          zaprawy, klej do płytek
        </h5>
      </div>
      <div className={`${valuationStyles.price}`}>
        <h5 black className={valuationStyles.priceHeader}>
          184,50 zł
        </h5>{" "}
        <h5 className={valuationStyles.hint}>150 zł netto</h5>
      </div>
    </div>
    <div className={`${valuationStyles.materialContainer} `}>
      <div className={`${valuationStyles.textContainer}`}>
        <h5 black className={valuationStyles.materialHeader}>
          zaprawy, klej do płytek
        </h5>
      </div>
      <div className={`${valuationStyles.price}`}>
        <h5 black className={valuationStyles.priceHeader}>
          184,50 zł
        </h5>{" "}
        <h5 className={valuationStyles.hint}>150 zł netto</h5>
      </div>
    </div>
    <div className={`${valuationStyles.materialContainer} `}>
      <div className={`${valuationStyles.textContainer}`}>
        <h5 black className={valuationStyles.materialHeader}>
          zaprawy, klej do płytek
        </h5>
      </div>
      <div className={`${valuationStyles.price}`}>
        <h5 black className={valuationStyles.priceHeader}>
          184,50 zł
        </h5>{" "}
        <h5 className={valuationStyles.hint}>150 zł netto</h5>
      </div>
    </div>
    <div className={`${valuationStyles.materialContainer} `}>
      <div className={`${valuationStyles.textContainer}`}>
        <h5 black className={valuationStyles.materialHeader}>
          zaprawy, klej do płytek
        </h5>
      </div>
      <div className={`${valuationStyles.price}`}>
        <h5 black className={valuationStyles.priceHeader}>
          184,50 zł
        </h5>{" "}
        <h5 className={valuationStyles.hint}>150 zł netto</h5>
      </div>
    </div>
    <div className={`${valuationStyles.materialContainer} `}>
      <div className={`${valuationStyles.textContainer}`}>
        <h5 black className={valuationStyles.materialHeader}>
          zaprawy, klej do płytek
        </h5>
      </div>
      <div className={`${valuationStyles.price}`}>
        <h5 black className={valuationStyles.priceHeader}>
          184,50 zł
        </h5>{" "}
        <h5 className={valuationStyles.hint}>150 zł netto</h5>
      </div>
    </div>
    <div className={`${valuationStyles.materialContainer} `}>
      <div className={`${valuationStyles.textContainer}`}>
        <h5 black className={valuationStyles.materialHeader}>
          zaprawy, klej do płytek
        </h5>
      </div>
      <div className={`${valuationStyles.price}`}>
        <h5 black className={valuationStyles.priceHeader}>
          184,50 zł
        </h5>{" "}
        <h5 className={valuationStyles.hint}>150 zł netto</h5>
      </div>
    </div>
    <div className={`${valuationStyles.materialContainer} `}>
      <div className={`${valuationStyles.textContainer}`}>
        <h5 black className={valuationStyles.materialHeader}>
          zaprawy, klej do płytek
        </h5>
      </div>
      <div className={`${valuationStyles.price}`}>
        <h5 black className={valuationStyles.priceHeader}>
          184,50 zł
        </h5>{" "}
        <h5 className={valuationStyles.hint}>150 zł netto</h5>
      </div>
    </div>
    <div className={`${valuationStyles.materialContainer} `}>
      <div className={`${valuationStyles.textContainer}`}>
        <h5 black className={valuationStyles.materialHeader}>
          zaprawy, klej do płytek
        </h5>
      </div>
      <div className={`${valuationStyles.price}`}>
        <h5 black className={valuationStyles.priceHeader}>
          184,50 zł
        </h5>{" "}
        <h5 className={valuationStyles.hint}>150 zł netto</h5>
      </div>
    </div>
    <div className={`${valuationStyles.materialContainer} `}>
      <div className={`${valuationStyles.textContainer}`}>
        <h5 black className={valuationStyles.materialHeader}>
          zaprawy, klej do płytek
        </h5>
      </div>
      <div className={`${valuationStyles.price}`}>
        <h5 black className={valuationStyles.priceHeader}>
          184,50 zł
        </h5>{" "}
        <h5 className={valuationStyles.hint}>150 zł netto</h5>
      </div>
    </div>
    {/* /////////////////////////////////////// */}
  </div>
</div>;
