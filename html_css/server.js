/*
https://www.w3schools.com/
http://htmlbook.ru/
https://webref.ru/css
*/

var http = require('http');
var fs = require('fs');
var url = require('url');

new http.Server(
    (req, res) => {
        var urlParsed = url.parse(req.url);

        switch (urlParsed.pathname) {
            case '/':
                sendFile("index.html", res);
                break;

            case '/1':
                sendFile("1.html", res);
                break;

            case '/2':
                sendFile("2.html", res);
                break;

            case '/3':
                sendFile("3.html", res);
                break;

            case '/4':
                sendFile("4.html", res);
                break;

            case '/5':
                sendFile("5.html", res);
                break;

            case '/6':
                sendFile("6.html", res);
                break;

            case '/7':
                sendFile("7.html", res);
                break;

            case '/8':
                sendFile("8.html", res);
                break;

            case '/9':
                sendFile("9.html", res);
                break;

            case '/10':
                sendFile("10.html", res);
                break;

            case '/11':
                sendFile("11.html", res);
                break;

            case '/12':
                sendFile("12.html", res);
                break;

            case '/13':
                sendFile("13.html", res);
                break;

            case '/14':
                sendFile("14.html", res);
                break;

            case '/15':
                sendFile("15.html", res);
                break;

            case '/16':
                sendFile("16.html", res);
                break;

            case '/17':
                sendFile("17.html", res);
                break;

            case '/18':
                sendFile("18.html", res);
                break;

            case '/19':
                sendFile("19.html", res);
                break;

            case '/20':
                sendFile("20.html", res);
                break;

            case '/21':
                sendFile("21.html", res);
                break;

            case '/22':
                sendFile("22.html", res);
                break;


            case '/23':
                sendFile("23.html", res);
                break;


            case '/24':
                sendFile("24.html", res);
                break;


            case '/25':
                sendFile("25.html", res);
                break;


            case '/26':
                sendFile("26.html", res);
                break;


            case '/27':
                sendFile("27.html", res);
                break;


            case '/28':
                sendFile("28.html", res);
                break;


            case '/29':
                sendFile("29.html", res);
                break;


        }
    }
).listen(3000, '127.0.0.1')

function sendFile(fileName, res) {
    var fileStream = fs.createReadStream(fileName);
    fileStream
        .on('error', function() {
            res.statusCode = 500;
            res.end("Server error");
        })
        .pipe(res)
        .on('close', function() {
            fileStream.destroy();
        });
}