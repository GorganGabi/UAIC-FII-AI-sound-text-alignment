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
            "field": "upload.text",
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
          "content": "\"text\": \"Acesta este un text frumos!\"\n\"mySound\": sunet.mp3",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n   \"syncData\":[{\"end\":0.29,\"start\":0.16,\"word\":\"to\",\"matched\":0},\n              {\"end\":0.47,\"start\":0.3,\"word\":\"the\",\"matched\":0},\n              {\"end\":0.64,\"start\":0.48,\"word\":\"end\",\"matched\":0}]\n}",
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
