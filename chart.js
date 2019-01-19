/*
National Early Warning Score (NEWS) 2 chart © Royal College of Physicians 2017
Reproduced from: Royal College of Physicians.National Early Warning Score (NEWS) 2: Standardising the assessment of acute- illness severity in the NHS.Updated report of a working party.London: RCP, 2017.
Chart Render © Dr Rhidian Bramley 2018
*/

'use strict'


//Define NEWS2 table chart section range arrays
var news = {
    resp: {
        name: "Respirations",
        units: "breaths/min",
        rangeArray: [
            "≥25",
            "21–24",
            "18–20",
            "15–17",
            "12–14",
            "9–11",
            "≤8"
        ],
        scoreArray: [
            "3",
            "2",
            "0",
            "0",
            "0",
            "1",
            "3"
        ],
        minArray: [
            "25",
            "21",
            "18",
            "15",
            "12",
            "9",
            "0"
        ],
        maxArray: [
            "200",
            "24",
            "20",
            "17",
            "14",
            "11",
            "8"
        ]
    },
    sat1: {
        name: "SpO<sub>2</sub> scale 1",
        units: "Oxygen saturation %",
        rangeArray: [
            "≥96",
            "94–95",
            "92–93",
            "≤91"
        ],
        scoreArray: [
            "0",
            "1",
            "2",
            "3"
        ],
        minArray: [
            "96",
            "94",
            "92",
            "0"
        ],
        maxArray: [
            "100",
            "95",
            "93",
            "91"
        ]
    },
    sat2: {
        name: "SpO<sub>2</sub> scale 2",
        units: "Oxygen saturation %",
        rangeArray: [
            "≥97 on O<sub>2</sub>",
            "95–96 on O<sub>2</sub>",
            "93–94 on O<sub>2</sub>",
            "≥93 on air",
            "88–92",
            "86–87",
            "84–85",
            "≤83%"
        ],
        scoreArray: [
            "3",
            "2",
            "1",
            "0",
            "0",
            "1",
            "2",
            "3"
        ],
        minArray: [
            "97",
            "95",
            "93",
            "93",
            "88",
            "86",
            "84",
            "0"
        ],
        maxArray: [
            "100",
            "96",
            "94",
            "100",
            "92",
            "87",
            "85",
            "83"
        ]
    },
    pulse: {
        name: "Pulse",
        units: "beats/min",
        rangeArray: [
            "≥131",
            "121–130",
            "111–120",
            "101–110",
            "91–100",
            "81–90",
            "71–80",
            "61–70",
            "51–60",
            "41–50",
            "31–40",
            "≤30"
        ],
        scoreArray: [
            "3",
            "2",
            "2",
            "1",
            "1",
            "0",
            "0",
            "0",
            "0",
            "1",
            "3",
            "3"
        ],
        minArray: [
            "131",
            "121",
            "111",
            "101",
            "91",
            "81",
            "71",
            "61",
            "51",
            "41",
            "31",
            "0"
        ],
        maxArray: [
            "500",
            "130",
            "120",
            "110",
            "100",
            "90",
            "80",
            "70",
            "60",
            "50",
            "40",
            "30"
        ]
    },
    bp: {
        name: "Blood pressure",
        units: "mmHg",
        rangeArray: [
            "≥220",
            "201–219",
            "181–200",
            "161–180",
            "141–160",
            "121–140",
            "111–120",
            "101–110",
            "91–100",
            "81–90",
            "71–80",
            "61–70",
            "51–60",
            "≤50"
        ],
        scoreArray: [
            "3",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "1",
            "2",
            "3",
            "3",
            "3",
            "3",
            "3"
        ],
        minArray: [
            "220",
            "201",
            "181",
            "161",
            "141",
            "121",
            "111",
            "101",
            "91",
            "81",
            "71",
            "61",
            "51",
            "0"
        ],
        maxArray: [
            "500",
            "219",
            "200",
            "180",
            "160",
            "140",
            "120",
            "110",
            "100",
            "90",
            "80",
            "70",
            "60",
            "50"
        ]
    },
    acvpu: {
        name: "Conciousness",
        units: "ACVPU",
        rangeArray: [
            "Alert",
            "Confusion",
            "V",
            "P",
            "U"
        ],
        scoreArray: [
            "0",
            "3",
            "3",
            "3",
            "3"
        ]
    },
    temp: {
        name: "Temperature",
        units: "℃",
        rangeArray: [
            "≥39.1°",
            "38.1–39.0°",
            "37.1–38.0°",
            "36.1–37.0°",
            "35.1–36.0°",
            "≤35.0°"
        ],
        scoreArray: [
            "2",
            "11",
            "0",
            "0",
            "1",
            "3"
        ],
        minArray: [
            "39.1",
            "38.1",
            "37.1",
            "36.1",
            "35.1",
            "0"
        ],
        maxArray: [
            "50",
            "39.0",
            "38.0",
            "37.0",
            "36.0",
            "35.0"
        ]
    }

}



//NEWS2 guidance
var newsGuidance = {
    none: {
        risk: "low",
        range: "Total 0",
        threshold: "Routine monitoring",
        repeat: "Minimum 12 hourly",
        response: [
            "Continue routine NEWS monitoring"
        ]
    },
    low: {
        risk: "low",
        range: "Total 1–4",
        threshold: "Ward-based response",
        repeat: "Minimum 4–6 hourly",
        response: [
            "Inform registered nurse, who must assess the patient",
            "Registered nurse decides whether increased frequency of monitoring and/or escalation of care is required"
        ]
    },
    lowmedium: {
        risk: "low-medium",
        range: "3 in single parameter",
        threshold: "Urgent ward-based response",
        repeat: "Minimum 1 hourly",
        response: [
            "Registered nurse to inform medical team caring for the patient, who will review and decide whether escalation of care is necessary"
        ]

    },
    medium: {
        risk: "medium",
        range: "Total 5-6",
        threshold: "Urgent response threshold",
        repeat: "Minimum 1 hourly",
        response: [
            "Registered nurse to immediately inform the medical team caring for the patient",
            "Registered nurse to request urgent assessment by a clinician or team with core competencies in the care of acutely ill patients",
            "Provide clinical care in an environment with monitoring facilities"
        ]
    },
    high: {
        risk: "high",
        range: "Total 7 or more",
        threshold: "Emergency response threshold",
        repeat: "Continuous monitoring of vital signs",
        response: [
            "Registered nurse to immediately inform the medical team caring for the patient – this should be at least at specialist registrar level",
            "Emergency assessment by a team with critical care competencies, including practitioner(s) with advanced airway management skills",
            "Consider transfer of care to a level 2 or 3 clinical care facility, ie higher-dependency unit or ICU",
            "Clinical care in an environment with monitoring facilities"
        ]
    }
}

//Optional colour styling for the paths (lines)
var pathColorArray = [
    "#0066CC", //Default (if single colour)
    "#009933", //Resp
    "#9933ff", //Ox scale 1
    "#9933ff", //Ox scale 2
    "#009999", //Oxygen
    "#0066CC", //BP
    "#559BD8", //Pulse
    "#cc00cc", //Conciousness
    "#FF0000", //Temp
    "#000000"  //NEWS
]


//Base variables
var $newsChart;
var chartsize = 20; //number of result columns to display
var setPaths = true; // display connecting d3 paths by default
var setPathMultiColor = true; //display paths colors by pathColorArray.
var showScale1 = false; //hide Oxygen saturation scale 1 by default - reveal if contains data
var showScale2 = false; //hide Oxygen saturation scale 2 by default - reveal if contains data
var obstitledatetime = "" //placeholder for chart obs tooltip;

//sample patient data
var patient = new Object; //patient object

patient.oxsatscale = '0'; //used to set the default scale for the chart. Updated by the most recent assessment or toggle.
// 0 = default show all on the scale specified at the time of observation (i.e display both charts if needed); 1 = show all on scale 1 only; 2 = show all on scale 2 only; 

//sample patient demographics
patient.name = "SMITH, John (Mr)";
patient.dob = "15-Aug-1956";
patient.sex = "Male";
patient.nhsno = "444 444 4444";

//onload 
$(function () {

    //allow html tooltips
    $.widget("ui.tooltip", $.ui.tooltip, {
        options: {
            content: function () {
                return $(this).prop('title');
            }
        }
    });

    $('#togglescalebtn').attr("title", "Toggle the chart berween the normal oxygen saturation scale 1, chronic hypercapnia scale2, or show both scales<br/>NB the NEWS total may change according to the scale.<br/><span class='red'>ONLY use Scale 2 under the direction of a qualified clinician.</span>").tooltip({
        classes: {
            "ui-tooltip": "tooltip"
        }
    });

    $('#togglescalebtn').click(function (e) {
        e.preventDefault();
        toggleScale();
    });


    //dynamic window resize
    $(window).on('resize.1', function () {

        waitForFinalEvent(function () {
            drawNews2Chart();
        }, 50, "resize1");

    });



});

//helper functions

var waitForFinalEvent = (function () {
    var timers = {};
    return function (callback, ms, uniqueId) {
        if (!uniqueId) {
            uniqueId = "Don't call this twice without a uniqueId";
        }
        if (timers[uniqueId]) {
            clearTimeout(timers[uniqueId]);
        }
        timers[uniqueId] = setTimeout(callback, ms);
    };
})();

//display sample patient banner
function displayPatientBanner() {
    var $patbanner = $('<table class="patbanner"></table>');
    $patbanner.append("<tbody>");
    $patbanner.append("<tr><td>" + patient.name + "</td><td>Born: " + patient.dob + "</td><td>Gender: " + patient.sex + "</td><td>NHS: " + patient.nhsno + "</td></tr>");
    $('#patientbanner').html($patbanner)
}


//Create/Draw the standard NEWS2 chart (unpopulated)
function drawNews2Chart() {

    $newsChart = $('<table class="newschart"></table>');
    $newsChart.append("<tbody>");
    var newsChartCels = '';
    var newsChartRow = '';
    var newsChartRows = '';
    var newsChartTable = '';

    for (var i = 1; i < chartsize + 1; i++) {
        newsChartCels = newsChartCels + '<td col="' + i + '" class="nval nval' + i + '"></td>';
    }

    var spacerRow = '<tr class="nspacerow"><td colspan=' + (chartsize + 2) + '</td></tr>';

    //Date and time of assessment
    newsChartRows = '<tr class="nrow nchart0 ndate"><td class="nrange">DATE</td>' + newsChartCels + '</tr>';
    newsChartRows = newsChartRows + '<tr class="nrow ntime"><td class="nrange">TIME</td>' + newsChartCels + '</tr>';

    newsChartTable = newsChartTable + newsChartRows + spacerRow;


    //respirations
    newsChartRows = "";
    for (var i = 0; i < news.resp.rangeArray.length; i++) {
        newsChartRow = '<tr class="nrow nchart1 nscore' + news.resp.scoreArray[i] + '"><td class="nrange">' + news.resp.rangeArray[i] + '</td>' + newsChartCels + '</tr>';
        newsChartRows = newsChartRows + newsChartRow;
    }

    newsChartTable = newsChartTable + newsChartRows + spacerRow;

    //O2 sats scale 1
    newsChartRows = "";
    for (var i = 0; i < news.sat1.rangeArray.length; i++) {
        newsChartRow = '<tr class="nrow nchart2 nscore' + news.sat1.scoreArray[i] + '"><td class="nrange">' + news.sat1.rangeArray[i] + '</td>' + newsChartCels + '</tr>';
        newsChartRows = newsChartRows + newsChartRow;
    }

    newsChartTable = newsChartTable + newsChartRows + spacerRow;


    //O2 sats scale 2
    newsChartRows = "";
    for (var i = 0; i < news.sat2.rangeArray.length; i++) {
        if (i == 2) {
            newsChartRow = '<tr class="nrow nchart3 nchartsplit nscore' + news.sat2.scoreArray[i] + '"><td class="nrange">' + news.sat2.rangeArray[i] + '</td>' + newsChartCels + '</tr>';
        } else {
            newsChartRow = '<tr class="nrow nchart3 nscore' + news.sat2.scoreArray[i] + '"><td class="nrange">' + news.sat2.rangeArray[i] + '</td>' + newsChartCels + '</tr>';
        }
        newsChartRows = newsChartRows + newsChartRow;
    }

    newsChartTable = newsChartTable + newsChartRows + spacerRow;

    //Air or Oxygen
    newsChartRows = "";
    newsChartRow = '<tr class="nrow nchart4 nscore0"><td class="nrange">A=Air</td>' + newsChartCels + '</tr>';
    newsChartRows = newsChartRows + newsChartRow;
    newsChartRow = '<tr class="nrow nchart4 nscore2"><td class="nrange">O<sub>2</sub> L/min</td>' + newsChartCels + '</tr>';
    newsChartRows = newsChartRows + newsChartRow;
    newsChartRow = '<tr class="nrow nchart4 nscore0"><td class="nrange">Device</td>' + newsChartCels + '</tr>';
    newsChartRows = newsChartRows + newsChartRow;

    newsChartTable = newsChartTable + newsChartRows + spacerRow;

    //bp
    newsChartRows = "";
    for (var i = 0; i < news.bp.rangeArray.length; i++) {
        newsChartRow = '<tr class="nrow nchart5 nscore' + news.bp.scoreArray[i] + '"><td class="nrange">' + news.bp.rangeArray[i] + '</td>' + newsChartCels + '</tr>';
        newsChartRows = newsChartRows + newsChartRow;
    }

    newsChartTable = newsChartTable + newsChartRows + spacerRow;

    //pulse
    newsChartRows = "";
    for (var i = 0; i < news.pulse.rangeArray.length; i++) {
        newsChartRow = '<tr class="nrow nchart6 nscore' + news.pulse.scoreArray[i] + '"><td class="nrange">' + news.pulse.rangeArray[i] + '</td>' + newsChartCels + '</tr>';
        newsChartRows = newsChartRows + newsChartRow;
    }

    newsChartTable = newsChartTable + newsChartRows + spacerRow;

    //Conciousness
    newsChartRows = "";
    for (var i = 0; i < news.acvpu.rangeArray.length; i++) {
        newsChartRow = '<tr class="nrow nchart7 nscore' + news.acvpu.scoreArray[i] + '"><td class="nrange">' + news.acvpu.rangeArray[i] + '</td>' + newsChartCels + '</tr>';
        newsChartRows = newsChartRows + newsChartRow;
    }

    newsChartTable = newsChartTable + newsChartRows + spacerRow;

    //Temp
    newsChartRows = "";
    for (var i = 0; i < news.temp.rangeArray.length; i++) {
        newsChartRow = '<tr class="nrow nchart8 nscore' + news.temp.scoreArray[i] + '"><td class="nrange">' + news.temp.rangeArray[i] + '</td>' + newsChartCels + '</tr>';
        newsChartRows = newsChartRows + newsChartRow;
    }

    newsChartTable = newsChartTable + newsChartRows + spacerRow;


    //NEWS total
    newsChartRows = "";
    newsChartRow = '<tr class="nrow nchart9"></td>' + newsChartCels + '</tr>';
    newsChartRows = newsChartRows + newsChartRow;

    newsChartTable = newsChartTable + newsChartRows + spacerRow;



    //Bottom section
    newsChartRows = "";
    newsChartRow = '<tr class="nrow nchart10"><td class="nrange" colspan="2">Monitoring frequency</td>' + newsChartCels + '</tr>';
    newsChartRows = newsChartRows + newsChartRow;
    newsChartRow = '<tr class="nrow nchart10"><td class="nrange" colspan="2">Escalation of care Y/N</td>' + newsChartCels + '</tr>';
    newsChartRows = newsChartRows + newsChartRow;
    newsChartRow = '<tr class="nrow nchart10"><td class="nrange" colspan="2">Initials</td>' + newsChartCels + '</tr>';
    newsChartRows = newsChartRows + newsChartRow;

    newsChartTable = newsChartTable + newsChartRows + spacerRow;

    $newsChart.append($(newsChartTable));

    //add left title column
    $newsChart.find('tbody > tr:nth-child(1)').prepend('<td class="ntitle" rowspan="2">NEWS key<br/><div class="score0">0</div><div class="score1">1</div><div class="score2">2</div><div class="score3">3</div></td>');
    $newsChart.find('tbody > tr:nth-child(4)').prepend('<td class="ntitle" rowspan="7"><div class="abcde">A+B</div>Respirations<div class="titleunits">breaths/min</div></td>');
    $newsChart.find('tbody > tr:nth-child(12)').prepend('<td class="ntitle" rowspan="4"><div class="abcde">A+B</div>SpO<sub>2</sub> scale 1<div class="titleunits">Oxygen saturation %</div></td>');
    $newsChart.find('tbody > tr:nth-child(17)').prepend('<td class="ntitle" rowspan="8">SpO<sub>2</sub> scale 2<div class="titleunits">Oxygen saturation %</div><div class="titleinfo">Use Scale 2 if target range is 88–92 %,<br/>eg in hypercapnic respiratory failure</div > <div class="titlered">ONLY use Scale 2 under the direction of a qualified clinician</div></td>');
    $newsChart.find('tbody > tr:nth-child(26)').prepend('<td class="ntitle" rowspan="3">Air or oxygen?</td>');
    $newsChart.find('tbody > tr:nth-child(30)').prepend('<td class="ntitle" rowspan="14"><div class="abcde">C</div>Blood pressure<div class="titleunits">mmHg</div><div class="titleinfo">Score uses<br/>systloic BP only</div></td>');
    $newsChart.find('tbody > tr:nth-child(45)').prepend('<td class="ntitle" rowspan="12"><div class="abcde">C</div>Pulse<div class="titleunits">Beats/min</div></td>');
    $newsChart.find('tbody > tr:nth-child(58)').prepend('<td class="ntitle" rowspan="5"><div class="abcde">D</div>Conciousness<div class="titleinfo">Score for NEW<br/>onset of confusion<br/>(no score if chronic)</div></td>');
    $newsChart.find('tbody > tr:nth-child(64)').prepend('<td class="ntitle" rowspan="6"><div class="abcde">E</div>Temperature<div class="titleunits">&#8451;</div></td>');
    $newsChart.find('tbody > tr:nth-child(71)').prepend('<td class="ntitle" colspan="2">NEWS TOTAL</td>');

    populateNewsChart();

}


function populateNewsChart() {

    //Populate the NEWS2 table by iterating through the results table (in my open source version this uses json arrays)

    var startcol = 0
    var col = 0
    var row = 1;
    var val = '';
    var txt = '';
    var txtstr = '';
    var title = '';
    var plotclass = "plotted";

    var $obj;
    var eformdataid;
    var code;
    var codename;
    var percent;
    var flow;
    var scale;
    var startrow;
    var start;
    var end;
    var dia;
    var sys;
    var repeat;
    var formuserinitials;
    var formusername;
    var formuserid;
    var score
    var mewscore;
    var redscore; //score of 3 or more in any one recording
    var newstotalstr = '';
    var newstotal = 0;
    var mewstotal = 0; //support transition from MEWS to NEWS - records MEWS value on the form.


    showScale1 = false; //hide Oxygen saturation scale 1 by default
    showScale2 = false; //hide Oxygen saturation scale 2 by default


    $.getJSON("data.json", function (result) {

        var obsArray = result

        //Only show last x results in the NEWS2 table. Ignore any other priors returned in the query.
        var datasize = obsArray.length;
        if (datasize < chartsize) { datasize = chartsize };
        startcol = startcol - datasize + chartsize;
        col = startcol;

        for (var i = 0; i < obsArray.length; i++) {

            var obs = new Object();
            var obs = obsArray[i];

            col++;
            newstotal = 0;
            mewstotal = 0;
            newstotalstr = '';
            redscore = false;

            if (col > 0) {

                //Date  
                obstitledatetime = obs.date + " " + obs.time;
                row = 1;
                val = obs.date;
                val = val.replace("-", "<br/>");
                title = "NEWS2 observations";
                //title = obs.formtitle;
                //title = title + "<br/>Click to view the form";
                eformdataid = obs.eformdataid;
                if (val != '') {
                    plotChart(row, col, val, null, title);
                    //$obj = $newsChart.find('tbody > tr:nth-child(' + row + ') > td.nval' + col)
                    //$obj.attr('eformdataid', eformdataid);
                    //$obj.css("cursor", "pointer");
                    //$obj.click(function () { document.location.href = "/eforms/EformPatientXML.asp?EFormDataID=" + $(this).attr('eformdataid') });  
                }

                //Time
                row = 2;
                val = obs.time;
                plotChart(row, col, val);


                //respirations
                val = obs.resp;
                row = 4;
                if ($.isNumeric(val)) {
                    for (var x = 0; x < news.resp.maxArray.length; x++) {
                        if ((val * 1 >= news.resp.minArray[x] * 1) && (val * 1 <= news.resp.maxArray[x] * 1)) {
                            row = row + x;
                            score = news.resp.scoreArray[x];
                            newstotal += score * 1;
                            newstotalstr = newstotalstr + "resp [" + score + "]";
                            if (score == 3) { redscore = true };
                            obs.respscore = score;
                            title = "Respiration " + val + " breaths/min";
                        }
                    }
                }
                if (val != '') {
                    plotChart(row, col, val, plotclass, title);
                }


                //O2 sats scale 1 and 2
                val = obs.oxsat;
                scale = obs.oxsatscale;
                code = obs.oxcode;
                codename = obs.oxcodename;
                percent = obs.oxpercent;
                flow = obs.oxflow;


                if ((flow != '') && (flow != undefined)) {
                    title = "Oxygen sats " + val + "% on oxygen " + flow + "L/min";
                } else {
                    title = "Oxygen sats " + val + "% on air";
                }
                if ((codename != '') && (codename != undefined)) {
                    title += "<br/>via " + codename + " " + code + "";
                }
                obs.oxtitle = title;


                if (scale != '2') {
                    scale = '1'; // use scale 1 by default
                };
                //determine which scale to use. if patient.oxsatscale == 0 then show on the scale selected at the time of assessment - showing both scales if necessary
                if (patient.oxsatscale == '1') {
                    showScale1 = true;
                    scale = patient.oxsatscale;
                } else if (patient.oxsatscale == '2') {
                    showScale2 = true;
                    scale = patient.oxsatscale;
                }

                val = val.replace('%', '');
                if (val != '') {
                    if (scale == '1') {
                        row = 12;
                        if ($.isNumeric(val)) {
                            for (var x = 0; x < news.sat1.maxArray.length; x++) {
                                if ((val * 1 >= news.sat1.minArray[x] * 1) && (val * 1 <= news.sat1.maxArray[x] * 1)) {
                                    row = row + x;
                                    score = news.sat1.scoreArray[x];
                                    newstotal += score * 1;
                                    newstotalstr = newstotalstr + ", sats [" + score + "]";
                                    if (score == 3) { redscore = true };
                                    obs.oxsatscore = score;
                                }
                            }
                        }
                        plotChart(row, col, val, plotclass, title);
                        showScale1 = true; //as contains data
                    } else if (scale == '2') {
                        if ((obs.oxcode != '') || (obs.oxflow != '') || (obs.oxpercent != '')) {
                            start = 0;
                            end = 17;
                            row = 17;
                        } else {
                            start = 3;
                            end = news.sat2.maxArray.length
                            row = 17;
                        }
                        if ($.isNumeric(val)) {
                            for (var x = start; x < end; x++) {
                                if ((val * 1 >= news.sat2.minArray[x] * 1) && (val * 1 <= news.sat2.maxArray[x] * 1)) {
                                    row = row + x;
                                    score = news.sat2.scoreArray[x];
                                    newstotal += score * 1;
                                    newstotalstr = newstotalstr + ", sats [" + score + "]";
                                    if (score == 3) { redscore = true };
                                    obs.oxsatscore = score;
                                    break; //break so as to miss >=93 on no oxygen
                                }
                            }
                        }
                        plotChart(row, col, val, plotclass, title);
                        showScale2 = true; //as contains data
                    }
                }


                //air or oxygen
                val = obs.oxflow;
                code = obs.oxcode;
                codename = obs.oxcodename;
                percent = obs.oxpercent;
                flow = obs.oxflow;

                if (obs.oxtitle != undefined) {
                    title = obs.oxtitle;
                } else {
                    title = null;
                }

                row = 26;
                if (val == '') {
                    val = 'A'
                    score = 0;
                    newstotalstr = newstotalstr + ", onair [" + score + "]";
                } else if (val != undefined) {
                    val = val + "L";
                    score = 2;
                    obs.oxscore = score;
                    newstotal += score * 1;
                    newstotalstr = newstotalstr + ", oxygen [" + score + "]";
                    if (score == 3) { redscore = true };

                };
                //if ((val == 'A') || (val.indexOf('%') != -1)) {
                if ((val == 'A')) {
                    plotChart(row, col, val, 'plotclass2', title);
                }
                if (flow != '') {
                    plotChart(row + 1, col, flow, 'plotclass2', title);
                }
                if (code != '') {
                    plotChart(row + 2, col, code, 'plotted2', title);
                }


                //bp systolic
                val = obs.bps;
                row = 30;
                if ($.isNumeric(val)) {
                    for (var x = 0; x < news.bp.maxArray.length; x++) {
                        if ((val * 1 >= news.bp.minArray[x] * 1) && (val * 1 <= news.bp.maxArray[x] * 1)) {
                            row = row + x;
                            score = news.bp.scoreArray[x];
                            newstotal += score * 1;
                            newstotalstr = newstotalstr + ", bp [" + score + "]";
                            if (score == 3) { redscore = true };
                            obs.bpscore = score;
                        }
                    }
                }
                if (val != '') {
                    plotChart(row, col, val, plotclass, 'BP systolic ' + val + ' mmHg');
                }


                //bp diastolic and range
                sys = obs.bps;
                dia = obs.bpd;
                startrow = 30
                row = 30;
                if ($.isNumeric(dia)) {
                    for (var x = 0; x < news.bp.maxArray.length; x++) {
                        if ($.isNumeric(sys)) {
                            if ((sys * 1 >= news.bp.minArray[x] * 1) && (sys * 1 <= news.bp.maxArray[x] * 1)) {
                                plotChart(startrow + x, col, null, 'systolic');
                            }
                            if ((sys * 1 >= news.bp.minArray[x] * 1) && (dia * 1 <= news.bp.minArray[x] * 1)) {
                                plotChart(startrow + x, col, null, 'diastolicrange', 'BP ' + sys + '/' + dia + ' mmHg');
                            }
                        }

                        if ((dia * 1 >= news.bp.minArray[x] * 1) && (dia * 1 <= news.bp.maxArray[x] * 1)) {
                            row = row + x;
                        }
                    }
                    if (dia != '') {
                        plotChart(row, col, dia, 'diastolic');
                    }
                }


                //pulse
                val = obs.pulse;

                row = 45;

                if ($.isNumeric(val)) {
                    for (var x = 0; x < news.pulse.maxArray.length; x++) {
                        if ((val * 1 >= news.pulse.minArray[x] * 1) && (val * 1 <= news.pulse.maxArray[x] * 1)) {
                            row = row + x;
                            score = news.pulse.scoreArray[x];
                            newstotal += score * 1;
                            newstotalstr = newstotalstr + ", pulse [" + score + "]";
                            if (score == 3) { redscore = true };
                            obs.pulsescore = score;
                            title = "Pulse " + val + " beats/min";
                            if (obs.pulsepattern != undefined) {
                                title = title + " " + obs.pulsepattern.toLowerCase();
                            }
                        }
                    }
                }
                if (val != '') {
                    plotChart(row, col, val, plotclass, title);
                }


                //Conciousness
                val = obs.acvpu;
                title = val;
                val = val.substring(0, 1);
                row = 58;
                if (val != '') {
                    if (val == 'A') {
                        score = 0;
                    } else {
                        if (val == 'C') {
                            row = row + 1;
                            score = news.acvpu.scoreArray[1];
                        } else if (val == 'V') {
                            row = row + 2;
                            score = news.acvpu.scoreArray[2];
                        } else if (val == 'P') {
                            row = row + 3;
                            score = news.acvpu.scoreArray[3];
                        } else if (val == 'U') {
                            row = row + 4;
                            score = news.acvpu.scoreArray[4];
                        }
                    }
                    newstotal += score * 1;
                    newstotalstr = newstotalstr + ", acvpu [" + score + "]";
                    if (score == 3) { redscore = true };
                    obs.acvpuscore = score;
                    plotChart(row, col, val, plotclass, title);
                }


                //Temp
                val = obs.temp;
                row = 64;
                if ($.isNumeric(val)) {
                    for (var x = 0; x < news.temp.maxArray.length; x++) {
                        if ((val * 1 >= news.temp.minArray[x] * 1) && (val * 1 <= news.temp.maxArray[x] * 1)) {
                            row = row + x;
                            score = news.temp.scoreArray[x];
                            newstotal += score * 1;
                            newstotalstr = newstotalstr + ", temp [" + score + "]";
                            if (score == 3) { redscore = true };
                            obs.tempscore = score;
                            title = "Temp " + val + " Celcius";
                        }
                    }
                }
                if (val != '') {
                    plotChart(row, col, val, plotclass, title);
                }


                //NEWS total
                val = newstotal; //calculated by chart
                row = 71;

                var plotclassnews = null;
                if (!isNaN(val)) {
                    if ((val > 2) && (val < 5) && (redscore)) {
                        plotclassnews = "yellowrow";
                        title = newsGuidance.lowmedium.range + ": " + newsGuidance.lowmedium.threshold;
                        title += "<br/>Repeat: " + newsGuidance.lowmedium.repeat;
                        title += formatGuidance(newsGuidance.lowmedium.response);
                    } else if ((val > 4) && (val < 7)) {
                        plotclassnews = "orangerow";
                        title = newsGuidance.medium.range + ": " + newsGuidance.medium.threshold;
                        title += "<br/>Repeat: " + newsGuidance.medium.repeat;
                        title += formatGuidance(newsGuidance.medium.response);
                    } else if ((val > 6) && (val < 21)) {
                        plotclassnews = "redrow";
                        title = newsGuidance.high.range + ": " + newsGuidance.high.threshold;
                        title += "<br/>Repeat: " + newsGuidance.high.repeat;
                        title += formatGuidance(newsGuidance.high.response);
                    } else if ((val > 2) && (val < 5)) {
                        title = newsGuidance.low.range + ": " + newsGuidance.low.threshold;
                        title += "<br/>Repeat: " + newsGuidance.low.repeat;
                        title += formatGuidance(newsGuidance.low.response);
                    } else {
                        title = newsGuidance.none.range + ": " + newsGuidance.none.threshold;
                        title += "<br/>Repeat: " + newsGuidance.none.repeat;
                        title += formatGuidance(newsGuidance.none.response);
                    }
                }
                if (val != '') {
                    //validate form calculation safety check. Flag any difference between the submitted data score and chart calculation - e.g. if patient moved from Ox sat scale 1 to scale 2.
                    if (obs.newstotal != newstotal) {
                        val = val + "*";
                        title = title + "<br/><br/>*The calculated NEWS2 total shown on the chart [" + newstotal + "] differs form original NEWS2 score calculated on the form [" + obs.newstotal + "].";
                    } else {
                        //show NEWS2 title categorisation only
                    }
                    title = "<b>NEWS total: " + newstotal + "</b><br/><br/>" + title + '<div class="newsscores">Chart scores: ' + newstotalstr + '</div>'; //for testing evaluation only
                    plotChart(row, col, val, plotclassnews, title);
                }


                //Monitoring frequency
                repeat = obs.newsrepeat;
                if ((repeat != undefined) && (repeat != "")) {
                    title = "Repeat NEWS set to " + repeat;
                    val = repeat;
                    val = $.trim(val.substring(0, 2)); //extract number
                    plotChart(row + 2, col, val, plotclass, title);
                }


                //Escalation of care
                val = obs.escalation;
                if ((val != undefined) && (val != "")) {
                    title = "Escalated: " + val;
                    val = val.substring(0, 1);
                    plotChart(row + 3, col, val, plotclass, title);
                }


                //User initials
                formuserinitials = obs.userinitials;
                formusername = obs.username;
                formuserid = obs.userid;
                if (formuserinitials != undefined) {
                    val = formuserinitials;
                    if (formusername != undefined) { title = "Entered by " + formusername } else { title = null };;
                    plotChart(row + 4, col, val, plotclass, title);
                }
            }
        }



        //show/hide scale 1+2
        if ((showScale1 === false) && (showScale2 === false)) { showScale1 = true }; //show scale 1 if no data

        if (showScale1 === false) {
            $newsChart.find('tbody > tr.nchart2').hide().next('tr.nspacerow').hide(); //hide scale 1
        } else {
            $newsChart.find('tbody > tr.nchart2').show().next('tr.nspacerow').show(); //hide scale 1
        }
        if (showScale2 === false) {
            $newsChart.find('tbody > tr.nchart3').hide().next('tr.nspacerow').hide(); //hide scale 1
        } else {
            $newsChart.find('tbody > tr.nchart3').show().next('tr.nspacerow').show(); //hide scale 1
        }

        //console.log("showScale1=" + showScale1 + ", showScale2=" + showScale2)

        if (col == 0) {
            $('#newschartcontainer').html('No data');
        } else {
            $('#newschartcontainer').html($newsChart);
            drawPaths();
            setTimeout(function () {
                $("table.newschart > tbody > tr > td.nval").tooltip({
                    classes: {
                        "ui-tooltip": "tooltip"
                    }
                });
            }, 0);
            setTimeout(function () { highlightColumns(); }, 100);

        }

    });
}


//helper function to plot an individual table cell in the table
function plotChart(row, col, val, pclass, title) {
    //return;
    var $obj = $newsChart.find('tbody > tr:nth-child(' + row + ') > td.nval' + col);
    if (val != null) {
        $obj.html(val);
        //$obj.attr("title", val);
    };
    if (pclass != null) { $obj.addClass(pclass) };
    if (title != null) {
        title = "<div class='obstitledatetime'>" + obstitledatetime + "</div>" + title;
        $obj.attr("title", title);
    };
}

function formatGuidance(array) {
    var str = '<div class="newsresponse"><ul>';
    for (var i = 0; i < array.length; i++) {
        str += '<li>'+array[i]+'</li>';
    }
    str += '</ul></div>';
    return str;
}

//Add hover styling to column on chart header hover
function highlightColumns() {
    $('table.newschart > tbody > tr.ndate > td.nval').hover(function () {
        var col = $(this).attr("col");
        $('table.newschart > tbody > tr > td.nval').addClass("colgrey");
        $('table.newschart > tbody > tr > td.nval.nval' + col).addClass("colhover");
    }, function () {
        var col = $(this).attr("col");
        $('table.newschart > tbody > tr > td.nval').removeClass("colgrey");
        $('table.newschart > tbody > tr > td.nval.nval' + col).removeClass("colhover");
    });
}


function togglePaths() {
    if (setPaths) {
        removeSvg();
    } else {
        drawPaths()
    }
}

function toggleScale() {
    if (patient.oxsatscale == '0') {
        patient.oxsatscale = '1'
    } else if (patient.oxsatscale == '1') {
        patient.oxsatscale = '2'
    } else if (patient.oxsatscale == '2') {
        patient.oxsatscale = '0';
    }
    drawNews2Chart();
}

function toggleColour() {
    if (setPathMultiColor) {
        setPathMultiColor = false;
    } else {
        setPathMultiColor = true;
    }
    drawNews2Chart();
}


//Remove all SVG and classes
function removeSvg() {
    $('table.newschart > tbody > tr > td.nval').removeClass("hideborder");
    setPaths = false;
    $('svg').remove();
}




//*********************
//use D3 svg library to create paths (connect observations with lines)
//*********************
function drawPaths() {

    removeSvg();
    setPaths = true;

    var $cell = $('table.newschart > tbody > tr.nchart1 > td.nval1');

    var cw = $cell.width();
    var ch = $cell.height();

    for (var chart = 1; chart < 9; chart++) {

        //Plot only visible charts
        // showScale1 = false; //hide Oxygen saturation scale 1 by default (chart 2)
        // showScale2 = false; //hide Oxygen saturation scale 2 by defaultt (chart 3)

        if ((chart != 4) && (chart != 2 || showScale1) && (chart != 3 || showScale2)) {

            // svg positioning
            var $firstCell = $('table.newschart > tbody > tr.nchart' + chart + ' > td.nval1');
            if ($firstCell.is(":visible")) {
                var svgtop = $firstCell.position().top - 15;
                var svgleft = $firstCell.position().left;
                var sh = $('table.newschart > tbody > tr.nchart' + chart).height() * $('table.newschart > tbody > tr.nchart' + chart).length + 15;
                var sw = $("#newschartcontainer").width() - svgleft;

                var svg = d3.select("#newschartcontainer").append("svg")
                    .attr("width", sw)
                    .attr("height", sh)
                    .attr("id", "svg" + chart)

                $("#newschartcontainer > #svg" + chart).css({ top: svgtop, left: svgleft, position: 'absolute' });

                var data = [];

                for (var col = 1; col < 21; col++) {
                    $cell = $('table.newschart > tbody > tr.nchart' + chart + ' > td.nval' + col + '.plotted');
                    if ($cell.length > 0) {
                        $cell.addClass("hideborder");
                        var pos = $cell.position();
                        var text = $cell.text();
                        var xval = Math.round(pos.left + (cw / 2) + 2) - svgleft;
                        var yval = Math.round(pos.top + (ch / 2) + 1) - svgtop;
                        var y2val = yval;
                        var $cell2 = $('table.newschart > tbody > tr.nchart' + chart + ' > td.nval' + col + '.diastolic');
                        if ($cell2.length > 0) {
                            var pos2 = $cell2.position();
                            var y2val = Math.round(pos2.top + (ch / 2) - ch + 2) - svgtop;
                            $('table.newschart > tbody > tr.nchart' + chart + ' > td.nval' + col).addClass("hideborder");
                        }
                        storeCoordinate(xval, yval, text, y2val, data);
                    }
                }

                //datajson = JSON.stringify(data)
                //console.log(datajson)
                //data = JSON.parse(datajson)
                //console.log(data);
                drawD3(chart, data, svg)


            }
        }

    }

}


//helper functions
function storeCoordinate(xVal, yVal, textStr, y2Val, array) {
    array.push({ X: xVal, Y: yVal, text: textStr, Y2: y2Val });
}



//d3 draw the path data
function drawD3(chart, data, svg) {

    if (setPathMultiColor) {
        var linecolour = pathColorArray[chart];
    } else {
        var linecolour = pathColorArray[0];
    }

    var line = d3.svg.line()
        .x(function (d) { return d.X; })
        .y(function (d) { return d.Y; })


    var t = svg.append("text")
        .attr("transform", "translate(0, 0)")

    var g = svg.append("g")
        .attr("transform", "translate(0, 0)")

    // Create paths
    g.selectAll("path").data([data]).enter().append("path")
        .attr("class", "line")
        .attr("d", line)
        .style("stroke", linecolour);



    // Display data value above circle
    g.selectAll("text").data(data).enter().append("text")
        .attr("dx", function (d) { return d.X - 7 })
        .attr("dy", function (d) { return d.Y - 10 })
        .text(function (d) { return d.text })
        .attr("class", "text-id");

    // Creating line between systolic and diastolic
    if (chart == 5) {
        g.selectAll("line").data(data).enter().append("line")
            .attr("x1", function (d) { return d.X })
            .attr("y1", function (d) { return d.Y })
            .attr("x2", function (d) { return d.X })
            .attr("y2", function (d) { return d.Y2 })
            .attr("class", "linedash")
            .style("stroke-dasharray", "3,3")
            .style("stroke", linecolour);
    };

    //Add circles
    g.selectAll("circle").data(data).enter().append("circle")
        .attr("cx", function (d) { return d.X; })
        .attr("cy", function (d) { return d.Y; })
        .attr("r", 5)
        .style("fill", linecolour);

}


