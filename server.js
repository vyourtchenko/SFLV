var src = 'http://code.jquery.com/jquery-1.11.0.min.js';

var express = require('express');
var app = express();



var request = require('request');

var baseURL = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=A9F68B7ED431B54E4B1BA8582A29D30B&steamids='
var steamID = '76561198080297116';

//auj = '76561198084251095';

var dict = new Object();
var node = '';
var link = '';
var count = 0;

var superCount = 2;
//async function asyncCall() {
//    var v = await newFriends(steamID, baseURL, superCount, superCount);
//    console.log(v);
//}
//asyncCall();

//function thingsToDoAfter() {
//    console.log(nodes);
//    console.log(links);
//}



//console.log(count);

var v = newFriends(steamID, baseURL, 2, superCount);
console.log(v);

/*
request.get(url, function(error, steamHttpResponse, steamHttpBody) {
    var n = JSON.parse(steamHttpBody).response.players;
    //console.log(n);
    
    var obj = n[0].personaname;
    //dict["76561198080297116"] = obj;
    //console.log(dict);
    console.log('Searching through friendslist of ' + obj);
    var origin = obj;

    var friendslist = '76561198080297116';

    var url2 = 'http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=A9F68B7ED431B54E4B1BA8582A29D30B&steamid=76561198080297116&relationship=friend';
    
    request.get(url2, function(error, steamHttpResponse, steamHttpBody2) {
        // Once we get the body of the steamHttpResponse, send it to our client
        // as our own httpResponse
        var n = JSON.parse(steamHttpBody2).friendslist.friends;
        
        if(n.hasOwnProperty('steamid'))
            friendslist += n[0].steamid;
        for(var i=1; i<n.length; i++) {
            var obj = n[i].steamid;
            friendslist += ',' + obj;
        }
        
        
        var listFrom = origin;
        
        var url3 = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=A9F68B7ED431B54E4B1BA8582A29D30B&steamids=' + friendslist;
            
        request.get(url3, function(error, steamHttpResponse, steamHttpBody) {
            var n = JSON.parse(steamHttpBody).response.players;
            
            //var list = friendslist.split(',')
            //list[0] = '76561198080297116';
            //console.log(friendslist);
            //console.log("TEST");
            //console.log((dict[JSON.stringify('76561198080297116')]));
            for(var i=0; i<n.length; i++ ) {//var key in n) {
                var name = n[i].personaname;
                //console.log(name);
                var id = n[i].steamid;
                //console.log(id);
                //console.log(dict);
                if(!(name in dict))
                    dict[id] = name;
                    //dict[list[i]] = obj;
                    //console.log(list[i] + ' ' + obj);
                if(i != 0) {
                    nodes += ',\n\t{\"id\": \"' + name + '\", \"group\": 1}';
                    links += ',\n\t{\"source\": ' + listFrom + ', \"target\": ' + name + ', \"value\": 5}';
                }
                else {
                    nodes += '\"nodes\": [{\"id\": \"' + name + '\", \"group\": 1}'
                    links += '\"links\": [{\"source\": ' + listFrom + ', \"target\": ' + name + ', \"value\": 5}';
                    
                }
                    //console.log(nodes);
                
                //console.log(obj);
            }
            console.log(nodes);
            console.log(links);
            
            
            /*for(var k in dict) {
                console.log(dict[k]);
                console.log(dict[(dict[k])]);
            }*/
            //console.log(dict);
        //console.log(obj);
//    });
//});
//======


function newFriends(steamID, baseURL, countdown, superCount){
    var nodes;
    var links;

    count++;
    //var testURL = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=A9F68B7ED431B54E4B1BA8582A29D30B&steamids=76561198080297116'
    request.get(baseURL+steamID, function(error, steamHttpResponse, steamHttpBody) {
        //var countdown = 2;
        var n = JSON.parse(steamHttpBody).response.players
        try {
    //        n.response.players;

            //console.log(n);

            var obj = n[0].personaname;
            //dict["76561198080297116"] = obj;
            //console.log(dict);
            console.log('Searching through friendslist of ' + obj);
            var origin = obj;

            var friendslist = steamID;

            var url2 = 'http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=A9F68B7ED431B54E4B1BA8582A29D30B&steamid=' + steamID + '&relationship=friend';
            //count++;
            request.get(url2, function(error, steamHttpResponse, steamHttpBody2) {
                // Once we get the body of the steamHttpResponse, send it to our client
                // as our own httpResponse
                if(JSON.parse(steamHttpBody2) != undefined && JSON.parse(steamHttpBody2).friendslist != undefined){

                    try{
                        var n = JSON.parse(steamHttpBody2).friendslist.friends;
                    }
                    catch(error){
                        console.log("fail " + origin + ' ' + steamID);
                    }


                    try{
                        if(n.hasOwnProperty('steamid'))
                            friendslist += n[0].steamid;
                    }
                    catch(error){
                        console.log("fail " + n);
                    }
                    for(var i=1; i<n.length; i++) {
                        var obj = n[i].steamid;
                        friendslist += ',' + obj;
                    }


                    var listFrom = origin;

                    var url3 = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=A9F68B7ED431B54E4B1BA8582A29D30B&steamids=' + friendslist;

                    request.get(url3, function(error, steamHttpResponse, steamHttpBody) {
                        var n = JSON.parse(steamHttpBody).response.players;

                        //var list = friendslist.split(',')
                        //list[0] = '76561198080297116';
                        //console.log(friendslist);
                        //console.log("TEST");
                        //console.log((dict[JSON.stringify('76561198080297116')]));
                        //count++;
                        for(var i=0; i<n.length; i++ ) {//var key in n) {
                            var name = n[i].personaname;
                            //console.log(name);
                            var id = n[i].steamid;
                            //console.log(id);
                            //console.log(dict);
                            if(!(name in dict))
                                dict[id] = name;
                                //dict[list[i]] = obj;
                                //console.log(list[i] + ' ' + obj);
                            if(countdown != superCount) {
                                //if(nodes.indexOf(',\n\t{\"id\": \"' + name + '\", \"group\": 1}') == -1)
                                    nodes += ',\n\t{\"id\": \"' + name + '\", \"group\": 1}';
                                //if(links.indexOf(',\n\t{\"source\": ' + listFrom + ', \"target\": ' + name + ', \"value\": 5}') == -1)
                                    links += ',\n\t{\"source\": ' + listFrom + ', \"target\": ' + name + ', \"value\": 5}';
                            }
                            else {
                                if(i != 0) {
                                    //if(nodes.indexOf(',\n\t{\"id\": \"' + name + '\", \"group\": 1}') == -1)
                                        nodes += ',\n\t{\"id\": \"' + name + '\", \"group\": 1}';
                                    //if(links.indexOf(',\n\t{\"source\": ' + listFrom + ', \"target\": ' + name + ', \"value\": 5}') == -1)
                                        links += ',\n\t{\"source\": ' + listFrom + ', \"target\": ' + name + ', \"value\": 5}';
                                }
                                else {
                                    //if(nodes.indexOf('\"nodes\": [{\"id\": \"' + name + '\", \"group\": 1}') == -1)
                                       nodes += '\"nodes\": [{\"id\": \"' + name + '\", \"group\": 1}';
                                    //if(links.indexOf('\"links\": [{\"source\": ' + listFrom + ', \"target\": ' + name + ', \"value\": 5}') == -1)
                                       links += '\"links\": [{\"source\": ' + listFrom + ', \"target\": ' + name + ', \"value\": 5}';
                                }
                            }
                                //console.log(nodes);

                            //console.log(obj);
                        }
                        //console.log(nodes);
                        //console.log(links);

                        if(countdown == 0) {
                            //return new Promise(resolve => {
                            //    resolve([nodes, links]);
                            //});
                            console.log('countdown = 0');
                            //count--;
                            //if (count === 0 && callback)
                                //callback();
                        }

                        if(countdown > 0) {

                            for(var key in n){
                                if(n[key].steamid != steamID) {
                                    var c = [node, links]
                                    var x = newFriends(n[key].steamid, baseURL, countdown-1, superCount);
                                    console.log(x);
                                    //nodes += x[0];
                                    //links += x[1];
                                }
                                //console.log(nodes);
                                //console.log(links);
                            }
                            //return new Promise(resolve => {
                            //    resolve([nodes, links]);
                            //});
                            console.log('countdown > 0');
                            //count--;
                            //if (count === 0 && callback)
                                //callback();
                        }

    //                    if(countdown == superCount) {
    //                        for(var key in n){
    //                            if(n[key].steamid != steamID) {
    //                                c = newFriends(n[key].steamid, baseURL, countdown-1, superCount);
    //                                nodes += c[0];
    //                                links += c[1];
    //                            }
    //                            //console.log(nodes);
    //                            //console.log(links);
    //                        }
    //                        return [nodes, links];
    //                        //console.log(nodes);
    //                        //console.log(links);
    //                        //count--;
    //                        //if (count === 0 && callback)
    //                            //callback();
    //                    }
                        //console.log(nodes);
                        //console.log(links);
                        //console.log(count);
                        /*for(var k in dict) {
                            console.log(dict[k]);
                            console.log(dict[(dict[k])]);
                        }*/            
                    });
                }
                //if(nodes.indexOf(',\n\t{\"id\": \"' + obj + '\", \"group\": 1}') == -1) {
                    nodes += ',\n\t{\"id\": \"' + obj + '\", \"group\": 1}';
                    //return new Promise(resolve => {
                    //    resolve([nodes, links]);
                    //});
                    //console.log('else')
                    //count--;
                    //if (count === 0 && callback)
                    //    callback();
                //}
            });
        }
        catch(error) {
            console.log('error');
            console.log(error);
            console.log(n);
        }
    });
}


app.use('/', express.static('public'));

var bodyParser = require('body-parser');

app.use(bodyParser.text());

app.post('/frank-blog', function(httpRequest, httpResponse) {
    console.log(httpRequest.body);
    // We need to respond to the request so the web browser knows
    // something happened.
    // If you've got nothing better to say, it's considered good practice to
    // return the original POST body.
    httpResponse.status(200).send('Posted today:\n\n' + httpRequest.body);
});

var port = 4080;
var server = app.listen(port);
console.log('Listening on port ' + port);
