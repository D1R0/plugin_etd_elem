allCosts = { site: 0 };
periodCost = { ElementorPro: 1.25 };
featureHTML =
  '<div class="option_etd my-2_etd d-flex_etd w-100_etd align-items-center_etd"> <div class="checkboxContainer_etd m-4_etd"><input type="checkbox" class="featureCheckbox_etd m-4_etd" data-value="%pretImplementare%" data-price-period="%pretMentenanta%" data-feature="%feature%"></div> <div class="optionContent_etd"> <p class="m-0_etd"><b>%title%</b></p> <div class="secondaryText_etd" style="display:hide;">%details%</div> </div> <div class="ml-auto_etd d-flex_etd text-right_etd w-25_etd"> </div> </div> <hr>';
healthyHTML =
  '<div class="option_etd my-2_etd d-flex_etd w-100_etd align-items-center_etd healthyCard_etd supportCard_etd  my-3_etd"><div class="optionContent_etd p-2_etd"> <p class="m-0_etd"> <i class="fa-solid fa-arrow-up-right-dots" style="font-size: 24px; color:#198754;"></i>A Healthy and Efficient Website</p> <div class="secondaryText_etd" style="display:hide;">Both helping the pleasant experience on a healthy site for users and staff, as well as the possibility of integrating functionalities (events, monetization system, reconstruction of a section of the site, etc.), optimization according to the evolution of the site.</div> </div> </div>';
processingHTML =
  '<div class="paginatorButtons_etd text-center_etd my-2_etd"><button class="buttonCustom_etd m-1_etd backButton_etd elementor-button">Back</button><button class="m-1_etd buttonCustom_etd nextButton_etd elementor-button">Next</button></div>';
formHTML =
  '<form action="#" class="formRequest_etd"> <div class="detailsPayment_etd"></div> <div class="my-3_etd"> <p> Full Name </p> <input type="text" class="form-control_etd mb-2_etd" placeholder="Ionescu Denisa" required="required"> <p> Email</p> <input  type="text" class="form-control_etd mb-2_etd" placeholder="denisa.ionescu@example.ro" required="required"> <p> Phone Number</p> <input  type="text" class="form-control_etd mb-2_etd" placeholder="0712 345 678" required="required"> <p> Business Name (Optional)</p> <input type="text" class="form-control_etd mb-2_etd" placeholder="XYZ S.R.L."> <div style="display: flex;align-items: center; margin-bottom: 0.75rem;"> <input type="checkbox" id="terms_etd" name="terms_etd" required="required" style="margin-right: 0.25rem;"> <span>I agree to the <a href="https://eltand.com/terms-and-conditions/" target="_blank">Terms and Conditions</a></span></div> <div class="text-center_etd"> <button class="buttonCustom_etd m-2_etd retry_etd elementor-button" style="cursor:pointer;">Retry</button><button class="buttonCustom_etd my-2_etd sendButton_etd elementor-button">Send</button></div> </div> </form>';

features = {
  smsMarketing: {
    title: "SMS Marketing Management",
    pretImplementare: 1.49,
    pretMentenanta: 0,
    details:
      "The possibility of sending SMS texts with the intention of <span class='highlighted'>increasing sales</span>.",
  },

  supportChat: {
    title: "Support chat",
    pretImplementare: 13.99,
    pretMentenanta: 13.99,
    details:
      "The implementation of a Chat Bot, with the role of helping and answering automatically the questions of users on the website.",
  },

  sistemCurierat: {
    title: "Courier system",
    pretImplementare: 13.99,
    pretMentenanta: 13.99,
    details:
      "Implementation of an AWB generator for <span class='highlighted'>transport</span> products.",
  },

  metodePlata: {
    title: "Payment system",
    pretImplementare: 6.99,
    pretMentenanta: 0,
    details: "Implementation of a <span class='highlighted'>online</span> payment system.",
  },


  mailMarketing: {
    title: "Newsletter & Mail Marketing",
    pretImplementare: 4.99,
    pretMentenanta: 0,
    details:
      "Implementarea unui sistem de <span class='highlighted'>Newsletter</span> si <span class='highlighted'>Mail Marketing</span>.",
  },

  hosting: {
    title: "Providing the website hosting service",
    pretImplementare: 24.99,
    pretMentenanta: 24.99,
    details:
      "If you don't know which hosting service is more suitable for you, we will help you.",
  },
  domeniu: {
    title: "Providing the domain for the website",
    pretImplementare: 14.99,
    pretMentenanta: 14.99,
    details:
      "The name of your website.",
  },

  sistemRezervari: {
    title: "System for making appointments/reservations",
    pretImplementare: 23.99,
    pretMentenanta: 0,
    details:
      "Implementation of a system through which website visitors can make appointments or book sessions/services",
  },
  optimizareSeo: {
    title: "SEO optimization of products",
    pretImplementare: 4.99,
    pretMentenanta: 0,
    details:
      "The SEO optimization of the first 20 products on the website is free, and for more products, their SEO optimization will be charged with <span class='highlighted'>€4.99 for every 20 new products</span>.",
  },
  produseActive: {
    title: "Adding products to the website",
    pretImplementare: 4.99,
    pretMentenanta: 0,
    details:
      "Adaugarea primelor 20 produse pe website este gratuita, iar pentru mai multe produse, adaugarea acestora va fi  taxata cu <span class='highlighted'>5€ pentru fiecare 20 produse noi</span>.",
  },
};

websiteTypes = {
  ecomm: [
    "smsMarketing",
    "supportChat",
    "sistemCurierat",
    "metodePlata",
    "mailMarketing",
    // "produseActive",
    "hosting",
    "domeniu",
    // "optimizareSeo",
  ],
  pres: [
    "supportChat",
    "mailMarketing",
    "sistemRezervari",
    "hosting",
    "domeniu",
  ],
};

function clearCosts() {
  jQuery(".featureCheckbox_etd").each(function () {
    jQuery(this).prop("checked", false);
  });
  periodCost = { ElementorPro: 2 };
  allCosts = { site: 0 };
}
function calculateTotal(allCosts, periodCost) {
  let total = 0;
  for (price in allCosts) {
    total += allCosts[price];
  }
  let totalPeriodCost = 0;
  for (price in periodCost) {
    totalPeriodCost += periodCost[price];
  }

  // return [total.toFixed(2), totalPeriodCost.toFixed(2)];
}
jQuery(".customizeWebsite_etd").on("change", ".selectType_etd", function () {
  tab = jQuery(this).val();
  initTabHandler(tab)
})
function initTabHandler(tab) {
  jQuery(".customizeWebsite_etd .tabs_etd .tab_etd").each(function () {
    jQuery(this).hide();
    jQuery(this).html("");
  });
  page = 1;

  if (tab == "other") {
    jQuery(".customizeWebsite_etd ." + tab + "_etd").html("");
    jQuery(".customizeWebsite_etd ." + tab + "_etd").show();
    jQuery(".customizeWebsite_etd ." + tab + "_etd").append(
      "<a href='/contact'>Contacteaza-ne</a>"
    );
  } else {
    jQuery(".customizeWebsite_etd ." + tab + "_etd").html("");
    jQuery(".customizeWebsite_etd ." + tab + "_etd").show();
    htmlTab = "";
    pages = {};
    pagesHTML = "<div class='page_etd' data-page='%page%' style='display:none;'>";
    websiteTypes[tab].forEach((feature, index) => {
      if (index % 3 === 0 && index !== 0) {
        page++;
      }
      htmlTab = featureHTML.replaceAll("%title%", features[feature]["title"]);
      htmlTab = htmlTab.replaceAll("%details%", features[feature]["details"]);
      htmlTab = htmlTab.replaceAll("%feature%", feature);
      if (!(page in pages)) {
        pages[page] = [htmlTab];
      } else {
        pages[page].push(htmlTab);
      }
    });
    for (item in pages) {
      addHTML = "";
      pageHTML = pagesHTML.replace("%page%", item);
      addHTML += pageHTML;
      pages[item].forEach((elem) => {
        addHTML += elem;
      });
      addHTML += "</div>";
      jQuery(".customizeWebsite_etd ." + tab + "_etd").append(addHTML);
    }
    jQuery(".customizeWebsite_etd ." + tab + "_etd").append(healthyHTML);
    jQuery(".customizeWebsite_etd ." + tab + "_etd").append(processingHTML);
    allCosts["site"] = jQuery(".customizeWebsite_etd ." + tab + "_etd").data("value");

    calculateTotal(allCosts, periodCost);
    paginator(tab);
  }
}

jQuery(".customizeWebsite_etd .tabs_etd ").on(
  "change",
  ".featureCheckbox_etd",
  function () {
    parent = jQuery(this).closest(".option_etd");
    if (jQuery(this).is(":checked")) {
      allCosts[jQuery(this).data("feature")] = jQuery(this).data("value");
      periodCost[jQuery(this).data("feature")] = jQuery(this).data("price-period");
      calculateTotal(allCosts, periodCost);
      parent.find(".secondaryText_etd").show();
    } else {
      delete allCosts[jQuery(this).data("feature")];
      delete periodCost[jQuery(this).data("feature")];
      calculateType(allCosts, periodCost);
      parent.find(".secondaryText_etd").hide();
    }
  }
);

jQuery(".customizeWebsite_etd").on("click", ".retry_etd", function () {
  console.log("clicked")
  initTabHandler(jQuery(".customizeWebsite_etd .selectType_etd").val())
})

jQuery(".customizeWebsite_etd").on("click", ".sendButton_etd", function () {
  let validForm = true;
  url = "/wp-json/eltand/v1/sendEmail";
  data = [];
  jQuery(this)
    .closest(".customizeWebsite_etd")
    .find(".formRequest_etd input")
    .each(function () {
      data.push(jQuery(this).val());
      if (jQuery(this).attr("required") && jQuery(this).val() == "") {
        validForm = false;
      }
    });
  if (validForm) {
    jQuery.post(
      url,
      { data: data, allCosts: allCosts, periodCost: periodCost },
      function (response) {
        console.log(response)
        if (response == "Email sent successfully") {
          window.location.href = "https://eltand.com/thank-you";
        } else {
          alert("Cererea a fost trimisa");
        }
      }
    );
  }
});

function paginator(tab, activePage = 1) {
  lastPage = activePage;
  jQuery(".customizeWebsite_etd .page_etd").each(function () {
    if (lastPage < jQuery(this).data("page")) {
      lastPage = jQuery(this).data("page");
    }
    if (jQuery(this).data("page") == activePage) {
      jQuery(this).show();
    } else {
      jQuery(this).hide();
    }
  });

  if (activePage === lastPage) {
    jQuery(".customizeWebsite_etd .nextButton_etd").text("Process it");
  } else {
    jQuery(".customizeWebsite_etd .nextButton_etd").text("Next");
  }
  jQuery(".customizeWebsite_etd .nextButton_etd")
    .unbind()
    .click(function () {
      jQuery("html, body").animate(
        { scrollTop: jQuery(this).closest(".customizeWebsite_etd").offset().top },
        250
      );
      if (activePage === lastPage) {
        jQuery(".customizeWebsite_etd ." + tab + "_etd").html(formHTML);
        jQuery(".formRequest_etd").before(
          "<div class='detailsPayment_etd w-100_etd text-left_etd textPrimary_etd'> <h4>Details</h4></div>"
        );
        for (cost in allCosts) {
          nameDetail = cost == "site" ? "Website" : features[cost].title;
          jQuery(".formRequest_etd .detailsPayment_etd").append(
            "<div class='w-100_etd d-flex_etd secondaryText_etd' style='border-bottom:1px dotted gray;'> <div class='w-50_etd text-left_etd'>" +
            nameDetail +
            "</div></div>"
          );
        }
      }
      if (activePage < lastPage) {
        paginator(tab, activePage + 1);
      }
    });
  jQuery(".customizeWebsite_etd .backButton_etd")
    .unbind()
    .click(function () {
      jQuery("html, body").animate(
        { scrollTop: jQuery(this).closest(".customizeWebsite_etd").offset().top },
        250
      );
      if (activePage > 1) {
        paginator(tab, activePage - 1);
      }
    });
}
