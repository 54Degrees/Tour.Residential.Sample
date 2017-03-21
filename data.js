var APP_DATA = {
  "scenes": [
    {
      "id": "0-front-garden",
      "name": "Front Garden",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.14149813946098,
        "pitch": 0.000036296749886588486,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.4031438369799476,
          "pitch": 0.034376900268595634,
          "rotation": 0,
          "target": "1-entrance-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entrance-hall",
      "name": "Entrance Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.9018347784298193,
        "pitch": 0.025737785430541393,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5566043271274879,
          "pitch": 0.3380450941695372,
          "rotation": 0,
          "target": "0-front-garden"
        },
        {
          "yaw": 2.126778050306669,
          "pitch": 0.12173470611034354,
          "rotation": 0,
          "target": "4-sitting-room"
        },
        {
          "yaw": 2.9873966810279065,
          "pitch": 0.12715538923388792,
          "rotation": 0,
          "target": "2-kitchen"
        },
        {
          "yaw": 2.687281561520267,
          "pitch": -0.6826025590536098,
          "rotation": 0,
          "target": "8-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.3197904644143197,
        "pitch": 0.4004572478196984,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2070260721791364,
          "pitch": 0.2431609009050284,
          "rotation": 0,
          "target": "1-entrance-hall"
        },
        {
          "yaw": -0.07320207114512556,
          "pitch": 0.29278066350216747,
          "rotation": 0,
          "target": "3-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dining-room",
      "name": "Dining Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.9960227740403944,
        "pitch": 0.40872227700433683,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3602318859347697,
          "pitch": 0.2793761172849205,
          "rotation": 0,
          "target": "2-kitchen"
        },
        {
          "yaw": 3.0422615796982297,
          "pitch": 0.31945795936294274,
          "rotation": 0,
          "target": "4-sitting-room"
        },
        {
          "yaw": -0.2761933073666505,
          "pitch": 0.3793939919686178,
          "rotation": 0,
          "target": "5-sun-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-sitting-room",
      "name": "Sitting Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.7597511693550318,
        "pitch": 0.23818569138765255,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7718847392957855,
          "pitch": 0.21431179119919008,
          "rotation": 0,
          "target": "1-entrance-hall"
        },
        {
          "yaw": 2.5929116613039085,
          "pitch": 0.2953932997080422,
          "rotation": 0,
          "target": "3-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-sun-lounge",
      "name": "Sun Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.4367166335734645,
        "pitch": 0.07626195329997287,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9125141045560277,
          "pitch": 0.3151487375944342,
          "rotation": 0,
          "target": "3-dining-room"
        },
        {
          "yaw": -0.4993179494558877,
          "pitch": 0.1921750907816211,
          "rotation": 0,
          "target": "6-back-garden"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-back-garden",
      "name": "Back Garden",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.997705635560596,
        "pitch": 0.2625947232925725,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3370794768880785,
          "pitch": 0.09938505394903885,
          "rotation": 0,
          "target": "5-sun-lounge"
        },
        {
          "yaw": -1.4858416331473947,
          "pitch": 0.147172340190032,
          "rotation": 0,
          "target": "7-side-garden"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-side-garden",
      "name": "Side Garden",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.12859836221792165,
        "pitch": 0.22678992619830396,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4510576470858574,
          "pitch": 0.1261491422387806,
          "rotation": 6.283185307179586,
          "target": "6-back-garden"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-landing",
      "name": "Landing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.6590295265525548,
        "pitch": 0.36776860639121267,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8886540046910447,
          "pitch": 0.1495649701651658,
          "rotation": 0,
          "target": "9-bedroom-3"
        },
        {
          "yaw": -1.0412854803471419,
          "pitch": 0.2759290378246071,
          "rotation": 0,
          "target": "10-bathroom"
        },
        {
          "yaw": -2.2654560863204942,
          "pitch": 0.6634988517700151,
          "rotation": 0,
          "target": "1-entrance-hall"
        },
        {
          "yaw": 0.847089298288612,
          "pitch": 0.2878108612263546,
          "rotation": 0,
          "target": "11-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bedroom-3",
      "name": "Bedroom 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.857214824504025,
        "pitch": 0.3965684162024239,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.091262313436289,
          "pitch": 0.13483367206260866,
          "rotation": 0,
          "target": "8-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.602079307758318,
        "pitch": 0.6864617600333425,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6204506683315536,
          "pitch": 0.4611963709015541,
          "rotation": 0,
          "target": "8-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-bedroom-2",
      "name": "Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.9905335767039034,
        "pitch": 0.42775130857364196,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.315321547541597,
          "pitch": 0.35979179649179827,
          "rotation": 0,
          "target": "8-landing"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SAMPLE HOUSE",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
