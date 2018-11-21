# amavet-fvthk-design

# Development

* nainstalujte vscode a do nej plugin live server a live sass compiler
* do rootu projektu pridejte slozku .vscode a vni vytvorte soubor settings.json 
* do nej pridejte

```javascript
{
    "liveSassCompile.settings.formats":[
        // More Complex
        {
            "format": "compressed",
            "extensionName": ".min.css",
            "savePath": "/css/"
        }
    ]
}
```