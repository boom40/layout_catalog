report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Entire_document_1024px.png",
        "test": "..\\bitmaps_test\\20191024-181258\\Entire_document_1024px.png",
        "selector": "document",
        "fileName": "Entire_document_1024px.png",
        "label": "Entire document",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -50
          },
          "misMatchPercentage": "0.95",
          "analysisTime": 51
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Entire_document_1200px.png",
        "test": "..\\bitmaps_test\\20191024-181258\\Entire_document_1200px.png",
        "selector": "document",
        "fileName": "Entire_document_1200px.png",
        "label": "Entire document",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -50
          },
          "misMatchPercentage": "0.81",
          "analysisTime": 65
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Header_tag_1024px.png",
        "test": "..\\bitmaps_test\\20191024-181258\\Header_tag_1024px.png",
        "selector": "header",
        "fileName": "Header_tag_1024px.png",
        "label": "Header tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Header_tag_1200px.png",
        "test": "..\\bitmaps_test\\20191024-181258\\Header_tag_1200px.png",
        "selector": "header",
        "fileName": "Header_tag_1200px.png",
        "label": "Header tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Nav_tag_1024px.png",
        "test": "..\\bitmaps_test\\20191024-181258\\Nav_tag_1024px.png",
        "selector": "nav",
        "fileName": "Nav_tag_1024px.png",
        "label": "Nav tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -20,
            "height": 0
          },
          "misMatchPercentage": "11.37",
          "analysisTime": 23
        },
        "diffImage": "..\\bitmaps_test\\20191024-181258\\failed_diff_Nav_tag_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Nav_tag_1200px.png",
        "test": "..\\bitmaps_test\\20191024-181258\\Nav_tag_1200px.png",
        "selector": "nav",
        "fileName": "Nav_tag_1200px.png",
        "label": "Nav tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 20,
            "height": 0
          },
          "misMatchPercentage": "11.37",
          "analysisTime": 25
        },
        "diffImage": "..\\bitmaps_test\\20191024-181258\\failed_diff_Nav_tag_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Link_with_data-qa_hover_1024px.png",
        "test": "..\\bitmaps_test\\20191024-181258\\Link_with_data-qa_hover_1024px.png",
        "selector": "[data-qa=\"nav-hover\"]",
        "fileName": "Link_with_data-qa_hover_1024px.png",
        "label": "Link with data-qa_hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Link_with_data-qa_hover_1200px.png",
        "test": "..\\bitmaps_test\\20191024-181258\\Link_with_data-qa_hover_1200px.png",
        "selector": "[data-qa=\"nav-hover\"]",
        "fileName": "Link_with_data-qa_hover_1200px.png",
        "label": "Link with data-qa_hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Link_with_class_is-active_1024px.png",
        "test": "..\\bitmaps_test\\20191024-181258\\Link_with_class_is-active_1024px.png",
        "selector": "a.is-active",
        "fileName": "Link_with_class_is-active_1024px.png",
        "label": "Link with class_is-active",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Link_with_class_is-active_1200px.png",
        "test": "..\\bitmaps_test\\20191024-181258\\Link_with_class_is-active_1200px.png",
        "selector": "a.is-active",
        "fileName": "Link_with_class_is-active_1200px.png",
        "label": "Link with class_is-active",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Main_tag_1024px.png",
        "test": "..\\bitmaps_test\\20191024-181258\\Main_tag_1024px.png",
        "selector": "main",
        "fileName": "Main_tag_1024px.png",
        "label": "Main tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -32,
            "height": 0
          },
          "misMatchPercentage": "39.27",
          "analysisTime": 52
        },
        "diffImage": "..\\bitmaps_test\\20191024-181258\\failed_diff_Main_tag_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Main_tag_1200px.png",
        "test": "..\\bitmaps_test\\20191024-181258\\Main_tag_1200px.png",
        "selector": "main",
        "fileName": "Main_tag_1200px.png",
        "label": "Main tag",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -208,
            "height": 0
          },
          "misMatchPercentage": "31.43",
          "analysisTime": 53
        },
        "diffImage": "..\\bitmaps_test\\20191024-181258\\failed_diff_Main_tag_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Card_with_data-qa_card_1024px.png",
        "test": "..\\bitmaps_test\\20191024-181258\\Card_with_data-qa_card_1024px.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "Card_with_data-qa_card_1024px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "1.53",
          "analysisTime": 22
        },
        "diffImage": "..\\bitmaps_test\\20191024-181258\\failed_diff_Card_with_data-qa_card_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Card_with_data-qa_card_1200px.png",
        "test": "..\\bitmaps_test\\20191024-181258\\Card_with_data-qa_card_1200px.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "Card_with_data-qa_card_1200px.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "1.53",
          "analysisTime": 20
        },
        "diffImage": "..\\bitmaps_test\\20191024-181258\\failed_diff_Card_with_data-qa_card_1200px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Card_with_data-qa_card-hover_1024px.png",
        "test": "..\\bitmaps_test\\20191024-181258\\Card_with_data-qa_card-hover_1024px.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "Card_with_data-qa_card-hover_1024px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "2.08",
          "analysisTime": 26
        },
        "diffImage": "..\\bitmaps_test\\20191024-181258\\failed_diff_Card_with_data-qa_card-hover_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\Card_with_data-qa_card-hover_1200px.png",
        "test": "..\\bitmaps_test\\20191024-181258\\Card_with_data-qa_card-hover_1200px.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "Card_with_data-qa_card-hover_1200px.png",
        "label": "Card with data-qa_card-hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:8080/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/catalog/",
        "expect": 0,
        "viewportLabel": "1200px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "2.08",
          "analysisTime": 20
        },
        "diffImage": "..\\bitmaps_test\\20191024-181258\\failed_diff_Card_with_data-qa_card-hover_1200px.png"
      },
      "status": "fail"
    }
  ]
});