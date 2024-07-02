export const API_KEY = 'AIzaSyB0tIYmIdIg68GFStixWvtYkpkBHlLHkI0';

// "items": [
//     {
//       "kind": "youtube#video",
//       "etag": "h7f5g_EJ--5kj0pHzs8dHvejfos",
//       "id": "Pv0iVoSZzN8",
//       "snippet": {
//         "publishedAt": "2024-04-27T16:00:00Z",
//         "channelId": "UCX6OQ3DkcsbYNE6H8uQQuVA",
//         "title": "In 10 Minutes This Room Will Explode!",
//         "description": "I didn’t expect that to happen…\nThere’s no jumping through hoops (or plate glass windows) with T-Mobile. Customers can get Magenta Status from day one, including hotel discounts on select brands, deals on rental cars, discounts on select concert tickets nationwide, and so much more. See how at https://t-mobile.com/status\n\nNew Merch - https://mrbeast.store\n\nCheck out Viewstats! - https://www.viewstats.com/\n\nSUBSCRIBE OR I TAKE YOUR DOG\n╔═╦╗╔╦╗╔═╦═╦╦╦╦╗╔═╗\n║╚╣║║║╚╣╚╣╔╣╔╣║╚╣═╣ \n╠╗║╚╝║║╠╗║╚╣║║║║║═╣\n╚═╩══╩═╩═╩═╩╝╚╩═╩═╝\n\nFor any questions or inquiries regarding this video, please reach out to chucky@mrbeastbusiness.com\n\nMusic Provided by https://www.extrememusic.com\n\n----------------------------------------------------------------\nfollow all of these or i will kick you\n• Facebook - https://www.facebook.com/MrBeast6000/\n• Twitter - https://twitter.com/MrBeast\n•  Instagram - https://www.instagram.com/mrbeast\n•  Im Hiring! - https://www.mrbeastjobs.com/\n--------------------------------------------------------------------",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/Pv0iVoSZzN8/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/Pv0iVoSZzN8/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/Pv0iVoSZzN8/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           },
//           "standard": {
//             "url": "https://i.ytimg.com/vi/Pv0iVoSZzN8/sddefault.jpg",
//             "width": 640,
//             "height": 480
//           },
//           "maxres": {
//             "url": "https://i.ytimg.com/vi/Pv0iVoSZzN8/maxresdefault.jpg",
//             "width": 1280,
//             "height": 720
//           }
//         },
//       ]

export const value_converter = (value) =>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
};