import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Page } from "../components/Page";

const Home = () => (
  <>
    <Head>
      <title>Andrew & Hannah</title>
    </Head>
    <Page title="Andrew and Hannah are getting married on the 9th of October 2021">
      <Link href="/wedding" passHref>
        <a>
          <picture className="inline-block shadow-2xl shadow-md">
            <source
              media="(max-width: 767px)"
              sizes="(max-width: 1534px) 100vw, 1534px"
              srcSet="/images/andrew_hannah_ar_1_1,c_fill,g_auto__c_scale,w_200.jpg 200w,
                      /images/andrew_hannah_ar_1_1,c_fill,g_auto__c_scale,w_381.jpg 381w,
                      /images/andrew_hannah_ar_1_1,c_fill,g_auto__c_scale,w_495.jpg 495w,
                      /images/andrew_hannah_ar_1_1,c_fill,g_auto__c_scale,w_594.jpg 594w,
                      /images/andrew_hannah_ar_1_1,c_fill,g_auto__c_scale,w_680.jpg 680w,
                      /images/andrew_hannah_ar_1_1,c_fill,g_auto__c_scale,w_764.jpg 764w,
                      /images/andrew_hannah_ar_1_1,c_fill,g_auto__c_scale,w_838.jpg 838w,
                      /images/andrew_hannah_ar_1_1,c_fill,g_auto__c_scale,w_908.jpg 908w,
                      /images/andrew_hannah_ar_1_1,c_fill,g_auto__c_scale,w_977.jpg 977w,
                      /images/andrew_hannah_ar_1_1,c_fill,g_auto__c_scale,w_1043.jpg 1043w,
                      /images/andrew_hannah_ar_1_1,c_fill,g_auto__c_scale,w_1106.jpg 1106w,
                      /images/andrew_hannah_ar_1_1,c_fill,g_auto__c_scale,w_1167.jpg 1167w,
                      /images/andrew_hannah_ar_1_1,c_fill,g_auto__c_scale,w_1234.jpg 1234w,
                      /images/andrew_hannah_ar_1_1,c_fill,g_auto__c_scale,w_1331.jpg 1331w,
                      /images/andrew_hannah_ar_1_1,c_fill,g_auto__c_scale,w_1415.jpg 1415w,
                      /images/andrew_hannah_ar_1_1,c_fill,g_auto__c_scale,w_1465.jpg 1465w,
                      /images/andrew_hannah_ar_1_1,c_fill,g_auto__c_scale,w_1518.jpg 1518w,
                      /images/andrew_hannah_ar_1_1,c_fill,g_auto__c_scale,w_1526.jpg 1526w,
                      /images/andrew_hannah_ar_1_1,c_fill,g_auto__c_scale,w_1525.jpg 1525w,
                      /images/andrew_hannah_ar_1_1,c_fill,g_auto__c_scale,w_1534.jpg 1534w"
            />
            <source
              media="(min-width: 768px) and (max-width: 991px)"
              sizes="(max-width: 1983px) 70vw, 1388px"
              srcSet="/images/andrew_hannah_ar_4_3,c_fill,g_auto__c_scale,w_538.jpg 538w,
                      /images/andrew_hannah_ar_4_3,c_fill,g_auto__c_scale,w_631.jpg 631w,
                      /images/andrew_hannah_ar_4_3,c_fill,g_auto__c_scale,w_717.jpg 717w,
                      /images/andrew_hannah_ar_4_3,c_fill,g_auto__c_scale,w_794.jpg 794w,
                      /images/andrew_hannah_ar_4_3,c_fill,g_auto__c_scale,w_872.jpg 872w,
                      /images/andrew_hannah_ar_4_3,c_fill,g_auto__c_scale,w_944.jpg 944w,
                      /images/andrew_hannah_ar_4_3,c_fill,g_auto__c_scale,w_1011.jpg 1011w,
                      /images/andrew_hannah_ar_4_3,c_fill,g_auto__c_scale,w_1076.jpg 1076w,
                      /images/andrew_hannah_ar_4_3,c_fill,g_auto__c_scale,w_1144.jpg 1144w,
                      /images/andrew_hannah_ar_4_3,c_fill,g_auto__c_scale,w_1204.jpg 1204w,
                      /images/andrew_hannah_ar_4_3,c_fill,g_auto__c_scale,w_1263.jpg 1263w,
                      /images/andrew_hannah_ar_4_3,c_fill,g_auto__c_scale,w_1323.jpg 1323w,
                      /images/andrew_hannah_ar_4_3,c_fill,g_auto__c_scale,w_1383.jpg 1383w,
                      /images/andrew_hannah_ar_4_3,c_fill,g_auto__c_scale,w_1388.jpg 1388w"
            />
            <source
              media="(min-width: 992px) and (max-width: 1199px)"
              sizes="(max-width: 2400px) 60vw, 1440px"
              srcSet="/images/andrew_hannah_ar_16_9,c_fill,g_auto__c_scale,w_596.jpg 596w,
                      /images/andrew_hannah_ar_16_9,c_fill,g_auto__c_scale,w_706.jpg 706w,
                      /images/andrew_hannah_ar_16_9,c_fill,g_auto__c_scale,w_809.jpg 809w,
                      /images/andrew_hannah_ar_16_9,c_fill,g_auto__c_scale,w_898.jpg 898w,
                      /images/andrew_hannah_ar_16_9,c_fill,g_auto__c_scale,w_993.jpg 993w,
                      /images/andrew_hannah_ar_16_9,c_fill,g_auto__c_scale,w_1076.jpg 1076w,
                      /images/andrew_hannah_ar_16_9,c_fill,g_auto__c_scale,w_1155.jpg 1155w,
                      /images/andrew_hannah_ar_16_9,c_fill,g_auto__c_scale,w_1233.jpg 1233w,
                      /images/andrew_hannah_ar_16_9,c_fill,g_auto__c_scale,w_1315.jpg 1315w,
                      /images/andrew_hannah_ar_16_9,c_fill,g_auto__c_scale,w_1388.jpg 1388w,
                      /images/andrew_hannah_ar_16_9,c_fill,g_auto__c_scale,w_1420.jpg 1420w,
                      /images/andrew_hannah_ar_16_9,c_fill,g_auto__c_scale,w_1440.jpg 1440w"
            />
            <img
              alt="Andrew and Hannah"
              sizes="(max-width: 7000px) 40vw, 2800px"
              src="/images/andrew_hannah_c_scale,w_2800.jpg"
              srcSet="/images/andrew_hannah_c_scale,w_480.jpg 480w,
                      /images/andrew_hannah_c_scale,w_696.jpg 696w,
                      /images/andrew_hannah_c_scale,w_890.jpg 890w,
                      /images/andrew_hannah_c_scale,w_1040.jpg 1040w,
                      /images/andrew_hannah_c_scale,w_1185.jpg 1185w,
                      /images/andrew_hannah_c_scale,w_1324.jpg 1324w,
                      /images/andrew_hannah_c_scale,w_1454.jpg 1454w,
                      /images/andrew_hannah_c_scale,w_1576.jpg 1576w,
                      /images/andrew_hannah_c_scale,w_1692.jpg 1692w,
                      /images/andrew_hannah_c_scale,w_1819.jpg 1819w,
                      /images/andrew_hannah_c_scale,w_1926.jpg 1926w,
                      /images/andrew_hannah_c_scale,w_2037.jpg 2037w,
                      /images/andrew_hannah_c_scale,w_2142.jpg 2142w,
                      /images/andrew_hannah_c_scale,w_2332.jpg 2332w,
                      /images/andrew_hannah_c_scale,w_2437.jpg 2437w,
                      /images/andrew_hannah_c_scale,w_2542.jpg 2542w,
                      /images/andrew_hannah_c_scale,w_2645.jpg 2645w,
                      /images/andrew_hannah_c_scale,w_2749.jpg 2749w,
                      /images/andrew_hannah_c_scale,w_2784.jpg 2784w,
                      /images/andrew_hannah_c_scale,w_2800.jpg 2800w"
            />
          </picture>
        </a>
      </Link>
    </Page>
  </>
);

export default Home;
