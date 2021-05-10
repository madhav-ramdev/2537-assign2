$(document).ready(function () {
    "use strict";

    function getUsers() {
        $.ajax({
            url: "/get-users",
            dataType: "json",
            type: "GET",
            success: function (data) {
                console.log(data);
                let newRow = `<table class= "table table-hover table-dark table-striped" id="users"><tr>
                <th class="id_header"><span>ID</span></th>
                <th class="name_header"><span>Name</span></th>
                <th class="location_header"><span>Location</span></th>
                <th class="gas_header"><span>Gas Vehicle (Yes / No)</span></th>
                <th class="emissions_header"><span>Emission Count (in CO2 tons)</span></th>
                <th class="delete_header"><span>Click to Delete</span></th>
                </tr>`;

                for (let i = 0; i < data.rows.length; i++) {
                    let row = data.rows[i];
                    newRow += ("<tr><td class='userID'>" + row.userID +
                        "</td><td class='userName'><span>" + row.userName +
                        "</span></td><td class='location'><span>" + row.location +
                        "</span></td><td class='gasBool'><span>" + row.gasBool +
                        "</span></td><td class='emission'><span>" + row.emission +
                        "</span></td><td class='delete'><button id = '" + row.userID + "' class = 'btn btn-danger delBtn'>╳</button> </td></tr>");
                }
                newRow += "</table>";
                $("#container").html(newRow);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                $("#p2").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    }
    getUsers();

    $('#submit-btn').click(function (e) {
        e.preventDefault();

        let formData = {
            userID: $("#userID").val(),
            userName: $("#userName").val(),
            location: $("#location").val(),
            gasBool: $("#gasBool").val(),
            emission: $("#emission").val()
        };
        $("#userID").val("");
        $("#userName").val("");
        $("#location").val("");
        $("#gasBool").val("");
        $("#emission").val("");

        $.ajax({
            url: "/add-user",
            dataType: "json",
            type: "POST",
            data: formData,
            success: function (data) {
                $("#requestStatus").html("The user's data was added to the database.");
                getUsers();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                $("#p2").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });

    // --------------------------- DELETE FUNCTIONS START HERE -------------------------

    // $('#deleteRecord1').click(function (e) {
    //     e.preventDefault();

    //     $.ajax({
    //         url: "/delete-Record-1",
    //         dataType: "json",
    //         type: "POST",
    //         success: function (data) {
    //             console.log(data);
    //             $("#status").html("Record 1 deleted.");
    //             getUsers();
    //         },
    //         error: function (jqXHR, textStatus, errorThrown) {
    //             $("#p2").text(jqXHR.statusText);
    //             console.log("ERROR:", jqXHR, textStatus, errorThrown);
    //         }
    //     });
    // });

    // $('#deleteRecord2').click(function (e) {
    //     e.preventDefault();

    //     $.ajax({
    //         url: "/delete-Record-2",
    //         dataType: "json",
    //         type: "POST",
    //         success: function (data) {
    //             console.log(data);
    //             $("#status").html("Record 2 deleted.");
    //             getUsers();
    //         },
    //         error: function (jqXHR, textStatus, errorThrown) {
    //             $("#p2").text(jqXHR.statusText);
    //             console.log("ERROR:", jqXHR, textStatus, errorThrown);
    //         }
    //     });
    // });

    // $('#deleteRecord3').click(function (e) {
    //     e.preventDefault();

    //     $.ajax({
    //         url: "/delete-Record-3",
    //         dataType: "json",
    //         type: "POST",
    //         success: function (data) {
    //             console.log(data);
    //             $("#status").html("Record 3 deleted.");
    //             getUsers();
    //         },
    //         error: function (jqXHR, textStatus, errorThrown) {
    //             $("#p2").text(jqXHR.statusText);
    //             console.log("ERROR:", jqXHR, textStatus, errorThrown);
    //         }
    //     });
    // });

    // $('#deleteRecord4').click(function (e) {
    //     e.preventDefault();

    //     $.ajax({
    //         url: "/delete-Record-4",
    //         dataType: "json",
    //         type: "POST",
    //         success: function (data) {
    //             console.log(data);
    //             $("#status").html("Record 4 deleted.");
    //             getUsers();
    //         },
    //         error: function (jqXHR, textStatus, errorThrown) {
    //             $("#p2").text(jqXHR.statusText);
    //             console.log("ERROR:", jqXHR, textStatus, errorThrown);
    //         }
    //     });
    // });

    // $('#deleteRecord5').click(function (e) {
    //     e.preventDefault();

    //     $.ajax({
    //         url: "/delete-Record-5",
    //         dataType: "json",
    //         type: "POST",
    //         success: function (data) {
    //             console.log(data);
    //             $("#status").html("Record 5 deleted.");
    //             getUsers();
    //         },
    //         error: function (jqXHR, textStatus, errorThrown) {
    //             $("#p2").text(jqXHR.statusText);
    //             console.log("ERROR:", jqXHR, textStatus, errorThrown);
    //         }
    //     });
    // });

    // $('#deleteRecord6').click(function (e) {
    //     e.preventDefault();

    //     $.ajax({
    //         url: "/delete-Record-6",
    //         dataType: "json",
    //         type: "POST",
    //         success: function (data) {
    //             console.log(data);
    //             $("#status").html("Record 6 deleted.");
    //             getUsers();
    //         },
    //         error: function (jqXHR, textStatus, errorThrown) {
    //             $("#p2").text(jqXHR.statusText);
    //             console.log("ERROR:", jqXHR, textStatus, errorThrown);
    //         }
    //     });
    // });

    // $('#deleteRecord7').click(function (e) {
    //     e.preventDefault();

    //     $.ajax({
    //         url: "/delete-Record-7",
    //         dataType: "json",
    //         type: "POST",
    //         success: function (data) {
    //             console.log(data);
    //             $("#status").html("Record 7 deleted.");
    //             getUsers();
    //         },
    //         error: function (jqXHR, textStatus, errorThrown) {
    //             $("#p2").text(jqXHR.statusText);
    //             console.log("ERROR:", jqXHR, textStatus, errorThrown);
    //         }
    //     });
    // });

    // $('#deleteRecord8').click(function (e) {
    //     e.preventDefault();

    //     $.ajax({
    //         url: "/delete-Record-8",
    //         dataType: "json",
    //         type: "POST",
    //         success: function (data) {
    //             console.log(data);
    //             $("#status").html("Record 8 deleted.");
    //             getUsers();
    //         },
    //         error: function (jqXHR, textStatus, errorThrown) {
    //             $("#p2").text(jqXHR.statusText);
    //             console.log("ERROR:", jqXHR, textStatus, errorThrown);
    //         }
    //     });
    // });

    // $('#deleteRecord9').click(function (e) {
    //     e.preventDefault();

    //     $.ajax({
    //         url: "/delete-Record-9",
    //         dataType: "json",
    //         type: "POST",
    //         success: function (data) {
    //             console.log(data);
    //             $("#status").html("Record 9 deleted.");
    //             getUsers();
    //         },
    //         error: function (jqXHR, textStatus, errorThrown) {
    //             $("#p2").text(jqXHR.statusText);
    //             console.log("ERROR:", jqXHR, textStatus, errorThrown);
    //         }
    //     });
    // });

    // $('#deleteRecord10').click(function (e) {
    //     e.preventDefault();

    //     $.ajax({
    //         url: "/delete-Record-10",
    //         dataType: "json",
    //         type: "POST",
    //         success: function (data) {
    //             console.log(data);
    //             $("#status").html("Record 10 deleted.");
    //             getUsers();
    //         },
    //         error: function (jqXHR, textStatus, errorThrown) {
    //             $("#p2").text(jqXHR.statusText);
    //             console.log("ERROR:", jqXHR, textStatus, errorThrown);
    //         }
    //     });
    // });

    $('#container').on('click', 'span', function () {

        if ($(this).parent().attr('class') === 'gasBool') {
            let spanText = $(this).text();
            let td = $(this).parent();
            let input = $("<input type='text' value='" + spanText + "'>");

            td.html(input);
            $(input).keyup(function (e) {
                let val = null;
                let span = null;
                if (e.which == 13) {
                    val = $(input).val();
                    span = $("<span>" + val + "</span>");
                    td.html(span);

                    console.log(td.parent().find("[class='userID']")[0]);

                    let dataToServer = {
                        id: td.parent().find("[class='userID']").html(),
                        gasBool: val
                    };

                    $.ajax({
                        url: "update-userBool",
                        dataType: "json",
                        type: "POST",
                        data: dataToServer,
                        success: function (data) {
                            $("#requestStatus").html("The data was updated on the database.");
                            getUsers();
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            $("#p2").text(jqXHR.statusText);
                            console.log("ERROR:", jqXHR, textStatus, errorThrown);
                        }
                    });
                }
            });
        }
    });

    $('#container').on('click', 'span', function () {

        if ($(this).parent().attr('class') === 'userName') {
            let spanText = $(this).text();
            let td = $(this).parent();
            let input = $("<input type='text' value='" + spanText + "'>");

            td.html(input);
            $(input).keyup(function (e) {
                let val = null;
                let span = null;
                if (e.which == 13) {
                    val = $(input).val();
                    span = $("<span>" + val + "</span>");
                    td.html(span);

                    console.log(td.parent().find("[class='userID']")[0]);

                    let dataToServer = {
                        id: td.parent().find("[class='userID']").html(),
                        userName: val
                    };

                    $.ajax({
                        url: "update-userName",
                        dataType: "json",
                        type: "POST",
                        data: dataToServer,
                        success: function (data) {
                            $("#requestStatus").html("The data was updated on the database.");
                            getUsers();
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            $("#p2").text(jqXHR.statusText);
                            console.log("ERROR:", jqXHR, textStatus, errorThrown);
                        }
                    });
                }
            });
        }
    });

    $('#container').on('click', 'span', function () {

        if ($(this).parent().attr('class') === 'location') {
            let spanText = $(this).text();
            let td = $(this).parent();
            let input = $("<input type='text' value='" + spanText + "'>");

            td.html(input);
            $(input).keyup(function (e) {
                let val = null;
                let span = null;
                if (e.which == 13) {
                    val = $(input).val();
                    span = $("<span>" + val + "</span>");
                    td.html(span);

                    console.log(td.parent().find("[class='userID']")[0]);

                    let dataToServer = {
                        id: td.parent().find("[class='userID']").html(),
                        location: val
                    };

                    $.ajax({
                        url: "update-userLocation",
                        dataType: "json",
                        type: "POST",
                        data: dataToServer,
                        success: function (data) {
                            $("#requestStatus").html("The data was updated on the database.");
                            getUsers();
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            $("#p2").text(jqXHR.statusText);
                            console.log("ERROR:", jqXHR, textStatus, errorThrown);
                        }
                    });
                }
            });
        }
    });

    $(document).on('click', '.delBtn', function(){

        let deleteButton = $(this);

        let dataToServer = {
            userID: deleteButton.attr('id')
        };
        // id: td.parent().find("[class='userID']").html()
        $.ajax({
            url: "/delete-user",
            dataType: "json",
            type: "POST",
            data: dataToServer,
            success: function (data) {
                console.log(data);
                $("#status").html("Record Deleted");
                getUsers();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                $("#p2").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });

    //     if ($(this).parent().attr('class') === 'gasBool') {
    //         let spanText = $(this).text();
    //         let td = $(this).parent();
    //         let input = $("<input type='text' value='" + spanText + "'>");

    //         td.html(input);
    //         $(input).keyup(function (e) {
    //             let val = null;
    //             let span = null;
    //             if (e.which == 13) {
    //                 val = $(input).val();
    //                 span = $("<span>" + val + "</span>");
    //                 td.html(span);

    //                 console.log(td.parent().find("[class='userID']")[0]);

    //                 let dataToServer = {
    //                     id: td.parent().find("[class='userID']").html(),
    //                     gasBool: val
    //                 };

    //                 $.ajax({
    //                     url: "update-user",
    //                     dataType: "json",
    //                     type: "POST",
    //                     data: dataToServer,
    //                     success: function (data) {
    //                         $("#requestStatus").html("The data was updated on the database.");
    //                         getUsers();
    //                     },
    //                     error: function (jqXHR, textStatus, errorThrown) {
    //                         $("#p2").text(jqXHR.statusText);
    //                         console.log("ERROR:", jqXHR, textStatus, errorThrown);
    //                     }
    //                 });
    //             }
    //         });
    //     }
    // });

    // $('#submit-btn').click(function (e) {
    //     e.preventDefault(); 
    // function clickFunction(clicked_id) {
    //     let variableX = clicked_id;

    // if ($(this).parent().attr('class') === 'delBtn') {
    //     // let spanText = $(this).text();
    //     let td = $(this).parent();
    //     // let input = $("<input type='button' value='delete'>");

    //     // td.html(input);
    //     $(this).keyup(function (e) {
    //         let val = null;
    //         let span = null;
    // if (e.which == 46) {
    // val = $(input).val();
    // span = $("<span>" + val + "</span>");
    // td.html(span);

    // console.log(td.parent().find("[class='userID']")[0]);

    // let dataToServer = {
    //     id: variableX
    // id: this.parent().find("[class='delBtn']"),
    // gasBool: val
    // };

    // $.ajax({
    //     url: "delete-user",
    //     dataType: "json",
    //     type: "POST",
    //     data: dataToServer,
    //     success: function (data) {
    //         $("#requestStatus").html("The data was deleted on the database.");
    //         getUsers();
    //     },
    //     error: function (jqXHR, textStatus, errorThrown) {
    //         $("#p2").text(jqXHR.statusText);
    //         console.log("ERROR:", jqXHR, textStatus, errorThrown);
    //     }
    // });
    // }
    // });
    // }
    // };


    $('#container').on('click', 'span', function () {

        if ($(this).parent().attr('class') === 'emission') {
            let spanText = $(this).text();
            let td = $(this).parent();
            let input = $("<input type='text' value='" + spanText + "'>");

            td.html(input);
            $(input).keyup(function (e) {
                let val = null;
                let span = null;
                if (e.which == 13) {
                    val = $(input).val();
                    span = $("<span>" + val + "</span>");
                    td.html(span);

                    console.log(td.parent().find("[class='userID']")[0]);

                    let dataToServer = {
                        id: td.parent().find("[class='userID']").html(),
                        emission: val
                    };

                    $.ajax({
                        url: "update-userEmission",
                        dataType: "json",
                        type: "POST",
                        data: dataToServer,
                        success: function (data) {
                            $("#requestStatus").html("The data was updated on the database.");
                            getUsers();
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            $("#p2").text(jqXHR.statusText);
                            console.log("ERROR:", jqXHR, textStatus, errorThrown);
                        }
                    });
                }
            });
        }
    });


});