import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Page } from "../components/Page";
import { Text, Typography } from "../components/Text";

const TravelAndStay = () => (
  <>
    <Head>
      <title>Travel & stay | Andrew & Hannah</title>
    </Head>

    <Page title="Travel & stay">
      <Text tag="h2" typography={Typography.HeaderMedium}>
        Travel
      </Text>

      <Text>
        Nancarrow is 4 miles north of Truro. It’s also close to Newquay and lots
        of other lovely little Cornish villages.
      </Text>

      <Text>
        You can access it easily via country lanes from Truro or via the A30.
      </Text>

      <Text tag="h3" typography={Typography.HeaderSmall}>
        Location
      </Text>

      <Text>
        <Link href="https://goo.gl/maps/qzVAJQVPDKiDwGri8/" passHref>
          <a>
            Nancarrow Farm
            <br />
            Zelah
            <br />
            Nr Truro
            <br />
            TR4 9DQ
          </a>
        </Link>
      </Text>

      <Text tag="h3" typography={Typography.HeaderSmall}>
        Parking
      </Text>

      <Text>
        Parking is limited at Nancarrow so if you do decide to drive, do
        consider car sharing where possible.
      </Text>

      <Text tag="h3" typography={Typography.HeaderSmall}>
        Taxis
      </Text>

      <Text>
        Mobile phone signal is limited at the venue and there isn’t a facility
        to make phone calls on site, so do book a taxi in advance if you want to
        be picked up at the end of the night. Nancarrow recommend booking with{" "}
        <Link href="https://www.a2btaxistruro.com/" passHref>
          <a>A2B Taxis</a>
        </Link>
        .
      </Text>

      <Text tag="h3" typography={Typography.HeaderSmall}>
        Rail
      </Text>

      <Text>
        The nearest train station is{" "}
        <Link
          href="https://www.gwr.com/plan-journey/stations-and-routes/truro/"
          passHref
        >
          <a>Truro</a>
        </Link>
        . A taxi from here takes about 20 minutes and there are usually cars
        waiting outside the station ready to go.
      </Text>

      <Text tag="h3" typography={Typography.HeaderSmall}>
        Air
      </Text>

      <Text>
        <Link href="https://www.cornwallairportnewquay.com/" passHref>
          <a>Cornwall Airport Newquay</a>
        </Link>{" "}
        is the main airport for Cornwall, located at{" "}
        <Link href="https://goo.gl/maps/jEZ1voRnu2vNvdW49/" passHref>
          <a>Mawgan in Pydar</a>
        </Link>
        , outside Newquay. A taxi from here takes approximately 30 minutes. Car
        hire is also available from{" "}
        <Link
          href="https://www.hertz.co.uk/p/car-hire/uk/newquay/newquay-international-airport/"
          passHref
        >
          <a>Hertz</a>
        </Link>{" "}
        or{" "}
        <Link
          href="https://www.europcar.co.uk/en-gb/stations/united-kingdom/newquay-airport/"
          passHref
        >
          <a>Europcar</a>
        </Link>
        .
      </Text>

      <Text tag="h2" typography={Typography.HeaderMedium}>
        Where to stay
      </Text>

      <Text>
        There are lots of lovely places to stay near the venue (and further
        afield if you’re planning a holiday while you’re in Cornwall).
      </Text>

      <Text tag="h3" typography={Typography.HeaderSmall}>
        St Agnes
      </Text>

      <Text>
        St Agnes is a pretty coastal village 6 miles away from Nancarrow and has
        a good range of accommodation, beaches, pubs and restaurants.{" "}
        <Link href="https://visitstagnes.com/stay/" passHref>
          <a>You can find out all you need to know on their website</a>
        </Link>
        .
      </Text>

      <Text tag="h3" typography={Typography.HeaderSmall}>
        Self-catering
      </Text>

      <ul className="grid gap-4 grid-flow-row grid-cols-1 justify-items-center mt-8 sm:gap-8 sm:grid-cols-2 md:gap-16 md:grid-cols-3">
        <Text tag="li">
          <Link
            href="https://www.airbnb.co.uk/s/Zelah--Truro--United-Kingdom/homes/"
            passHref
          >
            <a>Airbnb</a>
          </Link>
        </Text>
        <Text tag="li">
          <Link href="https://www.classic.co.uk/" passHref>
            <a>Classic Cottages</a>
          </Link>
        </Text>
        <Text tag="li">
          <Link href="https://cornishboltholes.co.uk/" passHref>
            <a>Cornish Boltholes</a>
          </Link>
          <br />
          St Agnes (6 miles)
        </Text>
        <Text tag="li">
          <Link href="https://www.cottages.com/" passHref>
            <a>Cottages</a>
          </Link>
          <br />
          (see Dover Row cottage in Zelah)
        </Text>
        <Text tag="li">
          <Link href="https://www.cusgarneorganicfarm.co.uk/barns/" passHref>
            <a>Cusgarne Barns</a>
          </Link>
          <br />
          Truro (11 miles)
        </Text>
        <Text tag="li">
          <Link href="https://www.duchyholidays.co.uk/" passHref>
            <a>Duchy Holidays</a>
          </Link>
        </Text>
        <Text tag="li">
          <Link href="https://www.farmstay.co.uk/" passHref>
            <a>Farm Stay</a>
          </Link>
        </Text>
        <Text tag="li">
          <Link href="https://www.holidaycottages.co.uk/" passHref>
            <a>Holiday Cottages</a>
          </Link>
        </Text>
        <Text tag="li">
          <Link href="https://www.holidaylettings.co.uk/" passHref>
            <a>Holiday Lettings</a>
          </Link>
          <br />
          (see Ventonwyn Lodge, Nr Perranporth)
        </Text>
        <Text tag="li">
          <Link href="https://www.lambriggancourt.com/" passHref>
            <a>Lambriggan Court</a>
          </Link>
          <br />
          Lambriggan (3 miles)
        </Text>
        <Text tag="li">
          <Link href="https://www.callestockcourtyard.com/" passHref>
            <a>Little Callestock Farm</a>
          </Link>
          <br />
          Zelah (1 mile)
        </Text>
        <Text tag="li">
          Oakridge Farm
          <br />
          Bodmin Road, Goonhavern, Cornwall, TR4 9QG
          <br />
          01872 540596 (3 miles)
        </Text>
        <Text tag="li">
          <Link href="https://www.tresillianhouse.co.uk" passHref>
            <a>Tresillian House</a>
          </Link>
          <br />
          Newquay (8 mile)
        </Text>
        <Text tag="li">
          <Link href="https://www.trevessafarm.co.uk/" passHref>
            <a>Trevessa Farm</a>
          </Link>
          <br />
          Mitchell (6 mile)
        </Text>
        <Text tag="li">
          <Link
            href="https://www.uniquehomestays.com/self-catering/uk/cornwall/"
            passHref
          >
            <a>Unique Homestays</a>
          </Link>
        </Text>
      </ul>

      <Text tag="h3" typography={Typography.HeaderSmall}>
        Bed & Breakfasts
      </Text>

      <ul className="grid gap-4 grid-flow-row grid-cols-1 justify-items-center mt-8 sm:gap-8 sm:grid-cols-2 md:gap-16 md:grid-cols-3">
        <Text tag="li">
          <Link href="https://www.bodreanmanorfarm.co.uk/" passHref>
            <a>Bodrean Manor Farm</a>
          </Link>
          <br />
          Truro (6 miles)
        </Text>
        <Text tag="li">
          <Link href="https://www.trurotownhouse.com/" passHref>
            <a>The Townhouse</a>
          </Link>
          <br />
          Truro (4 miles)
        </Text>
        <Text tag="li">
          <Link href="http://www.trurolodge.co.uk/" passHref>
            <a>Truro Lodge</a>
          </Link>
          <br />
          Truro (4 miles)
        </Text>
      </ul>

      <Text tag="h3" typography={Typography.HeaderSmall}>
        Hotels
      </Text>

      <ul className="grid gap-4 grid-flow-row grid-cols-1 justify-items-center mt-8 sm:gap-8 sm:grid-cols-2 md:gap-16 md:grid-cols-3">
        <Text tag="li">
          <Link href="https://thealverton.co.uk/" passHref>
            <a>The Alverton</a>
          </Link>
          <br />
          Truro (4 miles)
        </Text>
        <Text tag="li">
          <Link href="https://www.countyarmstruro.co.uk/" passHref>
            <a>The County Arms</a>
          </Link>
          <br />
          Truro (4 miles)
        </Text>
        <Text tag="li">
          <Link href="https://www.manningshotels.co.uk/" passHref>
            <a>Mannings</a>
          </Link>
          <br />
          Truro (4 miles)
        </Text>
        <Text tag="li">
          <Link
            href="https://www.premierinn.com/gb/en/hotels/england/cornwall/truro/truro.html"
            passHref
          >
            <a>Premier Inn</a>
          </Link>
          <br />
          Truro (8 miles)
        </Text>
      </ul>

      <Text tag="h3" typography={Typography.HeaderSmall}>
        Camping & Glamping
      </Text>

      <ul className="grid gap-4 grid-flow-row grid-cols-1 justify-items-center mt-8 sm:gap-8 sm:grid-cols-2 md:gap-16 md:grid-cols-3">
        <Text tag="li">
          <Link href="https://www.summervalley.co.uk/" passHref>
            <a>Summer Valley Touring Park</a>
          </Link>
          <br />
          Truro (2 miles)
        </Text>
        <Text tag="li">
          <Link href="https://www.trevella.co.uk/" passHref>
            <a>Trevella Park</a>
          </Link>
          <br />
          Newquay (8 miles)
        </Text>
        <Text tag="li">
          <Link
            href="https://www.caravanclub.co.uk/certificated-locations/england/cornwall/truro/trevellan-farm-cottage/"
            passHref
          >
            <a>Trevellan Farm Cottage</a>
          </Link>
          <br />
          Truro (4 miles)
        </Text>
      </ul>

      <Text tag="h2" typography={Typography.HeaderMedium}>
        Make it a holiday
      </Text>

      <Text>
        If you’re planning to extend your stay in Cornwall, here are a few of
        our favourite places (as well as a few we’d love to try).
      </Text>

      <Text tag="h3" typography={Typography.HeaderSmall}>
        Things to do
      </Text>

      <ul className="grid gap-4 grid-flow-row grid-cols-1 justify-items-center mt-8 sm:gap-8 sm:grid-cols-2 md:gap-16 md:grid-cols-3">
        <Text tag="li">
          <Link
            href="https://www.tate.org.uk/visit/tate-st-ives/barbara-hepworth-museum-and-sculpture-garden/"
            passHref
          >
            <a>Barbara Hepworth Museum and Sculpture Garden</a>
          </Link>
          <br />
          St Ives
        </Text>
        <Text tag="li">
          <Link href="https://www.edenproject.com/" passHref>
            <a>Eden Project</a>
          </Link>
          <br />
          St Austell
        </Text>
        <Text tag="li">
          <Link href="https://www.nationaltrust.org.uk/lanhydrock/" passHref>
            <a>Lanhydrock</a>
          </Link>
          <br />
          Bodmin
        </Text>
        <Text tag="li">
          <Link href="https://www.tate.org.uk/visit/tate-st-ives/" passHref>
            <a>Tate St Ives</a>
          </Link>
          <br />
          St Ives
        </Text>
        <Text tag="li">
          <Link href="https://www.tremenheere.co.uk/" passHref>
            <a>Tremenheere Sculpture Gardens</a>
          </Link>
          <br />
          Penzance
        </Text>
      </ul>

      <Text tag="h3" typography={Typography.HeaderSmall}>
        Food and drink
      </Text>

      <ul className="grid gap-4 grid-flow-row grid-cols-1 justify-items-center mt-8 sm:gap-8 sm:grid-cols-2 md:gap-16 md:grid-cols-3">
        <Text tag="li">
          <Link href="https://appletonsrestaurant.com/" passHref>
            <a>Appleton’s</a>
          </Link>
          <br />
          Fowey
        </Text>
        <Text tag="li">
          <Link href="https://barnabyspadstow.com/" passHref>
            <a>Barnaby’s</a>
          </Link>
          <br />
          Padstow
        </Text>
        <Text tag="li">
          <Link href="https://www.beaconcoffee.co.uk/" passHref>
            <a>Beacon Coffee</a>
          </Link>
          <br />
          Falmouth
        </Text>
        <Text tag="li">
          <Link href="https://bintwo.com/" passHref>
            <a>BinTwo</a>
          </Link>
          <br />
          Padstow
        </Text>
        <Text tag="li">
          <Link href="https://www.blowersplace.com/" passHref>
            <a>Blower’s Place</a>
          </Link>
          <br />
          Porthleven
        </Text>
        <Text tag="li">
          <Link href="https://www.the-boathouse-newquay.co.uk/" passHref>
            <a>The Boathouse</a>
          </Link>
          <br />
          Newquay
        </Text>
        <Text tag="li">
          <Link href="https://www.paul-ainsworth.co.uk/cafferojano/" passHref>
            <a>Caffè Rojano</a>
          </Link>
          <br />
          Padstow
        </Text>
        <Text tag="li">
          <Link href="https://www.camelvalley.com/" passHref>
            <a>Camel Valley</a>
          </Link>
          <br />
          Nanstallon
        </Text>
        <Text tag="li">
          <Link href="https://www.coombesheadfarm.co.uk/" passHref>
            <a>Coombeshead Farm</a>
          </Link>
          <br />
          Lewannick
        </Text>
        <Text tag="li">
          <Link
            href="https://www.rickstein.com/restaurants/the-cornish-arms/"
            passHref
          >
            <a>The Cornish Arms</a>
          </Link>
          <br />
          St Merryn
        </Text>
        <Text tag="li">
          <Link href="https://www.thecornishpizzacompany.co.uk/" passHref>
            <a>The Cornish Pizza Company</a>
          </Link>
          <br />
          St Agnes
        </Text>
        <Text tag="li">
          <Link href="https://www.thecovemaenporth.co.uk/" passHref>
            <a>The Cove</a>
          </Link>
          <br />
          Maenporth Beach
        </Text>
        <Text tag="li">
          <Link href="https://www.fitzroycornwall.com/" passHref>
            <a>Fitzroy</a>
          </Link>
          <br />
          Fowey
        </Text>
        <Text tag="li">
          <Link href="https://thefoxsrevenge.com/" passHref>
            <a>The Fox’s Revenge</a>
          </Link>
          <br />
          Summercourt
        </Text>
        <Text tag="li">
          <Link href="https://greenspadstow.co.uk/" passHref>
            <a>Greens of Padstow</a>
          </Link>
          <br />
          Padstow
        </Text>
        <Text tag="li">
          <Link href="http://www.gurnardshead.co.uk/" passHref>
            <a>The Gurnard’s Head</a>
          </Link>
          <br />
          Zennor, St Ives
        </Text>
        <Text tag="li">
          <Link href="https://harbourbrewing.com/" passHref>
            <a>Harbour Brewing Co</a>
          </Link>
          <br />
          Bodmin
        </Text>
        <Text tag="li">
          <Link
            href="https://www.origincoffee.co.uk/pages/origin-coffee-porthleven/"
            passHref
          >
            <a>Harbour Head</a>
          </Link>
          <br />
          Porthleven
        </Text>
        <Text tag="li">
          <Link href="https://www.hiddenhut.co.uk/" passHref>
            <a>The Hidden Hut</a>
          </Link>
          <br />
          Porthcurnick Beach
        </Text>
        <Text tag="li">
          <Link href="https://kotarestaurant.co.uk/" passHref>
            <a>Kota</a>
          </Link>
          <br />
          Porthleven
        </Text>
        <Text tag="li">
          <Link href="https://www.thelittleginshack.co.uk/" passHref>
            <a>The Little Gin Shack</a>
          </Link>
          <br />
          Wadebridge, Padstow
        </Text>
        <Text tag="li">
          <Link
            href="https://www.thepighotel.com/at-harlyn-bay/eat-padstow/the-lobster-shed/"
            passHref
          >
            <a>The Lobster Shed</a>
          </Link>
          <br />
          Padstow
        </Text>
        <Text tag="li">
          <Link href="https://www.theloftrestaurantandterrace.co.uk/" passHref>
            <a>The Loft Restaurant & Terrace</a>
          </Link>
          <br />
          St Ives
        </Text>
        <Text tag="li">
          <Link href="https://www.paul-ainsworth.co.uk/the-mariners/" passHref>
            <a>The Mariners</a>
          </Link>
          <br />
          Rock
        </Text>
        <Text tag="li">
          <Link href="https://www.restaurantmine.co.uk/" passHref>
            <a>MINE</a>
          </Link>
          <br />
          Falmouth
        </Text>
        <Text tag="li">
          <Link href="https://www.moomaidofzennor.com/" passHref>
            <a>Moomaid of Zennor</a>
          </Link>
          <br />
          St Ives and Porthtowan
        </Text>
        <Text tag="li">
          <Link href="https://www.newyardrestaurant.co.uk/" passHref>
            <a>New Yard Restaurant</a>
          </Link>
          <br />
          Helston
        </Text>
        <Text tag="li">
          <Link href="https://www.theoldforgelelant.co.uk/" passHref>
            <a>The Old Forge</a>
          </Link>
          <br />
          Lelant, Hayle
        </Text>
        <Text tag="li">
          <Link href="https://www.onefishstreet.co.uk/" passHref>
            <a>One Fish Street</a>
          </Link>
          <br />
          St Ives
        </Text>
        <Text tag="li">
          <Link href="https://outlaws.co.uk/restaurants/fish-kitchen/" passHref>
            <a>Outlaw’s Fish Kitchen</a>
          </Link>
          <br />
          Port Isaac
        </Text>
        <Text tag="li">
          <Link href="https://outlaws.co.uk/restaurants/new-road/" passHref>
            <a>Outlaw’s New Road</a>
          </Link>
          <br />
          Port Isaac
        </Text>
        <Text tag="li">
          <Link href="https://www.padstowbrewing.co.uk/" passHref>
            <a>Padstow Brewing Company</a>
          </Link>
          <br />
          Padstow
        </Text>
        <Text tag="li">
          <Link href="https://www.paul-ainsworth.co.uk/number6/" passHref>
            <a>Paul Ainsworth at No. 6</a>
          </Link>
          <br />
          Padstow
        </Text>
        <Text tag="li">
          <Link href="https://pavilionbakery.com/pages/newquay/" passHref>
            <a>Pavillion Bakery</a>
          </Link>
          <br />
          Newquay
        </Text>
        <Text tag="li">
          <Link href="https://www.thepighotel.com/at-harlyn-bay/" passHref>
            <a>The Pig at Harlyn Bay</a>
          </Link>
          <br />
          Padstow
        </Text>
        <Text tag="li">
          <Link href="https://pintxofowey.co.uk/" passHref>
            <a>Pintxo</a>
          </Link>
          <br />
          Fowey
        </Text>
        <Text tag="li">
          <Link href="https://www.instagram.com/pollen_truro/" passHref>
            <a>Pollen</a>
          </Link>
          <br />
          Truro
        </Text>
        <Text tag="li">
          <Link href="https://porthmeor-beach.co.uk/" passHref>
            <a>Porthmeor Café</a>
          </Link>
          <br />
          St Ives
        </Text>
        <Text tag="li">
          <Link href="https://prawnonthelawn.com/restaurant/padstow/" passHref>
            <a>Prawn on the Farm</a>
          </Link>
          <br />
          Padstow
        </Text>
        <Text tag="li">
          <Link href="https://redelephantbeercellar.co.uk/" passHref>
            <a>Red Elephant Beer Cellar</a>
          </Link>
          <br />
          Truro
        </Text>
        <Text tag="li">
          <Link
            href="https://www.rickstein.com/eat-with-us/the-seafood-restaurant/"
            passHref
          >
            <a>Rick Stein’s Seafood Restaurant</a>
          </Link>
          <br />
          Padstow
        </Text>
        <Text tag="li">
          <Link href="https://www.therocketstore.co.uk/" passHref>
            <a>The Rocket Store</a>
          </Link>
          <br />
          Boscastle
        </Text>
        <Text tag="li">
          <Link href="http://rumandcrabshack.com/" passHref>
            <a>The Rum & Crab Shack</a>
          </Link>
          <br />
          St Ives
        </Text>
        <Text tag="li">
          <Link href="https://www.stivesliquor.co/searoom/" passHref>
            <a>The Searoom Bar & Restaurant</a>
          </Link>
          <br />
          St Ives
        </Text>
        <Text tag="li">
          <Link href="https://www.schoonerscornwall.com/" passHref>
            <a>Schooners</a>
          </Link>
          <br />
          St Agnes
        </Text>
        <Text tag="li">
          <Link href="https://seafoodbar.verdantbrewing.co/" passHref>
            <a>The Seafood Bar</a>
          </Link>
          <br />
          Falmouth
        </Text>
        <Text tag="li">
          <Link href="https://www.sourcekitchen.co.uk/" passHref>
            <a>Source Kitchen</a>
          </Link>
          <br />
          St Ives
        </Text>
        <Text tag="li">
          <Link
            href="https://www.rickstein.com/restaurants/st-petrocs-bistro/"
            passHref
          >
            <a>St Petroc’s Bistro</a>
          </Link>
          <br />
          Padstow
        </Text>
        <Text tag="li">
          <Link href="http://www.sttudyinn.com/" passHref>
            <a>St Tudy Inn</a>
          </Link>
          <br />
          Churchtown
        </Text>
        <Text tag="li">
          <Link href="https://www.surfsidepolzeath.com/feast/" passHref>
            <a>Surfside Polzeath</a>
          </Link>
          <br />
          Wadebridge
        </Text>
        <Text tag="li">
          <Link href="https://www.templecornwall.com/" passHref>
            <a>Temple</a>
          </Link>
          <br />
          Bude
        </Text>
        <Text tag="li">
          <Link href="https://tinnersarms.com/" passHref>
            <a>The Tinners Arms</a>
          </Link>
          <br />
          St Ives
        </Text>
        <Text tag="li">
          <Link href="https://www.totti.uk/" passHref>
            <a>Totti</a>
          </Link>
          <br />
          Penzance
        </Text>
        <Text tag="li">
          <Link href="https://trevibbanmill.com/" passHref>
            <a>Trevibban Mill Vineyard</a>
          </Link>
          <br />
          Padstow
        </Text>
        <Text tag="li">
          <Link
            href="https://www.origincoffee.co.uk/pages/origin-coffee-penryn/"
            passHref
          >
            <a>The Warehouse</a>
          </Link>
          <br />
          Penryn
        </Text>
        <Text tag="li">
          <Link href="https://yallahcoffee.co.uk/" passHref>
            <a>Yallah Café</a>
          </Link>
          <br />
          St Ives
        </Text>
      </ul>

      <Text tag="h3" typography={Typography.HeaderSmall}>
        Accommodation
      </Text>

      <ul className="grid gap-4 grid-flow-row grid-cols-1 justify-items-center mt-8 sm:gap-8 sm:grid-cols-2 md:gap-16 md:grid-cols-3">
        <Text tag="li">
          <Link
            href="https://www.uniquehomestays.com/self-catering/uk/cornwall/st-ives/alba-beach-house/"
            passHref
          >
            <a>Alba Beach House</a>
          </Link>
          <br />
          St Ives
        </Text>
        <Text tag="li">
          <Link href="https://www.chapelhousepz.co.uk/" passHref>
            <a>Chapel House</a>
          </Link>
          <br />
          Penzance
        </Text>
        <Text tag="li">
          <Link href="https://www.coombesheadfarm.co.uk/" passHref>
            <a>Coombeshead Farm</a>
          </Link>
          <br />
          Lewannick
        </Text>
        <Text tag="li">
          <Link href="https://www.harbourviewonline.co.uk/" passHref>
            <a>Harbour View House</a>
          </Link>
          <br />
          St Ives
        </Text>
        <Text tag="li">
          <Link href="https://www.headlandhousehotel.co.uk/" passHref>
            <a>Headland House</a>
          </Link>
          <br />
          St Ives
        </Text>
        <Text tag="li">
          <Link href="https://tresanton.com/home/" passHref>
            <a>Hotel Tresanton</a>
          </Link>
          <br />
          St Mawes
        </Text>
        <Text tag="li">
          <Link href="https://www.moylesfarm.co.uk/" passHref>
            <a>Moyles Farm</a>
          </Link>
          <br />
          Polzeath
        </Text>
        <Text tag="li">
          <Link href="https://www.tregullandandco.co.uk/pentire/" passHref>
            <a>Pentire Penthouse</a>
          </Link>
          <br />
          Pentire, Newquay
        </Text>
        <Text tag="li">
          <Link href="https://www.latitude50.co.uk/" passHref>
            <a>Latitude50</a>
          </Link>
        </Text>
        <Text tag="li">
          <Link href="https://www.primroseonline.co.uk/" passHref>
            <a>Primrose House</a>
          </Link>
          <br />
          St Ives
        </Text>
        <Text tag="li">
          <Link href="https://www.thepighotel.com/at-harlyn-bay/" passHref>
            <a>The Pig at Harlyn Bay</a>
          </Link>
          <br />
          Padstow
        </Text>
        <Text tag="li">
          <Link
            href="https://www.stives-studios.co.uk/rooms/samphire-studio/"
            passHref
          >
            <a>Samphire Studio</a>
          </Link>
          <br />
          St Ives
        </Text>
        <Text tag="li">
          <Link
            href="https://www.stives-studios.co.uk/rooms/sands-studio/"
            passHref
          >
            <a>Sands Studio</a>
          </Link>
          <br />
          St Ives
        </Text>
        <Text tag="li">
          <Link href="https://www.thesandyduck.co.uk/" passHref>
            <a>The Sandy Duck</a>
          </Link>
          <br />
          Falmouth
        </Text>
        <Text tag="li">
          <Link href="https://trelowarren.com/" passHref>
            <a>Trelowarren</a>
          </Link>
          <br />
          Helston
        </Text>
        <Text tag="li">
          <Link href="https://www.trevosehouse.co.uk/" passHref>
            <a>Trevose Harbour House</a>
          </Link>
          <br />
          St Ives
        </Text>
      </ul>
    </Page>
  </>
);

export default TravelAndStay;
