import React from "react";
import { Redirect } from "react-router";
import { EntityComponentType, EntityType } from "./types";

const entities: EntityType[] = [
  {
    id: `pacific_ocean`,
    x: 10.527716742621527,
    y: 15.446997748480904,
    size: 11,
    modal: {
      component: EntityComponentType.basic,
      props: {
        title: `USA`,
        svg: "/assets/entities/pacific_ocean.svg",
        contentAlign: "right",
        color: "red_2",
        description: (
          <>
            <p>
              HSBC delivered an innovative funding solution to enable the
              world’s largest independent power producer to start developing
              seven wind farms and four solar power plants in the US. In what
              was Paris-based Engie Group’s largest overseas financing deal to
              date, we structured a tax equity solution – a product unique to US
              renewable energy projects that pairs the tax benefits these
              projects are eligible for with capital financing.
            </p>
          </>
        ),
      },
    },
  },
  {
    id: `us`,
    x: 17.8444,
    y: 28.7597,
    size: 10.5,
    modal: {
      component: EntityComponentType.basic,
      props: {
        title: `USA`,
        svg: "/assets/entities/pacific_ocean.svg",
        contentAlign: "right",
        color: "red_2",
        description: (
          <>
            <p>
              HSBC delivered an innovative funding solution to enable the
              world’s largest independent power producer to start developing
              seven wind farms and four solar power plants in the US. In what
              was Paris-based Engie Group’s largest overseas financing deal to
              date, we structured a tax equity solution – a product unique to US
              renewable energy projects that pairs the tax benefits these
              projects are eligible for with capital financing.
            </p>
          </>
        ),
      },
    },
  },
  {
    id: `mexico`,
    x: 3.42493,
    y: 34.2451,
    size: 10.5,
    modal: {
      component: EntityComponentType.basic,
      props: {
        title: `Mexico`,
        svg: "/assets/entities/mexico.svg",
        contentAlign: "left",
        color: "red_1",
        description: (
          <>
            <p>
              HSBC joined forces with three other banks to support one of
              Mexico’s largest companies to advance its ESG goals with a $2
              billion loan. Coppel’s retail empire includes about 1,600 low-
              cost stores that offer appliances, electronics, furniture and
              clothing. The loan – the largest syndication process ever for a
              private company in Mexico – will help the firm install solar
              panels at 876 outlets, with the goal of generating half its
              electricity from green sources by 2025.
            </p>
          </>
        ),
      },
    },
  },
  {
    id: `brazil`,
    x: 6.19508,
    y: 54.1596,
    size: 8.25,
    modal: {
      component: EntityComponentType.basic,
      props: {
        title: `Brazil`,
        svg: "/assets/entities/brazil.svg",
        contentAlign: "right",
        color: "black",
        description: (
          <>
            <p>
              HSBC partnered with global supplier Mercon to launch the coffee
              industry’s first sustainability linked loan. The loan supports the
              company’s commitment to creating diverse and sustainable supply
              chains by lowering interest rates when it hits its green targets.
              Mercon, which has a major presence in South America, is seeking to
              improve the livelihoods of workers and develop innovative farming
              techniques by focusing on water and forest conservation, as well
              as crop rotation.
            </p>
          </>
        ),
      },
    },
  },
  {
    id: `uk`,
    x: 54.2958,
    y: 17.6608,
    size: 1.6,
    modal: {
      component: EntityComponentType.basic,
      props: {
        title: `UK`,
        svg: "/assets/entities/uk_crop.svg",
        svgLrg: true,
        contentAlign: "left",
        color: "red_1",
        description: (
          <>
            <p>
              HSBC jointly structured the UK government’s first green bond,
              helping it raise a record £10 billion. The proceeds will be used
              for projects such as offshore wind farms and zero-emissions buses,
              and to create green jobs. We’ve been mandated to structure more
              green sovereign bonds than any other bank – evidence that our
              expertise is making a difference to the global transition to net
              zero.
            </p>
          </>
        ),
      },
    },
  },
  {
    id: `spain`,
    x: 48.0324,
    y: 23.2235,
    size: 7,
    modal: {
      component: EntityComponentType.basic,
      props: {
        title: `Spain`,
        svg: "/assets/entities/spain.svg",
        contentAlign: "right",
        color: "black",
        description: (
          <>
            <p>
              We played a leading role as global oil and gas company Repsol
              raised €1.25 billion with its inaugural sustainability linked
              bond. It’s the first time an energy company has tied the cost of
              its financing to the reduction of its entire carbon footprint,
              including emissions in its sale of products. We were joint
              structuring adviser, global coordinator, and joint bookrunner for
              the bond sale. The coupon will be linked to the Spanish company’s
              targets to reduce its carbon intensity indicators by 12% by 2025
              and 25% by 2030.
            </p>
          </>
        ),
      },
    },
  },
  {
    id: `greece`,
    x: 58.4179,
    y: 26.8117,
    size: 10.5,
    modal: {
      component: EntityComponentType.basic,
      props: {
        title: `Greece`,
        svg: "/assets/entities/greece.svg",
        contentAlign: "right",
        color: "red_2",
        description: (
          <>
            <p>
              HSBC took structuring and bookrunning roles as Greece’s largest
              power producer issued a €650 million high-yield
              sustainability-linked bond – a first for Europe. We used our
              global reach and local expertise to attract a diverse base of
              international and Greek investors. The bond commits Public Power
              Corporation (PPC) to reduce its carbon emissions by 40% by the end
              of 2022 – or face higher financing costs. PPC will end its
              reliance on lignite – low-grade brown coal – plants over the next
              few years, and significantly boost its solar and wind power
              capacity.
            </p>
          </>
        ),
      },
    },
  },
  {
    id: `uae`,
    x: 54.032,
    y: 42.2862,
    size: 11,
    modal: {
      component: EntityComponentType.basic,
      props: {
        title: `UAE`,
        svg: "/assets/entities/uae.svg",
        contentAlign: "right",
        color: "red_1",
        description: (
          <>
            <p>
              HSBC held coordination, structuring and bookrunning roles for the
              world’s first ‘transition’ sukuk, which secured funds to help cut
              carbon emissions from the aviation industry. The $600 million
              proceeds will be used by Etihad Airways for energy-efficient
              aircraft and research and development into sustainable aviation
              fuel. The sukuk also includes a commitment from the airline to pay
              a penalty in the form of carbon offsets if it fails to meet its
              short-term target to reduce the carbon intensity of its passenger
              fleet.
            </p>
          </>
        ),
      },
    },
  },
  {
    id: `india`,
    x: 61.6865,
    y: 50.9038,
    size: 8.5,
    modal: {
      component: EntityComponentType.basic,
      props: {
        title: `India`,
        svg: "/assets/entities/india.svg",
        contentAlign: "left",
        color: "red_2",
        description: (
          <>
            <p>
              HSBC supported a waste-to-value company based in the US that takes
              waste biogas and converts it into clean energy. The company
              specifically serves water treatment plants, landfills,
              agricultural digesters and power generation facilities by building
              customised biogas clean-up systems. HSBC was the sole lender for a
              sustainable trade instrument that enabled the business to expand
              into India, where it developed a manufacturing facility.
            </p>
          </>
        ),
      },
    },
  },
  {
    id: `bangladesh`,
    x: 71.6389,
    y: 50.3664,
    size: 10.5,
    modal: {
      component: EntityComponentType.basic,
      props: {
        title: `Bangladesh`,
        svg: "/assets/entities/bangladesh.svg",
        contentAlign: "left",
        color: "red_1",
        description: (
          <>
            <p>
              HSBC delivered Bangladesh’s first sustainability linked loan for
              pharmaceutical giant Square Group. The company will benefit from
              lower interest payments if it meets green targets for its
              operations by using more renewable energy to reduce its carbon
              emissions. One way Square Group is doing this is by installing
              solar panels across its manufacturing plants.
            </p>
          </>
        ),
      },
    },
  },
  {
    id: `sri_lanka`,
    x: 59.1649,
    y: 62.9733,
    size: 9.75,
    modal: {
      component: EntityComponentType.basic,
      props: {
        title: `Sri Lanka`,
        svg: "/assets/entities/sri_lanka.svg",
        contentAlign: "right",
        color: "black",
        description: (
          <>
            <p>
              HSBC provided the bank’s first corporate green loan in Sri Lanka
              to Eco Spindles, a company that transforms old plastic bottles
              into yarn for new clothing and fabric. Clients like this with
              innovative waste-to-product solutions look to us for sustainable
              financing, and our loan helped Eco Spindles to develop the
              country’s first plastic-to-yarn plant – one of just two in the
              world.
            </p>
          </>
        ),
      },
    },
  },
  {
    id: `malaysia`,
    x: 67.184,
    y: 61.683,
    size: 5,
    modal: {
      component: EntityComponentType.basic,
      props: {
        title: `Malaysia`,
        svg: "/assets/entities/malaysia.svg",
        contentAlign: "right",
        color: "black",
        description: (
          <>
            <p>
              HSBC Amanah has provided Malaysia’s Guan Chong Cocoa Manufacturer
              Sdn Bhd with our first green trade financing facility in support
              of sustainable cocoa sourcing. Its parent company, Guan Chong
              Berhad (GCB), is the 4th-largest cocoa grinder in the world and
              has committed to making its cocoa supply chain sustainable by
              supporting growers, minimising environmental impacts and producing
              sustainable cocoa. This bespoke financing arrangement helps the
              company to source certified cocoa beans from farms that don’t
              contribute to cocoa-related deforestation.{" "}
            </p>
          </>
        ),
      },
    },
  },
  {
    id: `singapore`,
    x: 65.9632,
    y: 71.5852,
    size: 6.5,
    modal: {
      component: EntityComponentType.basic,
      props: {
        title: `Singapore`,
        svg: "/assets/entities/singapore.svg",
        contentAlign: "left",
        color: "red_3",
        description: (
          <>
            <p>
              HSBC’s expertise and financing has accelerated the global
              expansion of Singapore-based Durapower Group, which makes
              fast-charging lithium-ion batteries for electric vehicles, and
              cutting-edge energy storage systems. The company, launched in
              2009, now has a global network of customers across 40 cities in 18
              countries, including the Netherlands, Belgium, China, India and
              Japan – and we’ve supported it with tailor-made financing
              solutions in a number of markets.
            </p>
          </>
        ),
      },
    },
  },
  {
    id: `indonesia`,
    x: 75.0917,
    y: 72.9192,
    size: 6.25,
    modal: {
      component: EntityComponentType.basic,
      props: {
        title: `Indonesia`,
        svg: "/assets/entities/indonesia.svg",
        contentAlign: "left",
        color: "black",
        description: (
          <>
            <p>
              HSBC supported an $800 million bridging loan for PT Pertamina
              Geothermal Energy (PGE), for which we were mandated lead arranger
              and contributed $140 million. The renewable energy producer is a
              major market player focused on helping the country expand its
              renewable energy share to 23% by 2025. Situated along the Pacific
              Ocean’s ‘Ring of Fire’, Indonesia has the world’s largest
              estimated geothermal production capacity and so tapping into this
              energy source is key to the nation’s long-term energy transition.
            </p>
          </>
        ),
      },
    },
  },
  {
    id: `hong_kong`,
    x: 81.6174,
    y: 61.4491,
    size: 5.5,
    modal: {
      component: EntityComponentType.basic,
      props: {
        title: `Hong Kong`,
        svg: "/assets/entities/hong_kong.svg",
        contentAlign: "left",
        color: "red_2",
        description: (
          <>
            <p>
              HSBC provided a HKD258 million ($33 million) green guarantee to
              Gammon Construction Ltd in support of the sustainable expansion of
              Hong Kong International Airport’s Terminal 2. The financing
              arrangement commits the company to achieving a BEAM Plus Platinum
              rating for the project – the highest environmental accreditation
              for buildings in Hong Kong. Low-impact development encompasses
              material selection, building practices and waste management. For
              instance, Gammon will use prefabricated modules to reduce
              construction waste, green-certified concrete and reuse treated
              marine sediment.
            </p>
          </>
        ),
      },
    },
  },
  {
    id: `vietnam`,
    x: 75.7765,
    y: 60.2263,
    size: 7,
    modal: {
      component: EntityComponentType.basic,
      props: {
        title: `Vietnam`,
        svg: "/assets/entities/vietnam.svg",
        contentAlign: "right",
        color: "red_2",
        description: (
          <>
            <p>
              HSBC delivered a green loan to help finance the construction of
              Vietnam’s first plastics recycling factory. Duy Tan will
              recondition used plastic bottles for further use in packaging – a
              step forward in Vietnam’s battle against ocean pollution. “It’s a
              long-term journey, but we want our operations to be more
              sustainable and we want to have a green, clean and beautiful
              Vietnam,” says Anh Le, Vice-President at Duy Tan.
            </p>
          </>
        ),
      },
    },
  },
  {
    id: `china`,
    x: 87.2893,
    y: 45.4945,
    size: 13,
    modal: {
      component: EntityComponentType.basic,
      props: {
        title: `China`,
        svg: "/assets/entities/china.svg",
        contentAlign: "left",
        color: "black",
        description: (
          <>
            <p>
              HSBC led a world-first financing deal that will pay for sectors
              including utilities and construction to reduce emissions in China
              and beyond. We were joint global coordinator, joint lead manager
              and joint bookrunner on Bank of China (BoC) Hong Kong Branch’s
              climate transition bond. BoC will use the funds to finance
              projects that support China’s goal of achieving carbon neutrality
              before 2060.
            </p>
          </>
        ),
      },
    },
  },
  {
    id: `pacific_ocean2`,
    x: 87.8269,
    y: 72.1152,
    size: 6.5,
    modal: {
      component: EntityComponentType.basic,
      props: {
        title: `Taiwan`,
        svg: "/assets/entities/pacific_ocean.svg",
        contentAlign: "right",
        color: "red_3",
        description: (
          <>
            <p>
              HSBC provided a $96 million green guarantee to Century Iron and
              Steel (CIS) — one of Taiwan’s largest steelmakers — to help it
              build the underwater infrastructure for Taipower Offshore Wind
              Project Phase II. CIS used its 30 years of steel manufacturing
              experience to devise a fast and convenient way to install and
              replace parts for wind projects. The island has 98 offshore wind
              farms in development and aims to generate 20% of its electricity
              from clean sources by 2025 – and we’re helping to finance the
              effort.
            </p>
          </>
        ),
      },
    },
  },
  {
    id: `australia`,
    x: 79.3781,
    y: 89.0022,
    size: 12,
    modal: {
      component: EntityComponentType.basic,
      props: {
        title: `Australia`,
        svg: "/assets/entities/australia.svg",
        contentAlign: "right",
        color: "red_3",
        description: (
          <>
            <p>
              HSBC is driving investment to improve water quality around
              Australia’s Great Barrier Reef – the world’s largest coral reef
              system. HSBC and the Queensland state government were the first
              private and public sector buyers of Reef Credits, which were
              pioneered by environmental markets project developer GreenCollar.
              The Reef Credits Scheme is the first water-quality market in the
              world and pays farmers and graziers for actions they take to
              reduce sediment, nutrients and contaminants in the water running
              off their lands.
            </p>
          </>
        ),
      },
    },
  },
];

export default entities;
