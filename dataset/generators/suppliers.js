const SUPPLIERS = [
    {
        code: "S001",
        name: "Northfield Trading",
        email: "contact@northfieldtrading.test",
        phone: "+91-9000000001",
        address: "Delhi, India",
        logo_path: "suppliers/northfield-trading.png"
    },
    {
        code: "S002",
        name: "Crownline Supply",
        email: "contact@crownlinesupply.test",
        phone: "+91-9000000002",
        address: "Mumbai, India",
        logo_path: "suppliers/crownline-supply.png"
    },
    {
        code: "S003",
        name: "Westbridge Distributors",
        email: "contact@westbridgedistributors.test",
        phone: "+91-9000000003",
        address: "Bengaluru, India",
        logo_path: "suppliers/westbridge-distributors.png"
    },
    {
        code: "S004",
        name: "Primeway Wholesale",
        email: "contact@primewaywholesale.test",
        phone: "+91-9000000004",
        address: "Hyderabad, India",
        logo_path: "suppliers/primeway-wholesale.png"
    },
    {
        code: "S005",
        name: "Silverstone Traders",
        email: "contact@silverstonetraders.test",
        phone: "+91-9000000005",
        address: "Chennai, India",
        logo_path: "suppliers/silverstone-traders.png"
    },
    {
        code: "S006",
        name: "Grandmark Supply",
        email: "contact@grandmarksupply.test",
        phone: "+91-9000000006",
        address: "Pune, India",
        logo_path: "suppliers/grandmark-supply.png"
    },
    {
        code: "S007",
        name: "Oakridge Distribution",
        email: "contact@oakridgedistribution.test",
        phone: "+91-9000000007",
        address: "Kolkata, India",
        logo_path: "suppliers/oakridge-distribution.png"
    },
    {
        code: "S008",
        name: "Clearview Wholesale",
        email: "contact@clearviewwholesale.test",
        phone: "+91-9000000008",
        address: "Ahmedabad, India",
        logo_path: "suppliers/clearview-wholesale.png"
    },
    {
        code: "S009",
        name: "Summitline Traders",
        email: "contact@summitlinetraders.test",
        phone: "+91-9000000009",
        address: "Jaipur, India",
        logo_path: "suppliers/summitline-traders.png"
    },
    {
        code: "S010",
        name: "Centralway Supply",
        email: "contact@centralwaysupply.test",
        phone: "+91-9000000010",
        address: "Lucknow, India",
        logo_path: "suppliers/centralway-supply.png"
    },

    {
        code: "S011",
        name: "Harborcrest Trading",
        email: "contact@harborcresttrading.test",
        phone: "+91-9000000011",
        address: "Surat, India",
        logo_path: "suppliers/harborcrest-trading.png"
    },
    {
        code: "S012",
        name: "Evermark Distribution",
        email: "contact@evermarkdistribution.test",
        phone: "+91-9000000012",
        address: "Nagpur, India",
        logo_path: "suppliers/evermark-distribution.png"
    },
    {
        code: "S013",
        name: "Greenfield Wholesale",
        email: "contact@greenfieldwholesale.test",
        phone: "+91-9000000013",
        address: "Indore, India",
        logo_path: "suppliers/greenfield-wholesale.png"
    },
    {
        code: "S014",
        name: "Rivermark Traders",
        email: "contact@rivermarktraders.test",
        phone: "+91-9000000014",
        address: "Bhopal, India",
        logo_path: "suppliers/rivermark-traders.png"
    },
    {
        code: "S015",
        name: "Pinecrest Supply",
        email: "contact@pinecrestsupply.test",
        phone: "+91-9000000015",
        address: "Chandigarh, India",
        logo_path: "suppliers/pinecrest-supply.png"
    },
    {
        code: "S016",
        name: "Eastgate Distributors",
        email: "contact@eastgatedistributors.test",
        phone: "+91-9000000016",
        address: "Patna, India",
        logo_path: "suppliers/eastgate-distributors.png"
    },
    {
        code: "S017",
        name: "Brightline Wholesale",
        email: "contact@brightlinewholesale.test",
        phone: "+91-9000000017",
        address: "Vadodara, India",
        logo_path: "suppliers/brightline-wholesale.png"
    },
    {
        code: "S018",
        name: "Lakeside Trading",
        email: "contact@lakesidetrading.test",
        phone: "+91-9000000018",
        address: "Coimbatore, India",
        logo_path: "suppliers/lakeside-trading.png"
    },
    {
        code: "S019",
        name: "Highland Supply",
        email: "contact@highlandsupply.test",
        phone: "+91-9000000019",
        address: "Kochi, India",
        logo_path: "suppliers/highland-supply.png"
    },
    {
        code: "S020",
        name: "Maplecrest Traders",
        email: "contact@maplecresttraders.test",
        phone: "+91-9000000020",
        address: "Ludhiana, India",
        logo_path: "suppliers/maplecrest-traders.png"
    },

    {
        code: "S021",
        name: "Stonebridge Supply",
        email: "contact@stonebridgesupply.test",
        phone: "+91-9000000021",
        address: "Nashik, India",
        logo_path: "suppliers/stonebridge-supply.png"
    },
    {
        code: "S022",
        name: "Cedarline Distribution",
        email: "contact@cedarlinedistribution.test",
        phone: "+91-9000000022",
        address: "Agra, India",
        logo_path: "suppliers/cedarline-distribution.png"
    },
    {
        code: "S023",
        name: "Meadowbrook Trading",
        email: "contact@meadowbrooktrading.test",
        phone: "+91-9000000023",
        address: "Dehradun, India",
        logo_path: "suppliers/meadowbrook-trading.png"
    },
    {
        code: "S024",
        name: "Goldenfield Wholesale",
        email: "contact@goldenfieldwholesale.test",
        phone: "+91-9000000024",
        address: "Mysuru, India",
        logo_path: "suppliers/goldenfield-wholesale.png"
    },
    {
        code: "S025",
        name: "Brookside Supply",
        email: "contact@brooksidesupply.test",
        phone: "+91-9000000025",
        address: "Rajkot, India",
        logo_path: "suppliers/brookside-supply.png"
    },
    {
        code: "S026",
        name: "Fairview Traders",
        email: "contact@fairviewtraders.test",
        phone: "+91-9000000026",
        address: "Amritsar, India",
        logo_path: "suppliers/fairview-traders.png"
    },
    {
        code: "S027",
        name: "Kingsway Distribution",
        email: "contact@kingswaydistribution.test",
        phone: "+91-9000000027",
        address: "Noida, India",
        logo_path: "suppliers/kingsway-distribution.png"
    },
    {
        code: "S028",
        name: "Parkview Wholesale",
        email: "contact@parkviewwholesale.test",
        phone: "+91-9000000028",
        address: "Gurugram, India",
        logo_path: "suppliers/parkview-wholesale.png"
    },
    {
        code: "S029",
        name: "Ridgeway Trading",
        email: "contact@ridgewaytrading.test",
        phone: "+91-9000000029",
        address: "Faridabad, India",
        logo_path: "suppliers/ridgeway-trading.png"
    },
    {
        code: "S030",
        name: "Springfield Supply",
        email: "contact@springfieldsupply.test",
        phone: "+91-9000000030",
        address: "Ghaziabad, India",
        logo_path: "suppliers/springfield-supply.png"
    },

    {
        code: "S031",
        name: "Crestview Traders",
        email: "contact@crestviewtraders.test",
        phone: "+91-9000000031",
        address: "Kanpur, India",
        logo_path: "suppliers/crestview-traders.png"
    },
    {
        code: "S032",
        name: "Northgate Wholesale",
        email: "contact@northgatewholesale.test",
        phone: "+91-9000000032",
        address: "Varanasi, India",
        logo_path: "suppliers/northgate-wholesale.png"
    },
    {
        code: "S033",
        name: "Westmark Supply",
        email: "contact@westmarksupply.test",
        phone: "+91-9000000033",
        address: "Meerut, India",
        logo_path: "suppliers/westmark-supply.png"
    },
    {
        code: "S034",
        name: "Southridge Distribution",
        email: "contact@southridgedistribution.test",
        phone: "+91-9000000034",
        address: "Vijayawada, India",
        logo_path: "suppliers/southridge-distribution.png"
    },
    {
        code: "S035",
        name: "Eastbrook Trading",
        email: "contact@eastbrooktrading.test",
        phone: "+91-9000000035",
        address: "Visakhapatnam, India",
        logo_path: "suppliers/eastbrook-trading.png"
    },
    {
        code: "S036",
        name: "Clearbrook Supply",
        email: "contact@clearbrooksupply.test",
        phone: "+91-9000000036",
        address: "Madurai, India",
        logo_path: "suppliers/clearbrook-supply.png"
    },
    {
        code: "S037",
        name: "Hillside Wholesale",
        email: "contact@hillsidewholesale.test",
        phone: "+91-9000000037",
        address: "Thiruvananthapuram, India",
        logo_path: "suppliers/hillside-wholesale.png"
    },
    {
        code: "S038",
        name: "Lakeshore Traders",
        email: "contact@lakeshoretraders.test",
        phone: "+91-9000000038",
        address: "Mangaluru, India",
        logo_path: "suppliers/lakeshore-traders.png"
    },
    {
        code: "S039",
        name: "Grandview Supply",
        email: "contact@grandviewsupply.test",
        phone: "+91-9000000039",
        address: "Jodhpur, India",
        logo_path: "suppliers/grandview-supply.png"
    },
    {
        code: "S040",
        name: "Oakline Distribution",
        email: "contact@oaklinedistribution.test",
        phone: "+91-9000000040",
        address: "Udaipur, India",
        logo_path: "suppliers/oakline-distribution.png"
    },

    {
        code: "S041",
        name: "Silverbrook Trading",
        email: "contact@silverbrooktrading.test",
        phone: "+91-9000000041",
        address: "Aurangabad, India",
        logo_path: "suppliers/silverbrook-trading.png"
    },
    {
        code: "S042",
        name: "Crownridge Supply",
        email: "contact@crownridgesupply.test",
        phone: "+91-9000000042",
        address: "Ranchi, India",
        logo_path: "suppliers/crownridge-supply.png"
    },
    {
        code: "S043",
        name: "Evergreen Wholesale",
        email: "contact@evergreenwholesale.test",
        phone: "+91-9000000043",
        address: "Bhubaneswar, India",
        logo_path: "suppliers/evergreen-wholesale.png"
    },
    {
        code: "S044",
        name: "Grandline Traders",
        email: "contact@grandlinetraders.test",
        phone: "+91-9000000044",
        address: "Guwahati, India",
        logo_path: "suppliers/grandline-traders.png"
    },
    {
        code: "S045",
        name: "Pinebridge Distribution",
        email: "contact@pinebridgedistribution.test",
        phone: "+91-9000000045",
        address: "Bengaluru, India",
        logo_path: "suppliers/pinebridge-distribution.png"
    },
    {
        code: "S046",
        name: "Harborline Supply",
        email: "contact@harborlinesupply.test",
        phone: "+91-9000000046",
        address: "Mumbai, India",
        logo_path: "suppliers/harborline-supply.png"
    },
    {
        code: "S047",
        name: "Meadowline Traders",
        email: "contact@meadowlinetraders.test",
        phone: "+91-9000000047",
        address: "Delhi, India",
        logo_path: "suppliers/meadowline-traders.png"
    },
    {
        code: "S048",
        name: "Westcrest Wholesale",
        email: "contact@westcrestwholesale.test",
        phone: "+91-9000000048",
        address: "Pune, India",
        logo_path: "suppliers/westcrest-wholesale.png"
    },
    {
        code: "S049",
        name: "Brightcrest Supply",
        email: "contact@brightcrestsupply.test",
        phone: "+91-9000000049",
        address: "Hyderabad, India",
        logo_path: "suppliers/brightcrest-supply.png"
    },
    {
        code: "S050",
        name: "Riverview Distribution",
        email: "contact@riverviewdistribution.test",
        phone: "+91-9000000050",
        address: "Chennai, India",
        logo_path: "suppliers/riverview-distribution.png"
    },

    {
        code: "S051",
        name: "Highcrest Trading",
        email: "contact@highcresttrading.test",
        phone: "+91-9000000051",
        address: "Kolkata, India",
        logo_path: "suppliers/highcrest-trading.png"
    },
    {
        code: "S052",
        name: "Northbridge Supply",
        email: "contact@northbridgesupply.test",
        phone: "+91-9000000052",
        address: "Ahmedabad, India",
        logo_path: "suppliers/northbridge-supply.png"
    },
    {
        code: "S053",
        name: "Clearcrest Wholesale",
        email: "contact@clearcrestwholesale.test",
        phone: "+91-9000000053",
        address: "Jaipur, India",
        logo_path: "suppliers/clearcrest-wholesale.png"
    },
    {
        code: "S054",
        name: "Stonefield Traders",
        email: "contact@stonefieldtraders.test",
        phone: "+91-9000000054",
        address: "Lucknow, India",
        logo_path: "suppliers/stonefield-traders.png"
    },
    {
        code: "S055",
        name: "Oakbridge Distribution",
        email: "contact@oakbridgedistribution.test",
        phone: "+91-9000000055",
        address: "Surat, India",
        logo_path: "suppliers/oakbridge-distribution.png"
    },
    {
        code: "S056",
        name: "Faircrest Supply",
        email: "contact@faircrestsupply.test",
        phone: "+91-9000000056",
        address: "Nagpur, India",
        logo_path: "suppliers/faircrest-supply.png"
    },
    {
        code: "S057",
        name: "Mapleline Wholesale",
        email: "contact@maplelinewholesale.test",
        phone: "+91-9000000057",
        address: "Indore, India",
        logo_path: "suppliers/mapleline-wholesale.png"
    },
    {
        code: "S058",
        name: "Cedarcrest Traders",
        email: "contact@cedarcresttraders.test",
        phone: "+91-9000000058",
        address: "Bhopal, India",
        logo_path: "suppliers/cedarcrest-traders.png"
    },
    {
        code: "S059",
        name: "Goldenridge Distribution",
        email: "contact@goldenridgedistribution.test",
        phone: "+91-9000000059",
        address: "Chandigarh, India",
        logo_path: "suppliers/goldenridge-distribution.png"
    },
    {
        code: "S060",
        name: "Springcrest Supply",
        email: "contact@springcrestsupply.test",
        phone: "+91-9000000060",
        address: "Patna, India",
        logo_path: "suppliers/springcrest-supply.png"
    },

    {
        code: "S061",
        name: "Ridgecrest Traders",
        email: "contact@ridgecresttraders.test",
        phone: "+91-9000000061",
        address: "Vadodara, India",
        logo_path: "suppliers/ridgecrest-traders.png"
    },
    {
        code: "S062",
        name: "Greenridge Wholesale",
        email: "contact@greenridgewholesale.test",
        phone: "+91-9000000062",
        address: "Coimbatore, India",
        logo_path: "suppliers/greenridge-wholesale.png"
    },
    {
        code: "S063",
        name: "Lakeside Distribution",
        email: "contact@lakesidedistribution.test",
        phone: "+91-9000000063",
        address: "Kochi, India",
        logo_path: "suppliers/lakeside-distribution.png"
    },
    {
        code: "S064",
        name: "Parkridge Supply",
        email: "contact@parkridgesupply.test",
        phone: "+91-9000000064",
        address: "Ludhiana, India",
        logo_path: "suppliers/parkridge-supply.png"
    },
    {
        code: "S065",
        name: "Hillcrest Trading",
        email: "contact@hillcresttrading.test",
        phone: "+91-9000000065",
        address: "Nashik, India",
        logo_path: "suppliers/hillcrest-trading.png"
    },
    {
        code: "S066",
        name: "Brookfield Wholesale",
        email: "contact@brookfieldwholesale.test",
        phone: "+91-9000000066",
        address: "Agra, India",
        logo_path: "suppliers/brookfield-wholesale.png"
    },
    {
        code: "S067",
        name: "Meadowcrest Supply",
        email: "contact@meadowcrestsupply.test",
        phone: "+91-9000000067",
        address: "Dehradun, India",
        logo_path: "suppliers/meadowcrest-supply.png"
    },
    {
        code: "S068",
        name: "Westfield Distribution",
        email: "contact@westfielddistribution.test",
        phone: "+91-9000000068",
        address: "Mysuru, India",
        logo_path: "suppliers/westfield-distribution.png"
    },
    {
        code: "S069",
        name: "Northcrest Traders",
        email: "contact@northcresttraders.test",
        phone: "+91-9000000069",
        address: "Rajkot, India",
        logo_path: "suppliers/northcrest-traders.png"
    },
    {
        code: "S070",
        name: "Clearfield Supply",
        email: "contact@clearfieldsupply.test",
        phone: "+91-9000000070",
        address: "Amritsar, India",
        logo_path: "suppliers/clearfield-supply.png"
    },

    {
        code: "S071",
        name: "Oakfield Wholesale",
        email: "contact@oakfieldwholesale.test",
        phone: "+91-9000000071",
        address: "Noida, India",
        logo_path: "suppliers/oakfield-wholesale.png"
    },
    {
        code: "S072",
        name: "Silvercrest Distribution",
        email: "contact@silvercrestdistribution.test",
        phone: "+91-9000000072",
        address: "Gurugram, India",
        logo_path: "suppliers/silvercrest-distribution.png"
    },
    {
        code: "S073",
        name: "Crownfield Traders",
        email: "contact@crownfieldtraders.test",
        phone: "+91-9000000073",
        address: "Faridabad, India",
        logo_path: "suppliers/crownfield-traders.png"
    },
    {
        code: "S074",
        name: "Grandcrest Supply",
        email: "contact@grandcrestsupply.test",
        phone: "+91-9000000074",
        address: "Ghaziabad, India",
        logo_path: "suppliers/grandcrest-supply.png"
    },
    {
        code: "S075",
        name: "Pinefield Wholesale",
        email: "contact@pinefieldwholesale.test",
        phone: "+91-9000000075",
        address: "Kanpur, India",
        logo_path: "suppliers/pinefield-wholesale.png"
    },
    {
        code: "S076",
        name: "Harborcrest Distribution",
        email: "contact@harborcrestdistribution.test",
        phone: "+91-9000000076",
        address: "Varanasi, India",
        logo_path: "suppliers/harborcrest-distribution.png"
    },
    {
        code: "S077",
        name: "Rivermark Supply",
        email: "contact@rivermarksupply.test",
        phone: "+91-9000000077",
        address: "Meerut, India",
        logo_path: "suppliers/rivermark-supply.png"
    },
    {
        code: "S078",
        name: "Brightfield Traders",
        email: "contact@brightfieldtraders.test",
        phone: "+91-9000000078",
        address: "Vijayawada, India",
        logo_path: "suppliers/brightfield-traders.png"
    },
    {
        code: "S079",
        name: "Eastfield Wholesale",
        email: "contact@eastfieldwholesale.test",
        phone: "+91-9000000079",
        address: "Visakhapatnam, India",
        logo_path: "suppliers/eastfield-wholesale.png"
    },
    {
        code: "S080",
        name: "Highfield Distribution",
        email: "contact@highfielddistribution.test",
        phone: "+91-9000000080",
        address: "Madurai, India",
        logo_path: "suppliers/highfield-distribution.png"
    },

    {
        code: "S081",
        name: "Stonecrest Supply",
        email: "contact@stonecrestsupply.test",
        phone: "+91-9000000081",
        address: "Thiruvananthapuram, India",
        logo_path: "suppliers/stonecrest-supply.png"
    },
    {
        code: "S082",
        name: "Cedarfield Traders",
        email: "contact@cedarfieldtraders.test",
        phone: "+91-9000000082",
        address: "Mangaluru, India",
        logo_path: "suppliers/cedarfield-traders.png"
    },
    {
        code: "S083",
        name: "Evercrest Wholesale",
        email: "contact@evercrestwholesale.test",
        phone: "+91-9000000083",
        address: "Jodhpur, India",
        logo_path: "suppliers/evercrest-wholesale.png"
    },
    {
        code: "S084",
        name: "Meadowfield Distribution",
        email: "contact@meadowfielddistribution.test",
        phone: "+91-9000000084",
        address: "Udaipur, India",
        logo_path: "suppliers/meadowfield-distribution.png"
    },
    {
        code: "S085",
        name: "Northshore Supply",
        email: "contact@northshoresupply.test",
        phone: "+91-9000000085",
        address: "Aurangabad, India",
        logo_path: "suppliers/northshore-supply.png"
    },
    {
        code: "S086",
        name: "Westshore Traders",
        email: "contact@westshoretraders.test",
        phone: "+91-9000000086",
        address: "Ranchi, India",
        logo_path: "suppliers/westshore-traders.png"
    },
    {
        code: "S087",
        name: "Southfield Wholesale",
        email: "contact@southfieldwholesale.test",
        phone: "+91-9000000087",
        address: "Bhubaneswar, India",
        logo_path: "suppliers/southfield-wholesale.png"
    },
    {
        code: "S088",
        name: "Eastshore Distribution",
        email: "contact@eastshoredistribution.test",
        phone: "+91-9000000088",
        address: "Guwahati, India",
        logo_path: "suppliers/eastshore-distribution.png"
    },
    {
        code: "S089",
        name: "Parkfield Supply",
        email: "contact@parkfieldsupply.test",
        phone: "+91-9000000089",
        address: "Bengaluru, India",
        logo_path: "suppliers/parkfield-supply.png"
    },
    {
        code: "S090",
        name: "Lakeshore Wholesale",
        email: "contact@lakeshorewholesale.test",
        phone: "+91-9000000090",
        address: "Mumbai, India",
        logo_path: "suppliers/lakeshore-wholesale.png"
    },

    {
        code: "S091",
        name: "Grandshore Traders",
        email: "contact@grandshoretraders.test",
        phone: "+91-9000000091",
        address: "Delhi, India",
        logo_path: "suppliers/grandshore-traders.png"
    },
    {
        code: "S092",
        name: "Crestfield Distribution",
        email: "contact@crestfielddistribution.test",
        phone: "+91-9000000092",
        address: "Pune, India",
        logo_path: "suppliers/crestfield-distribution.png"
    },
    {
        code: "S093",
        name: "Silverfield Supply",
        email: "contact@silverfieldsupply.test",
        phone: "+91-9000000093",
        address: "Hyderabad, India",
        logo_path: "suppliers/silverfield-supply.png"
    },
    {
        code: "S094",
        name: "Brightshore Wholesale",
        email: "contact@brightshorewholesale.test",
        phone: "+91-9000000094",
        address: "Chennai, India",
        logo_path: "suppliers/brightshore-wholesale.png"
    },
    {
        code: "S095",
        name: "Ridgefield Traders",
        email: "contact@ridgefieldtraders.test",
        phone: "+91-9000000095",
        address: "Kolkata, India",
        logo_path: "suppliers/ridgefield-traders.png"
    },
    {
        code: "S096",
        name: "Oakcrest Distribution",
        email: "contact@oakcrestdistribution.test",
        phone: "+91-9000000096",
        address: "Ahmedabad, India",
        logo_path: "suppliers/oakcrest-distribution.png"
    },
    {
        code: "S097",
        name: "Clearshore Supply",
        email: "contact@clearshoresupply.test",
        phone: "+91-9000000097",
        address: "Jaipur, India",
        logo_path: "suppliers/clearshore-supply.png"
    },
    {
        code: "S098",
        name: "Highland Wholesale",
        email: "contact@highlandwholesale.test",
        phone: "+91-9000000098",
        address: "Lucknow, India",
        logo_path: "suppliers/highland-wholesale.png"
    },
    {
        code: "S099",
        name: "Northline Traders",
        email: "contact@northlinetraders.test",
        phone: "+91-9000000099",
        address: "Surat, India",
        logo_path: "suppliers/northline-traders.png"
    },
    {
        code: "S100",
        name: "Westline Distribution",
        email: "contact@westlinedistribution.test",
        phone: "+91-9000000100",
        address: "Nagpur, India",
        logo_path: "suppliers/westline-distribution.png"
    }
];


module.exports = {
    SUPPLIERS
};