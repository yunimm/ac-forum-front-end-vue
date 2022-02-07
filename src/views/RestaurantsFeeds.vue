<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      最新動態
    </h1>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <NewestRestaurants :rest="restaurants"/>
        <!-- 最新餐廳 NewestRestaurants -->
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComments :comments="comments"/>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs.vue'
import NewestRestaurants from './../components/NewestRestaurants.vue'
import NewestComments from './../components/NewestComments.vue'
const dummyData = 
  {
    "restaurants": [
        {
            "id": 1,
            "name": "Demario Kihn",
            "tel": "1-649-387-2568 x52703",
            "address": "3027 Vanessa Views",
            "opening_hours": "08:00",
            "description": "Voluptatem autem vel.\nDeserunt expedita voluptatem esse laudantium.\nLaborum ea error quae consequatur ullam atque labore distinctio.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=56.134166118954944",
            "viewCounts": 0,
            "createdAt": "2022-01-29T14:48:43.000Z",
            "updated.At": "2022-01-29T14:48:43.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-01-29T14:48:43.000Z",
                "updatedAt": "2022-01-29T14:48:43.000Z"
            }
        },
        {
            "id": 2,
            "name": "Felix Schaefer",
            "tel": "192.785.0250 x0601",
            "address": "9212 Roslyn Park",
            "opening_hours": "08:00",
            "description": "Ea quis vitae nihil unde quo sunt blanditiis est.\nEt officia et facere vitae repellat repellendus sit magnam.\nMagni ullam quia.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=40.63413059059406",
            "viewCounts": 0,
            "createdAt": "2022-01-29T14:48:43.000Z",
            "updatedAt": "2022-01-29T14:48:43.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-01-29T14:48:43.000Z",
                "updatedAt": "2022-01-29T14:48:43.000Z"
            }
        },
        {
            "id": 3,
            "name": "Josue Dare",
            "tel": "(235) 637-2356 x402",
            "address": "298 Wolf Harbor",
            "opening_hours": "08:00",
            "description": "et",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=59.60231473468964",
            "viewCounts": 0,
            "createdAt": "2022-01-29T14:48:43.000Z",
            "updatedAt": "2022-01-29T14:48:43.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-01-29T14:48:43.000Z",
                "updatedAt": "2022-01-29T14:48:43.000Z"
            }
        },
        {
            "id": 4,
            "name": "Mrs. Vergie Rippin",
            "tel": "239-009-9305 x41226",
            "address": "68346 Michaela Ranch",
            "opening_hours": "08:00",
            "description": "ut explicabo est",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=8.447895179724263",
            "viewCounts": 0,
            "createdAt": "2022-01-29T14:48:43.000Z",
            "updatedAt": "2022-01-29T14:48:43.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-01-29T14:48:43.000Z",
                "updatedAt": "2022-01-29T14:48:43.000Z"
            }
        },
        {
            "id": 5,
            "name": "Gabe Ledner",
            "tel": "251-402-6416",
            "address": "857 Julian Cove",
            "opening_hours": "08:00",
            "description": "Quis voluptate facilis molestiae quibusdam aut odit corrupti minus accusamus.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=20.879709091898313",
            "viewCounts": 0,
            "createdAt": "2022-01-29T14:48:43.000Z",
            "updatedAt": "2022-01-29T14:48:43.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-01-29T14:48:43.000Z",
                "updatedAt": "2022-01-29T14:48:43.000Z"
            }
        },
        {
            "id": 6,
            "name": "Justine Littel",
            "tel": "712-250-8484 x70023",
            "address": "2039 Felicity Grove",
            "opening_hours": "08:00",
            "description": "Sapiente minima nisi et et. Repellendus illum vel odio voluptatum est exercitationem blanditiis. Tenetur odio molestiae corrupti saepe quam autem.\n \rRecusandae voluptas aut in quia voluptatem modi eveniet nobis cumque. Et quia minus. Officia ullam soluta corporis sunt omnis accusamus veniam. Distinctio doloribus pariatur cumque officiis labore itaque repellendus.\n \rVel earum harum explicabo nihil ea. Hic exercitationem quia rerum et. Ut quis itaque et natus totam dolorem. Non odit culpa officiis aut itaque quis laudantium magni dolores. Et aperiam ipsam. Quisquam aut voluptas et aliquid quis sunt quia.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=9.812941945441732",
            "viewCounts": 0,
            "createdAt": "2022-01-29T14:48:43.000Z",
            "updatedAt": "2022-01-29T14:48:43.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-01-29T14:48:43.000Z",
                "updatedAt": "2022-01-29T14:48:43.000Z"
            }
        },
        {
            "id": 7,
            "name": "Mr. Nolan Kohler",
            "tel": "908-302-5705",
            "address": "927 Dovie Parks",
            "opening_hours": "08:00",
            "description": "Porro numquam quia provident aut qui magni non deleniti culpa. Ut similique adipisci earum esse. Officiis dolorum dolor quia voluptatum rerum consequatur tempore voluptas.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=21.646883306394304",
            "viewCounts": 0,
            "createdAt": "2022-01-29T14:48:43.000Z",
            "updatedAt": "2022-01-29T14:48:43.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-01-29T14:48:43.000Z",
                "updatedAt": "2022-01-29T14:48:43.000Z"
            }
        },
        {
            "id": 8,
            "name": "Dee Metz",
            "tel": "(886) 964-0007",
            "address": "3201 Sterling Union",
            "opening_hours": "08:00",
            "description": "Iusto rerum quas repellendus nihil saepe. Cum amet reiciendis maxime vel ex quos. Velit sint sed dolor. Laborum qui debitis. Nobis consectetur et.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=89.96380221993283",
            "viewCounts": 0,
            "createdAt": "2022-01-29T14:48:43.000Z",
            "updatedAt": "2022-01-29T14:48:43.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-01-29T14:48:43.000Z",
                "updatedAt": "2022-01-29T14:48:43.000Z"
            }
        },
        {
            "id": 9,
            "name": "Rashad Huels",
            "tel": "056-876-1362 x9886",
            "address": "1588 Randy Orchard",
            "opening_hours": "08:00",
            "description": "Cum numquam similique nihil aliquam natus at facere. Iusto sunt eum deleniti perferendis nihil deserunt qui. Perspiciatis voluptatem pariatur earum quis.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=37.83847880570441",
            "viewCounts": 0,
            "createdAt": "2022-01-29T14:48:43.000Z",
            "updatedAt": "2022-01-29T14:48:43.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-01-29T14:48:43.000Z",
                "updatedAt": "2022-01-29T14:48:43.000Z"
            }
        },
        {
            "id": 10,
            "name": "Dr. Maryam Beer",
            "tel": "767-042-2172 x84773",
            "address": "83774 Emmerich Crescent",
            "opening_hours": "08:00",
            "description": "quasi",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=47.84422443927308",
            "viewCounts": 0,
            "createdAt": "2022-01-29T14:48:43.000Z",
            "updatedAt": "2022-01-29T14:48:43.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-01-29T14:48:43.000Z",
                "updatedAt": "2022-01-29T14:48:43.000Z"
            }
        }
    ],
    "comments": [
        {
            "id": 6,
            "text": "Autem ipsam quia fugiat.",
            "UserId": 1,
            "RestaurantId": 6,
            "createdAt": "2022-01-29T14:48:43.000Z",
            "updatedAt": "2022-01-29T14:48:43.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$5T8asqkynon1GHqoGUh4c.LHLuZLzSsMoI7BpSee1y6TCkj2NteGW",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-01-29T14:48:43.000Z",
                "updatedAt": "2022-01-29T14:48:43.000Z"
            },
            "Restaurant": {
                "id": 6,
                "name": "Justine Littel",
                "tel": "712-250-8484 x70023",
                "address": "2039 Felicity Grove",
                "opening_hours": "08:00",
                "description": "Sapiente minima nisi et et. Repellendus illum vel odio voluptatum est exercitationem blanditiis. Tenetur odio molestiae corrupti saepe quam autem.\n \rRecusandae voluptas aut in quia voluptatem modi eveniet nobis cumque. Et quia minus. Officia ullam soluta corporis sunt omnis accusamus veniam. Distinctio doloribus pariatur cumque officiis labore itaque repellendus.\n \rVel earum harum explicabo nihil ea. Hic exercitationem quia rerum et. Ut quis itaque et natus totam dolorem. Non odit culpa officiis aut itaque quis laudantium magni dolores. Et aperiam ipsam. Quisquam aut voluptas et aliquid quis sunt quia.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=9.812941945441732",
                "viewCounts": 0,
                "createdAt": "2022-01-29T14:48:43.000Z",
                "updatedAt": "2022-01-29T14:48:43.000Z",
                "CategoryId": 1
            }
        },
        {
            "id": 47,
            "text": "Vero modi sequi.",
            "UserId": 1,
            "RestaurantId": 47,
            "createdAt": "2022-01-29T14:48:43.000Z",
            "updatedAt": "2022-01-29T14:48:43.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$5T8asqkynon1GHqoGUh4c.LHLuZLzSsMoI7BpSee1y6TCkj2NteGW",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-01-29T14:48:43.000Z",
                "updatedAt": "2022-01-29T14:48:43.000Z"
            },
            "Restaurant": {
                "id": 47,
                "name": "Drake Reilly",
                "tel": "1-079-842-5524 x3514",
                "address": "2216 Wisozk Ports",
                "opening_hours": "08:00",
                "description": "Et provident velit autem ab ut id facilis. Assumenda eos iure laudantium et eveniet. Debitis incidunt eos modi minima.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=93.66528519950528",
                "viewCounts": 0,
                "createdAt": "2022-01-29T14:48:43.000Z",
                "updatedAt": "2022-01-29T14:48:43.000Z",
                "CategoryId": 3
            }
        },
        {
            "id": 73,
            "text": "Dolor ullam accusantium dolor consequatur vel.",
            "UserId": 1,
            "RestaurantId": 23,
            "createdAt": "2022-01-29T14:48:43.000Z",
            "updatedAt": "2022-01-29T14:48:43.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$5T8asqkynon1GHqoGUh4c.LHLuZLzSsMoI7BpSee1y6TCkj2NteGW",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-01-29T14:48:43.000Z",
                "updatedAt": "2022-01-29T14:48:43.000Z"
            },
            "Restaurant": {
                "id": 23,
                "name": "Dylan Buckridge IV",
                "tel": "1-049-675-4241 x98855",
                "address": "6060 Emard Trafficway",
                "opening_hours": "08:00",
                "description": "odio sunt quis",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=16.646187885316422",
                "viewCounts": 0,
                "createdAt": "2022-01-29T14:48:43.000Z",
                "updatedAt": "2022-01-29T14:48:43.000Z",
                "CategoryId": 2
            }
        },
        {
            "id": 93,
            "text": "Eligendi dolor qui magnam.",
            "UserId": 1,
            "RestaurantId": 43,
            "createdAt": "2022-01-29T14:48:43.000Z",
            "updatedAt": "2022-01-29T14:48:43.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$5T8asqkynon1GHqoGUh4c.LHLuZLzSsMoI7BpSee1y6TCkj2NteGW",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-01-29T14:48:43.000Z",
                "updatedAt": "2022-01-29T14:48:43.000Z"
            },
            "Restaurant": {
                "id": 43,
                "name": "Buford Hoeger",
                "tel": "1-896-563-7837",
                "address": "129 Kautzer Streets",
                "opening_hours": "08:00",
                "description": "iure",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=68.10600055254315",
                "viewCounts": 0,
                "createdAt": "2022-01-29T14:48:43.000Z",
                "updatedAt": "2022-01-29T14:48:43.000Z",
                "CategoryId": 1
            }
        },
        {
            "id": 121,
            "text": "Ut et commodi totam.",
            "UserId": 1,
            "RestaurantId": 21,
            "createdAt": "2022-01-29T14:48:43.000Z",
            "updatedAt": "2022-01-29T14:48:43.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$5T8asqkynon1GHqoGUh4c.LHLuZLzSsMoI7BpSee1y6TCkj2NteGW",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-01-29T14:48:43.000Z",
                "updatedAt": "2022-01-29T14:48:43.000Z"
            },
            "Restaurant": {
                "id": 21,
                "name": "Judson Powlowski",
                "tel": "(442) 705-6535 x0183",
                "address": "459 Stamm Heights",
                "opening_hours": "08:00",
                "description": "non",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=76.7275781153453",
                "viewCounts": 0,
                "createdAt": "2022-01-29T14:48:43.000Z",
                "updatedAt": "2022-01-29T14:48:43.000Z",
                "CategoryId": 1
            }
        },
        {
            "id": 145,
            "text": "Est quia quo alias adipisci illo est.",
            "UserId": 1,
            "RestaurantId": 45,
            "createdAt": "2022-01-29T14:48:43.000Z",
            "updatedAt": "2022-01-29T14:48:43.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$5T8asqkynon1GHqoGUh4c.LHLuZLzSsMoI7BpSee1y6TCkj2NteGW",
                "isAdmin": true,
                "image": null,
                "createdAt": "2022-01-29T14:48:43.000Z",
                "updatedAt": "2022-01-29T14:48:43.000Z"
            },
            "Restaurant": {
                "id": 45,
                "name": "Dejon Willms",
                "tel": "1-703-013-1126 x49936",
                "address": "71101 Halvorson Club",
                "opening_hours": "08:00",
                "description": "reiciendis",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=2.2670867380246484",
                "viewCounts": 0,
                "createdAt": "2022-01-29T14:48:43.000Z",
                "updatedAt": "2022-01-29T14:48:43.000Z",
                "CategoryId": 3
            }
        },
        {
            "id": 19,
            "text": "Voluptatem vero amet eligendi ut veritatis minus ullam libero aut.",
            "UserId": 2,
            "RestaurantId": 19,
            "createdAt": "2022-01-29T14:48:43.000Z",
            "updatedAt": "2022-01-29T14:48:43.000Z",
            "User": {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$n5e.nfYH1I3MLifJ76QLdO7CSTdQeuh2.bqIuVt4HPAD1jCas0Nym",
                "isAdmin": false,
                "image": null,
                "createdAt": "2022-01-29T14:48:43.000Z",
                "updatedAt": "2022-01-29T14:48:43.000Z"
            },
            "Restaurant": {
                "id": 19,
                "name": "Reuben Paucek",
                "tel": "711.022.5511",
                "address": "9847 Gislason Square",
                "opening_hours": "08:00",
                "description": "Nostrum ipsa non dolor enim dolorum eum. Consequatur dolorem amet pariatur iure omnis labore omnis harum. Natus dolorum magnam. Eum quo ipsum ut quas error architecto ipsa.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=39.770618762568134",
                "viewCounts": 0,
                "createdAt": "2022-01-29T14:48:43.000Z",
                "updatedAt": "2022-01-29T14:48:43.000Z",
                "CategoryId": 2
            }
        },
        {
            "id": 32,
            "text": "Omnis explicabo quas in autem rerum praesentium quo explicabo itaque.",
            "UserId": 2,
            "RestaurantId": 32,
            "createdAt": "2022-01-29T14:48:43.000Z",
            "updatedAt": "2022-01-29T14:48:43.000Z",
            "User": {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$n5e.nfYH1I3MLifJ76QLdO7CSTdQeuh2.bqIuVt4HPAD1jCas0Nym",
                "isAdmin": false,
                "image": null,
                "createdAt": "2022-01-29T14:48:43.000Z",
                "updatedAt": "2022-01-29T14:48:43.000Z"
            },
            "Restaurant": {
                "id": 32,
                "name": "Louvenia Howe",
                "tel": "844-828-3336 x6102",
                "address": "37161 Yvonne Islands",
                "opening_hours": "08:00",
                "description": "Quo ad sit omnis rem quas culpa voluptatem enim deleniti.\nArchitecto at ad at optio non dolores.\nIncidunt est illo.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=52.04773828258374",
                "viewCounts": 0,
                "createdAt": "2022-01-29T14:48:43.000Z",
                "updatedAt": "2022-01-29T14:48:43.000Z",
                "CategoryId": 5
            }
        },
        {
            "id": 65,
            "text": "Et aut accusamus necessitatibus at eos explicabo enim.",
            "UserId": 2,
            "RestaurantId": 15,
            "createdAt": "2022-01-29T14:48:43.000Z",
            "updatedAt": "2022-01-29T14:48:43.000Z",
            "User": {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$n5e.nfYH1I3MLifJ76QLdO7CSTdQeuh2.bqIuVt4HPAD1jCas0Nym",
                "isAdmin": false,
                "image": null,
                "createdAt": "2022-01-29T14:48:43.000Z",
                "updatedAt": "2022-01-29T14:48:43.000Z"
            },
            "Restaurant": {
                "id": 15,
                "name": "Dr. Bartholome Rutherford",
                "tel": "319.075.0177",
                "address": "54988 Dolly Keys",
                "opening_hours": "08:00",
                "description": "Illo quidem et reiciendis temporibus alias. Aut quia dolorem iure. Molestiae omnis id iste.\n \rVoluptatem hic laudantium assumenda. Blanditiis consequuntur quo dolor quam accusamus ducimus. Aut tempore facilis iste deleniti omnis. Fugiat aut consequuntur vel velit quam alias. Magni ipsum voluptatum labore ratione tempore aut a. Itaque tempore iste aut nihil aut est eos quod.\n \rDignissimos ut temporibus. Natus repellendus quo aut quam reiciendis modi sequi pariatur. Aut est quia expedita quia et. Soluta officiis consequatur et commodi dolor nulla cumque. Et nostrum placeat minima aut quas facere doloribus necessitatibus nemo. Odio corporis officiis corporis aut vel sit necessitatibus.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=25.611431922406112",
                "viewCounts": 0,
                "createdAt": "2022-01-29T14:48:43.000Z",
                "updatedAt": "2022-01-29T14:48:43.000Z",
                "CategoryId": 2
            }
        },
        {
            "id": 89,
            "text": "Inventore qui voluptas.",
            "UserId": 2,
            "RestaurantId": 39,
            "createdAt": "2022-01-29T14:48:43.000Z",
            "updatedAt": "2022-01-29T14:48:43.000Z",
            "User": {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$n5e.nfYH1I3MLifJ76QLdO7CSTdQeuh2.bqIuVt4HPAD1jCas0Nym",
                "isAdmin": false,
                "image": null,
                "createdAt": "2022-01-29T14:48:43.000Z",
                "updatedAt": "2022-01-29T14:48:43.000Z"
            },
            "Restaurant": {
                "id": 39,
                "name": "Priscilla Hettinger",
                "tel": "(632) 709-3981",
                "address": "883 Keagan Mission",
                "opening_hours": "08:00",
                "description": "Animi nam sed quia deleniti voluptas unde dolore quisquam vel. Sit ut facilis ipsa ad et vitae voluptas maxime. Dolor placeat quisquam sequi perferendis voluptates molestiae sit ab minus. Harum dolores repellat commodi nisi. Praesentium eos exercitationem inventore.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=27.25901347918778",
                "viewCounts": 0,
                "createdAt": "2022-01-29T14:48:43.000Z",
                "updatedAt": "2022-01-29T14:48:43.000Z",
                "CategoryId": 1
            }
        }
    ]
}

export default {
  name: "RestaurantFeeds",
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments
  },
  data() {
    return {
      restaurants: [],
      comments: []
    }
  },
  created() {
    this.fetchFeeds()
  },
  methods: {
    fetchFeeds () {
      const {restaurants, comments} = dummyData
      this.restaurants = restaurants
      this.comments = comments.filter(comment => comment.Restaurant)
    }
  }
}
</script>
