$(document).ready(function () {

    showGraph();

});


const showGraph = () => {

    {

        $.post("data.php",function (data)

        {

            console.log(data);

            var name = [];

            var marks = [];


            for (var i in data) {

                name.push(data[i].player_name);

                marks.push(data[i].player_score);

            }


            var chartdata = {

                labels: name,

                datasets: [

                    {

                        label: 'Player Scores',
                        backgroundColor: [
                            'rgb(255, 241, 0)',
                            'rgb(255, 140, 0)',
                            'rgb(232, 17, 35)',
                            'rgb(236, 0, 140)',
                            'rgb(104, 33, 122)',
                            'rgb(0, 24, 143)',
                            'rgb(0, 188, 242)',
                            'rgb(0, 178, 148)',
                            'rgb(0, 158, 73)',
                            'rgb(186, 216, 10)'
                        ],

                        data: marks

                    }

                ]

            };


            var graphTarget = $("#graph");


            var donutGraph = new Chart(graphTarget, {

                type: 'doughnut',

                data: chartdata

            });

            var graphBar = $("#bar");

            var barGraph = new Chart(graphBar, {

                type: 'bar',

                data: chartdata
            })

        });

    }

}