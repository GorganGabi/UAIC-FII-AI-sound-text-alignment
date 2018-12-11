define({ "api": [
  {
    "type": "post",
    "url": "/api/upload",
    "title": "Speech recognition",
    "group": "Feedback",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>User's text</p>"
          },
          {
            "group": "Parameter",
            "type": "dataForm",
            "optional": false,
            "field": "mySound",
            "description": "<p>Input tag name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "\"upload\": {\n      \"fieldname\": \"mySound\",\n      \"originalname\": \"ceva.mp3\",\n      \"encoding\": \"7bit\",\n      \"mimetype\": \"audio/mpeg\",\n      \"destination\": \"./uploads\",\n      \"filename\": \"mySound-1544533515623.mp3\",\n      \"path\": \"uploads\\\\mySound-1544533515623.mp3\",\n      \"size\": 0\n  }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"msg\":\"Success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Register error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        },
        {
          "title": "API Error",
          "content": "HTTP/1.1 404 API not found",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/index.js",
    "groupTitle": "Feedback",
    "name": "PostApiUpload"
  }
] });
