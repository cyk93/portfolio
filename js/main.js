window.addEventListener('DOMContentLoaded', function () {


    gsap.registerPlugin(ScrollTrigger);

    const stage = document.querySelector('#container');
    const container = Scrollbar.init(stage, {
        damping: 0.1,
        delegateTo: stage,
        continuousScrolling: true,
        alwaysShowTracks: false,
    });
    container.setPosition(0, 0);
    container.track.xAxis.element.remove();
    // Scrollbar.detachStyle();



    ScrollTrigger.scrollerProxy("body", {

        scrollTop(value) {

            if (arguments.length) {
                container.scrollTop = value;
            }

            return container.scrollTop;

        }
    });





    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        console.log(scrollTop);


        // $('.box1').css('transform', `translateY(${scrollTop * 0.7}px)`)




	if(scrollTop >= 7){

            $('.title').addClass('on');
        }

	if(scrollTop >= 70){

            $('.title').addClass('on');
        }


	if(scrollTop >= 70){

            $('.title1').addClass('on');
        }


	if(scrollTop >= 70){

            $('.title2').addClass('on');
        }

	if(scrollTop >= 70){

            $('.title3').addClass('on');
        }


	if(scrollTop >= 70){

            $('.title4').addClass('on');
        }



	if(scrollTop >= 70){

            $('.title5').addClass('on');
        }


    if(scrollTop >= 1){

            $('.cloud').addClass('on');
        }



    if(scrollTop >= 70){

            $('.cloud1').addClass('on');
        }


    if(scrollTop >= 70){

            $('.cloud2').addClass('on');
        }



    if(scrollTop >= 70){

            $('.cloud3').addClass('on');
        }


    if(scrollTop >= 70){

            $('.vendor').addClass('on');
        }



    if(scrollTop >= 70){

            $('.balloonhouse').addClass('on');
        }


    if(scrollTop >= 70){

            $('.pinkhouse').addClass('on');
        }






	if(scrollTop >= 70){

            $('.leftbg').addClass('on');
        }




	if(scrollTop >= 70){

            $('.leftbg1').addClass('on');
        }




	if(scrollTop >= 70){

            $('.leftbg2').addClass('on');
        }





	if(scrollTop >= 70){

            $('.leftbg3').addClass('on');
        }




    if(scrollTop >= 70){

            $('.leftbg4').addClass('on');
        }




	if(scrollTop >= 70){

            $('.rightbg').addClass('on');
        }




	if(scrollTop >= 70){

            $('.rightbg1').addClass('on');
        }




	if(scrollTop >= 70){

            $('.rightbg2').addClass('on');
        }



    if(scrollTop >= 70){

            $('.rightbg3').addClass('on');
        }



    if(scrollTop >= 70){

            $('.runbunny').addClass('on');
        }





    if(scrollTop >= 100){

            $('.bubble').addClass('on');
        }



    if(scrollTop >= 100){

            $('.bubble2').addClass('on');
        }




    if(scrollTop >= 100){

            $('.bubble3').addClass('on');
        }





    if(scrollTop >= 100){

            $('.bubble4').addClass('on');
        }







    if(scrollTop >= 150){

            $('.bg').addClass('on');
        }



    if(scrollTop >= 200){

            $('.bg1').addClass('on');
        }




    if(scrollTop >= 100){

            $('.sitrabbit').addClass('on');
        }



 

    if(scrollTop >= 70){

            $('.horse').addClass('on');
        }


    if(scrollTop >= 70){

            $('.horse1').addClass('on');
        }


    if(scrollTop >= 70){

            $('.flag').addClass('on');
        }


    if(scrollTop >= 70){

            $('.fountain').addClass('on');
        }

    if(scrollTop >= 70){

            $('.fountain1').addClass('on');
        }

    if(scrollTop >= 70){

            $('.phonecall').addClass('on');
        }


    if(scrollTop >= 70){

            $('.photo').addClass('on');
        }

    if(scrollTop >= 70){

            $('.lantern').addClass('on');
        }

    if(scrollTop >= 70){

            $('.lantern1').addClass('on');
        }

 

    if(scrollTop >= 70){

            $('.minicar').addClass('on');
        }



    if(scrollTop >= 70){

            $('.blueballoon').addClass('on');
        }



    if(scrollTop >= 70){

            $('.blueballoon1').addClass('on');
        }

    if(scrollTop >= 70){

            $('.pinkballoon').addClass('on');
        }



    if(scrollTop >= 70){

            $('.pinkballoon1').addClass('on');
        }



    if(scrollTop >= 70){

            $('.icecreamballoon').addClass('on');
        }



    if(scrollTop >= 70){

            $('.frontrow').addClass('on');
        }



    if(scrollTop >= 70){

            $('.frontrow1').addClass('on');
        }




    if(scrollTop >= 70){

            $('.frontrow2').addClass('on');
        }




    if(scrollTop >= 70){

            $('.frontrow3').addClass('on');
        }


    if(scrollTop >= 70){

            $('.frontrow4').addClass('on');
        }


    if(scrollTop >= 70){

            $('.second').addClass('on');
        }

    if(scrollTop >= 70){

            $('.second1').addClass('on');
        }


    if(scrollTop >= 70){

            $('.third').addClass('on');
        }


    if(scrollTop >= 70){

            $('.third1').addClass('on');
        }

    if(scrollTop >= 70){

            $('.third2').addClass('on');
        }

    if(scrollTop >= 70){

            $('.third3').addClass('on');
        }


    if(scrollTop >= 70){

            $('.corridor').addClass('on');
        }

    if(scrollTop >= 70){

            $('.corridor1').addClass('on');
        }


    if(scrollTop >= 70){

            $('.corridor2').addClass('on');
        }

   if(scrollTop >= 70){

            $('.light').addClass('on');
        }



    if(scrollTop >= 70){

            $('.light1').addClass('on');
        }


    if(scrollTop >= 70){

            $('.light2').addClass('on');
        }


    if(scrollTop >= 70){

            $('.light3').addClass('on');
        }


    if(scrollTop >= 70){

            $('.selfie').addClass('on');
        }


    if(scrollTop >= 70){

            $('.heartrabbit').addClass('on');
        }

    if(scrollTop >= 70){

            $('.stationrabbit').addClass('on');
        }




   if(scrollTop >= 70){

            $('.bg2').addClass('on');
        }


    if(scrollTop >= 70){

            $('.bg3').addClass('on');
        }



    if(scrollTop >= 70){

            $('.bg4').addClass('on');
        }



    if(scrollTop >= 70){

            $('.bg6').addClass('on');
        }






    if(scrollTop >= 70){

            $('.dotbg').addClass('on');
        }


    if(scrollTop >= 70){

            $('.dotbg1').addClass('on');
        }


    if(scrollTop >= 70){

            $('.dotbg2').addClass('on');
        }



    if(scrollTop >= 2562){

            $('.worm1').addClass('on');
        }



    if(scrollTop >= 2621){

            $('.worm2').addClass('on');
        }

    if(scrollTop >= 2572){

            $('.flower1').addClass('on');
        }


    if(scrollTop >= 2572){

            $('.s3title').addClass('on');
        }




    if(scrollTop >= 2572){

            $('.s3overview').addClass('on');
        }

    if(scrollTop >= 2572){

            $('.s3overview1').addClass('on');
        }


    if(scrollTop >= 2572){

            $('.s3overview2').addClass('on');
        }




    if(scrollTop >= 2572){

            $('.s3title1').addClass('on');
        }



    if(scrollTop >= 2572){

            $('.s3title2').addClass('on');
        }




    if(scrollTop >= 2572){

            $('.s3title3').addClass('on');
        }


    if(scrollTop >= 2572){

            $('.s3title4').addClass('on');
        }



    if(scrollTop >= 2572){

            $('.s3text').addClass('on');
        }


    if(scrollTop >= 2572){

            $('.s3img').addClass('on');
        }



    if(scrollTop >= 2572){

            $('.s3img1').addClass('on');
        }


    if(scrollTop >= 2572){

            $('.s3img2').addClass('on');
        }



    if(scrollTop >= 2572){

            $('.s3img3').addClass('on');
        }



    if(scrollTop >= 2572){

            $('.s3img4').addClass('on');
        }



    if(scrollTop >= 2572){

            $('.s3img5').addClass('on');
        }




    if(scrollTop >= 2572){

            $('.pin').addClass('on');
        }


    if(scrollTop >= 2993){

            $('.keyword').addClass('on');
        }


    if(scrollTop >= 2993){

            $('.keyword1').addClass('on');
        }

    if(scrollTop >= 2993){

            $('.keyword2').addClass('on');
        }


    if(scrollTop >= 2993){

            $('.keyword3').addClass('on');
        }

    if(scrollTop >= 2993){

            $('.keyword4').addClass('on');
        }


    if(scrollTop >= 2572){

            $('.s3bunny').addClass('on');
        }

    if(scrollTop >= 2993){

            $('.s3bunny1').addClass('on');
        }


    if(scrollTop >= 2993){

            $('.s3bunny2').addClass('on');
        }

    if(scrollTop >= 3105){

            $('.s3cloud').addClass('on');
        }

    if(scrollTop >= 3105){

            $('.s3cloud1').addClass('on');
        }


    if(scrollTop >= 3105){

            $('.s3cloud2').addClass('on');
        }

    if(scrollTop >= 3105){

            $('.s3cloud3').addClass('on');
        }


    if(scrollTop >= 3105){

            $('.s3cloud4').addClass('on');
        }


    if(scrollTop >= 2572){

            $('.s3sticker').addClass('on');
        }

    if(scrollTop >= 2572){

            $('.s3sticker1').addClass('on');
        }


    if(scrollTop >= 2572){

            $('.s3sticker2').addClass('on');
        }



    if(scrollTop >= 2572){

            $('.s3bigdot').addClass('on');
        }

    if(scrollTop >= 2572){

            $('.s3bigdot1').addClass('on');
        }


    if(scrollTop >= 2572){

            $('.s3bigdot2').addClass('on');
        }



    if(scrollTop >= 2572){

            $('.s3smalldot').addClass('on');
        }

    if(scrollTop >= 2572){

            $('.s3smalldot1').addClass('on');
        }


    if(scrollTop >= 2572){

            $('.s3smalldot2').addClass('on');
        }



    if(scrollTop >= 3847){

            $('.s4flower').addClass('on');
        }


    if(scrollTop >= 3647){

            $('.s4flower1').addClass('on');
        }




    if(scrollTop >= 4165){

            $('.s4sticker').addClass('on');
        }




    if(scrollTop >= 4165){

            $('.s4sticker').addClass('on');
        }


    if(scrollTop >= 4165){

            $('.s4note').addClass('on');
        }


    if(scrollTop >= 4165){

            $('.s4note1').addClass('on');
        }




    if(scrollTop >= 4165){

            $('.s4note2').addClass('on');
        }





    if(scrollTop >= 4165){

            $('.s4sparkle').addClass('on');
        }




    if(scrollTop >= 4165){

            $('.s4title').addClass('on');
        }



    if(scrollTop >= 4165){

            $('.s4title1').addClass('on');
        }



    if(scrollTop >= 4165){

            $('.s4title2').addClass('on');
        }



    if(scrollTop >= 4165){

            $('.s4content').addClass('on');
        }



    if(scrollTop >= 4165){

            $('.s4content1').addClass('on');
        }



    if(scrollTop >= 4165){

            $('.s4content2').addClass('on');
        }




    if(scrollTop >= 4165){

            $('.s4star').addClass('on');
        }





    if(scrollTop >= 4165){

            $('.s4stick').addClass('on');
        }


    if(scrollTop >= 4165){

            $('.s4stick1').addClass('on');
        }


    if(scrollTop >= 4165){

            $('.s4stick2').addClass('on');
        }



    if(scrollTop >= 4165){

            $('.s4stick3').addClass('on');
        }



    if(scrollTop >= 4165){

            $('.s4stick4').addClass('on');
        }




    if(scrollTop >= 4165){

            $('.s4text').addClass('on');
        }



    if(scrollTop >= 4165){

            $('.s4text1').addClass('on');
        }




    if(scrollTop >= 4165){

            $('.s4text2').addClass('on');
        }



    if(scrollTop >= 4165){

            $('.s4text3').addClass('on');
        }

    if(scrollTop >= 4165){

            $('.s4etc').addClass('on');
        }


    if(scrollTop >= 4165){

            $('.s4etc1').addClass('on');
        }


    if(scrollTop >= 4165){

            $('.s4etc2').addClass('on');
        }


    if(scrollTop >= 4165){

            $('.s4etc3').addClass('on');
        }




    if(scrollTop >= 4939){

            $('.s5bg').addClass('on');
        }






    if(scrollTop >= 4939){

            $('.s5bg1').addClass('on');
        }





    if(scrollTop >= 4939){

            $('.s5bg2').addClass('on');
        }





    if(scrollTop >= 4939){

            $('.s5bg3').addClass('on');
        }





    if(scrollTop >= 4939){

            $('.s5bg4').addClass('on');
        }





    if(scrollTop >= 4939){

            $('.s5sticker').addClass('on');
        }



    if(scrollTop >= 4939){

            $('.s5sticker1').addClass('on');
        }



    if(scrollTop >= 4939){

            $('.s5sticker2').addClass('on');
        }



    if(scrollTop >= 5000){

            $('.s5title').addClass('on');
        }



    if(scrollTop >= 5000){

            $('.s5title1').addClass('on');
        }


    if(scrollTop >= 5000){

            $('.s5title2').addClass('on');
        }


    if(scrollTop >= 3820){

            $('.s5right').addClass('on');
        }


    if(scrollTop >= 3820){

            $('.s5right1').addClass('on');
        }



    if(scrollTop >= 3820){

            $('.s5right2').addClass('on');
        }


    if(scrollTop >= 3820){

            $('.s5right3').addClass('on');
        }


    if(scrollTop >= 3820){

            $('.s5left').addClass('on');
        }



    if(scrollTop >= 3820){

            $('.s5left1').addClass('on');
        }



    if(scrollTop >= 3820){

            $('.s5left2').addClass('on');
        }

    if(scrollTop >= 3820){

            $('.s5left3').addClass('on');
        }


    if(scrollTop >= 3820){

            $('.s5left4').addClass('on');
        }





    if(scrollTop >= 3820){

            $('.s5rabbit').addClass('on');
        }




    if(scrollTop >= 4600){

            $('.s5sticker3').addClass('on');
        }


    if(scrollTop >= 4600){

            $('.s5sticker4').addClass('on');
        }

    if(scrollTop >= 4600){

            $('.s5sticker5').addClass('on');
        }


    if(scrollTop >= 60){

            $('.s7rabbit1').addClass('on');
        }



    if(scrollTop >= 5273){

            $('.s5rabbit1').addClass('on');
        }



    if(scrollTop >= 5649){

            $('.s5up').addClass('on');
        }


    if(scrollTop >= 5649){

            $('.s5up1').addClass('on');
        }


    if(scrollTop >= 5649){

            $('.s5up2').addClass('on');
        }



    if(scrollTop >= 5649){

            $('.s5up3').addClass('on');
        }


    if(scrollTop >= 5649){

            $('.s5up4').addClass('on');
        }


    if(scrollTop >= 5649){

            $('.s5up5').addClass('on');
        }


    if(scrollTop >= 5649){

            $('.s5up6').addClass('on');
        }



    if(scrollTop >= 5649){

            $('.s5up7').addClass('on');
        }


    if(scrollTop >= 5649){

            $('.s5upgraph').addClass('on');
        }



    if(scrollTop >= 5649){

            $('.s5upgraph1').addClass('on');
        }


    if(scrollTop >= 5649){

            $('.s5upgraph2').addClass('on');
        }



    if(scrollTop >= 5649){

            $('.s5upgraph3').addClass('on');
        }


    if(scrollTop >= 6511){

            $('.s5down').addClass('on');
        }


    if(scrollTop >= 6511){

            $('.s5down1').addClass('on');
        }




    if(scrollTop >= 6511){

            $('.s5down2').addClass('on');
        }



    if(scrollTop >= 6511){

            $('.s5down3').addClass('on');
        }



    if(scrollTop >= 6511){

            $('.s5downele').addClass('on');
        }



    if(scrollTop >= 6511){

            $('.s5downele1').addClass('on');
        }



    if(scrollTop >= 6511){

            $('.s5downele2').addClass('on');
        }



    if(scrollTop >= 6511){

            $('.s5downele3').addClass('on');
        }



    if(scrollTop >= 6511){

            $('.s5downele4').addClass('on');
        }


    if(scrollTop >= 6511){

            $('.s5downele5').addClass('on');
        }



    if(scrollTop >= 6511){

            $('.s5downele6').addClass('on');
        }



    if(scrollTop >= 6511){

            $('.s5downele7').addClass('on');
        }



    if(scrollTop >= 6511){

            $('.s5downgraph').addClass('on');
        }



    if(scrollTop >= 6511){

            $('.s5downgraph1').addClass('on');
        }



    if(scrollTop >= 6511){

            $('.s5downgraph2').addClass('on');
        }



    if(scrollTop >= 6511){

            $('.s5downgraph3').addClass('on');
        }



    if(scrollTop >= 6511){

            $('.s5downgraph4').addClass('on');
        }




    if(scrollTop >= 6511){

            $('.s5downgraph5').addClass('on');
        }





    if(scrollTop >= 6511){

            $('.s5downgraph6').addClass('on');
        }





    if(scrollTop >= 6511){

            $('.s5downgraph7').addClass('on');
        }


    if(scrollTop >= 4600){

            $('.s6tape').addClass('on');
        }

    if(scrollTop >= 4600){

            $('.s6tape1').addClass('on');
        }

    if(scrollTop >= 4600){

            $('.s6tape2').addClass('on');
        }

    if(scrollTop >= 4600){

            $('.s6tape3').addClass('on');
        }


    if(scrollTop >= 7519){

            $('.s6title').addClass('on');
        }

    if(scrollTop >= 7519){

            $('.s6title1').addClass('on');
        }

    if(scrollTop >= 7519){

            $('.s6title2').addClass('on');
        }

    if(scrollTop >= 7519){

            $('.s6title3').addClass('on');
        }



    if(scrollTop >= 7519){

            $('.s6title4').addClass('on');
        }


    if(scrollTop >= 7519){

            $('.s6title5').addClass('on');
        }


    if(scrollTop >= 7519){

            $('.s6persona').addClass('on');
        }


    if(scrollTop >= 7519){

            $('.s6persona1').addClass('on');
        }

    if(scrollTop >= 7519){

            $('.s6persona2').addClass('on');
        }

    if(scrollTop >= 7700){

            $('.s6doll').addClass('on');
        }



    if(scrollTop >= 7700){

            $('.s6doll1').addClass('on');
        }


    if(scrollTop >= 7700){

            $('.s6doll2').addClass('on');
        }


    if(scrollTop >= 7700){

            $('.s6doll3').addClass('on');
        }


    if(scrollTop >= 7700){

            $('.s6doll4').addClass('on');
        }


    if(scrollTop >= 7700){

            $('.s6doll5').addClass('on');
        }



    if(scrollTop >= 7700){

            $('.s6doll6').addClass('on');
        }



    if(scrollTop >= 7700){

            $('.s6doll7').addClass('on');
        }



    if(scrollTop >= 7700){

            $('.s6doll8').addClass('on');
        }



    if(scrollTop >= 7700){

            $('.s6doll9').addClass('on');
        }



    if(scrollTop >= 7700){

            $('.s6doll10').addClass('on');
        }



    if(scrollTop >= 7700){

            $('.s6doll11').addClass('on');
        }


    if(scrollTop >= 7700){

            $('.s6adoll').addClass('on');
        }



    if(scrollTop >= 7700){

            $('.s6adoll1').addClass('on');
        }


    if(scrollTop >= 7700){

            $('.s6adoll2').addClass('on');
        }


    if(scrollTop >= 7700){

            $('.s6adoll3').addClass('on');
        }


    if(scrollTop >= 7700){

            $('.s6adoll4').addClass('on');
        }


    if(scrollTop >= 7700){

            $('.s6adoll5').addClass('on');
        }



    if(scrollTop >= 7700){

            $('.s6adoll6').addClass('on');
        }



    if(scrollTop >= 7700){

            $('.s6adoll7').addClass('on');
        }



    if(scrollTop >= 7700){

            $('.s6adoll8').addClass('on');
        }



    if(scrollTop >= 7700){

            $('.s6adoll9').addClass('on');
        }



    if(scrollTop >= 7700){

            $('.s6adoll10').addClass('on');
        }



    if(scrollTop >= 7700){

            $('.s6adoll11').addClass('on');
        }




    if(scrollTop >= 8200){

            $('.s7tape').addClass('on');
        }




    if(scrollTop >= 8200){

            $('.s7tape1').addClass('on');
        }




    if(scrollTop >= 8200){

            $('.s7tape2').addClass('on');
        }



    if(scrollTop >= 8600){

            $('.s7title').addClass('on');
        }

    if(scrollTop >= 8600){

            $('.s7title1').addClass('on');
        }



    if(scrollTop >= 8600){

            $('.s7title2').addClass('on');
        }


    if(scrollTop >= 8600){

            $('.s7title3').addClass('on');
        }



    if(scrollTop >= 8600){

            $('.s7ele').addClass('on');
        }


    if(scrollTop >= 8600){

            $('.s7ele1').addClass('on');
        }


    if(scrollTop >= 8600){

            $('.s7ele2').addClass('on');
        }



    if(scrollTop >= 8700){

            $('.s7rabbit1').addClass('on');
        }


    if(scrollTop >= 8700){

            $('.s7cloud1').addClass('on');
        }



    if(scrollTop >= 8700){

            $('.s7box').addClass('on');
        }


    if(scrollTop >= 8700){

            $('.s7box1').addClass('on');
        }


    if(scrollTop >= 8700){

            $('.s7painpoint').addClass('on');
        }



    if(scrollTop >= 8700){

            $('.s7painpoint1').addClass('on');
        }

    if(scrollTop >= 8700){

            $('.s7painpoint2').addClass('on');
        }


    if(scrollTop >= 8700){

            $('.s7painpoint3').addClass('on');
        }

    if(scrollTop >= 8700){

            $('.s7painpoint4').addClass('on');
        }

   if(scrollTop >= 8700){

            $('.s7number1').addClass('on');
        }

   if(scrollTop >= 8700){

            $('.s7number2').addClass('on');
        }



   if(scrollTop >= 8700){

            $('.s7sparkle1').addClass('on');
        }

   if(scrollTop >= 8700){

            $('.s7sparkle2').addClass('on');
        }


   if(scrollTop >= 8700){

            $('.s7heart1').addClass('on');
        }

    if(scrollTop >= 8703){

            $('.s7smalltitle').addClass('on');
        }

    if(scrollTop >= 8703){

            $('.s7smalltitle1').addClass('on');
        }

    if(scrollTop >= 8703){

            $('.s7smalltitle2').addClass('on');
        }


    if(scrollTop >= 8703){

            $('.s7tobe').addClass('on');
        }



    if(scrollTop >= 8703){

            $('.s7tobe1').addClass('on');
        }


    if(scrollTop >= 8703){

            $('.s7tobe2').addClass('on');
        }

    if(scrollTop >= 8703){

            $('.s7tobe3').addClass('on');
        }

    if(scrollTop >= 8703){

            $('.s7tobe4').addClass('on');
        }


   if(scrollTop >= 8703){

            $('.s7number01').addClass('on');
        }

   if(scrollTop >= 8703){

            $('.s7number02').addClass('on');
        }


    if(scrollTop >= 8703){

            $('.s7rabbit2').addClass('on');
        }

   if(scrollTop >= 8703){

            $('.s7heart2').addClass('on');
        }


    if(scrollTop >= 8703){

            $('.s7cloud2').addClass('on');
        }




    if(scrollTop >= 8703){

            $('.s7cloud2').addClass('on');
        }



    if(scrollTop >= 10500){

            $('.s8bg').addClass('on');
        }



    if(scrollTop >= 9900){

            $('.s8bg1').addClass('on');
        }


    if(scrollTop >= 9900){

            $('.s8bg2').addClass('on');
        }


    if(scrollTop >= 10000){

            $('.s8line').addClass('on');
        }

    if(scrollTop >= 10000){

            $('.s8line1').addClass('on');
        }

    if(scrollTop >= 10000){

            $('.s8line2').addClass('on');
        }

    if(scrollTop >= 10000){

            $('.s8line3').addClass('on');
        }

    if(scrollTop >= 10000){

            $('.s8line4').addClass('on');
        }

    if(scrollTop >= 10000){

            $('.s8line5').addClass('on');
        }



    if(scrollTop >= 10000){

            $('.s8rabbit').addClass('on');
        }



    if(scrollTop >= 10000){

            $('.s8title').addClass('on');
        }



    if(scrollTop >= 10000){

            $('.s8title1').addClass('on');
        }


    if(scrollTop >= 10000){

            $('.s8title2').addClass('on');
        }


    if(scrollTop >= 10100){

            $('.s8text').addClass('on');
        }


    if(scrollTop >= 10300){

            $('.s8text1').addClass('on');
        }

    if(scrollTop >= 10300){

            $('.s8chart').addClass('on');
        }


    if(scrollTop >= 10300){

            $('.s8rabbit1').addClass('on');
        }


    if(scrollTop >= 10300){

            $('.s8rabbit2').addClass('on');
        }

    if(scrollTop >= 10300){

            $('.s8cloud').addClass('on');
        }

    if(scrollTop >= 10300){

            $('.s8cloud1').addClass('on');
        }

    if(scrollTop >= 10300){

            $('.s8cloud2').addClass('on');
        }

    if(scrollTop >= 11000){

            $('.s9sticker').addClass('on');
        }

   if(scrollTop >= 11000){

            $('.s9sticker1').addClass('on');
        }

   if(scrollTop >= 11500){

            $('.s9sticker2').addClass('on');
        }

   if(scrollTop >= 11000){

            $('.s9sticker3').addClass('on');
        }

   if(scrollTop >= 11000){

            $('.s9sticker4').addClass('on');
        }

   if(scrollTop >= 11000){

            $('.s9sticker5').addClass('on');
        }

   if(scrollTop >= 12000){

            $('.s9sticker6').addClass('on');
        }


    if(scrollTop >= 11000){

            $('.s9title').addClass('on');
        }


    if(scrollTop >= 11000){

            $('.s9title1').addClass('on');
        }

    if(scrollTop >= 11000){

            $('.s9title2').addClass('on');
        }


    if(scrollTop >= 11000){

            $('.s9screen').addClass('on');
        }

    if(scrollTop >= 11000){

            $('.s9screen1').addClass('on');
        }

    if(scrollTop >= 11000){

            $('.s9screen2').addClass('on');
        }

    if(scrollTop >= 11000){

            $('.s9screen3').addClass('on');
        }

    if(scrollTop >= 11000){

            $('.s9screen4').addClass('on');
        }




    if(scrollTop >= 11000){

            $('.s9text').addClass('on');
        }


    if(scrollTop >= 11000){

            $('.s9text1').addClass('on');
        }


    if(scrollTop >= 11000){

            $('.s9text2').addClass('on');
        }



    if(scrollTop >= 11000){

            $('.s9text3').addClass('on');
        }


    if(scrollTop >= 11000){

            $('.s9text4').addClass('on');
        }


    if(scrollTop >= 11000){

            $('.s9text5').addClass('on');
        }


    if(scrollTop >= 11000){

            $('.s9dot').addClass('on');
        }



    if(scrollTop >= 16000){

            $('.s9object').addClass('on');
        }



    if(scrollTop >= 16000){

            $('.s10title').addClass('on');
        }



    if(scrollTop >= 16000){

            $('.s10title1').addClass('on');
        }


    if(scrollTop >= 13000){

            $('.s10object').addClass('on');
        }


    if(scrollTop >= 13000){

            $('.s10object1').addClass('on');
        }



    if(scrollTop >= 13000){

            $('.s10object2').addClass('on');
        }


    if(scrollTop >= 13000){

            $('.s10object3').addClass('on');
        }



    if(scrollTop >= 13000){

            $('.s10object4').addClass('on');
        }


    if(scrollTop >= 17000){

            $('.s10typo').addClass('on');
        }



    if(scrollTop >= 13000){

            $('.s10flower').addClass('on');
        }


    if(scrollTop >= 13000){

            $('.s10flower1').addClass('on');
        }



    if(scrollTop >= 13000){

            $('.s10flower2').addClass('on');
        }

    if(scrollTop >= 13000){

            $('.s10flower3').addClass('on');
        }

    if(scrollTop >= 13000){

            $('.s11flower1').addClass('on');
        }



    if(scrollTop >= 13000){

            $('.s11flower3').addClass('on');
        }





    if(scrollTop >= 13000){

            $('.s10screen').addClass('on');
        }



    if(scrollTop >= 13000){

            $('.s10screen1').addClass('on');
        }


    if(scrollTop >= 13000){

            $('.s10screen2').addClass('on');
        }


    if(scrollTop >= 13000){

            $('.s10screen3').addClass('on');
        }


    if(scrollTop >= 13000){

            $('.s10screen4').addClass('on');
        }


    if(scrollTop >= 13000){

            $('.s10screen5').addClass('on');
        }


    if(scrollTop >= 13000){

            $('.s10screen6').addClass('on');
        }

    if(scrollTop >= 13000){

            $('.s10screenvid').addClass('on');
        }


    if(scrollTop >= 13000){

            $('.s10screenvid1').addClass('on');
        }




    if(scrollTop >= 13000){

            $('.s10arrow').addClass('on');
        }



    if(scrollTop >= 13000){

            $('.s10arrow1').addClass('on');
        }



    if(scrollTop >= 13000){

            $('.s10heart').addClass('on');
        }



    if(scrollTop >= 13000){

            $('.s10heart1').addClass('on');
        }



    if(scrollTop >= 13000){

            $('.s10heart2').addClass('on');
        }



    if(scrollTop >= 19000){

            $('.s10coin').addClass('on');
        }

    if(scrollTop >= 20000){

            $('.s10coin1').addClass('on');
        }



    if(scrollTop >= 18000){

            $('.s10card').addClass('on');
        }


    if(scrollTop >= 18000){

            $('.s10card1').addClass('on');
        }


    if(scrollTop >= 18000){

            $('.s10card2').addClass('on');
        }



    if(scrollTop >= 13000){

            $('.s10rabbit').addClass('on');
        }

    if(scrollTop >= 13000){

            $('.s10rabbit1').addClass('on');
        }

    if(scrollTop >= 20000){

            $('.s10rabbit2').addClass('on');
        }

    if(scrollTop >= 20000){

            $('.s10rabbit3').addClass('on');
        }





    if(scrollTop >= 13000){

            $('.s10dot').addClass('on');
        }



    if(scrollTop >= 13000){

            $('.s10dot1').addClass('on');
        }



    if(scrollTop >= 13000){

            $('.s10text').addClass('on');
        }

    if(scrollTop >= 13000){

            $('.s10text2').addClass('on');
        }
    if(scrollTop >= 13000){

            $('.s10text3').addClass('on');
        }




    if(scrollTop >= 20500){

            $('.s10board').addClass('on');
        }




    if(scrollTop >= 20500){

            $('.s10board1').addClass('on');
        }


    if(scrollTop >= 20500){

            $('.s10board2').addClass('on');
        }




    if(scrollTop >= 20500){

            $('.s10board3').addClass('on');
        }




    if(scrollTop >= 21500){

            $('.s11paint').addClass('on');
        }

    if(scrollTop >= 22000){

            $('.s11text').addClass('on');
        }



    if(scrollTop >= 22000){

            $('.s11mockup').addClass('on');
        }


    if(scrollTop >= 22000){

            $('.s11vid').addClass('on');
        }

   if(scrollTop >= 22000){

            $('.s11coin').addClass('on');
        }



   if(scrollTop >= 22000){

            $('.s11block').addClass('on');
        }


   if(scrollTop >= 22300){

            $('.s11tube').addClass('on');
        }


   if(scrollTop >= 22300){

            $('.s11tube').addClass('on');
        }




   if(scrollTop >= 24000){

            $('.s12title').addClass('on');
        }


   if(scrollTop >= 24000){

            $('.s12title1').addClass('on');
        }

   if(scrollTop >= 24000){

            $('.s12text').addClass('on');
        }


   if(scrollTop >= 24000){

            $('.s12text1').addClass('on');
        }

   if(scrollTop >= 24000){

            $('.s12mockup').addClass('on');
        }


   if(scrollTop >= 24000){

            $('.s12vid').addClass('on');
        }



   if(scrollTop >= 24500){

            $('.s12map').addClass('on');
        }
   if(scrollTop >= 24500){

            $('.s12map1').addClass('on');
        }

   if(scrollTop >= 24500){

            $('.s12map2').addClass('on');
        }

   if(scrollTop >= 24000){

            $('.s12sticker').addClass('on');
        }

   if(scrollTop >= 24500){

            $('.s12pin').addClass('on');
        }

   if(scrollTop >= 24000){

            $('.s12icecream').addClass('on');
        }

   if(scrollTop >= 24000){

            $('.s12ice').addClass('on');
        }

   if(scrollTop >= 24000){

            $('.s12ice1').addClass('on');
        }



   if(scrollTop >= 24000){

            $('.s12light').addClass('on');
        }



   if(scrollTop >= 24000){

            $('.s12rabbit').addClass('on');
        }

 
   if(scrollTop >= 26200){

            $('.s13tape').addClass('on');
        }


   if(scrollTop >= 26500){

            $('.s13line').addClass('on');
        }

   if(scrollTop >= 26500){

            $('.s13line1').addClass('on');
        }

   if(scrollTop >= 26200){

            $('.s13title').addClass('on');
        }



   if(scrollTop >= 26200){

            $('.s13stamp').addClass('on');
        }

   if(scrollTop >= 26200){

            $('.s13stamp1').addClass('on');
        }

   if(scrollTop >= 26400){

            $('.s13mockup').addClass('on');
        }


   if(scrollTop >= 26400){

            $('.s13vid').addClass('on');
        }

   if(scrollTop >= 26400){

            $('.s13vid1').addClass('on');
        }

   if(scrollTop >= 26400){

            $('.s13object').addClass('on');
        }



   if(scrollTop >= 29000){

            $('.s14title').addClass('on');
        }




   if(scrollTop >= 29100){

            $('.s14line').addClass('on');
        }



   if(scrollTop >= 29100){

            $('.s14sticker').addClass('on');
        }

   if(scrollTop >= 29100){

            $('.s14rabbit').addClass('on');
        }



   if(scrollTop >= 29100){

            $('.s14mockup').addClass('on');
        }


   if(scrollTop >= 29100){

            $('.s14stamp').addClass('on');
        }


   if(scrollTop >= 29100){

            $('.s14stamp1').addClass('on');
        }

   if(scrollTop >= 29100){

            $('.s14text').addClass('on');
        }

   if(scrollTop >= 29100){

            $('.s14text1').addClass('on');
        }


   if(scrollTop >= 30500){

            $('.s14carting').addClass('on');
        }



   if(scrollTop >= 33000){

            $('.s15line').addClass('on');
        }


   if(scrollTop >= 33000){

            $('.s15line1').addClass('on');
        }

   if(scrollTop >= 33000){

            $('.s15line2').addClass('on');
        }



   if(scrollTop >= 33000){

            $('.s15folder').addClass('on');
        }


   if(scrollTop >= 33000){

            $('.s15mockup').addClass('on');
        }

   if(scrollTop >= 33000){

            $('.s15rainbow').addClass('on');
        }

   if(scrollTop >= 33000){

            $('.s15sparkle').addClass('on');
        }

   if(scrollTop >= 34000){

            $('.s15cloud').addClass('on');
        }


   if(scrollTop >= 34000){

            $('.s15cloud').addClass('on');
        }


   if(scrollTop >= 34000){

            $('.s15title').addClass('on');
        }



   if(scrollTop >= 35900){

            $('.s15typo').addClass('on');
        }



   if(scrollTop >= 35900){

            $('.s15typo1').addClass('on');
        }




   if(scrollTop >= 35900){

            $('.s15typo2').addClass('on');
        }


   if(scrollTop >= 35900){

            $('.s15typo3').addClass('on');
        }



   if(scrollTop >= 35900){

            $('.s15film').addClass('on');
        }


   if(scrollTop >= 35900){

            $('.s15mockup2').addClass('on');
        }


   if(scrollTop >= 35900){

            $('.s15rabbit1').addClass('on');
        }


   if(scrollTop >= 35900){

            $('.s15rabbit2').addClass('on');
        }



   if(scrollTop >= 35900){

            $('.s15rabbit3').addClass('on');
        }



   if(scrollTop >= 35900){

            $('.s15rabbit4').addClass('on');
        }


   if(scrollTop >= 35900){

            $('.s15sticker').addClass('on');
        }


   if(scrollTop >= 35900){

            $('.s15sticker1').addClass('on');
        }


   if(scrollTop >= 34000){

            $('.s15cirlce').addClass('on');
        }

   if(scrollTop >= 34000){

            $('.s15cirlce1').addClass('on');
        }


   if(scrollTop >= 36000){

            $('.s15text').addClass('on');
        }

   if(scrollTop >= 37000){

            $('.s15text1').addClass('on');
        }


   if(scrollTop >= 37000){

            $('.s15text2').addClass('on');
        }


   if(scrollTop >= 38000){

            $('.s15thankyou').addClass('on');
        }


   if(scrollTop >= 38000){

            $('.s15thankyou1').addClass('on');
        }


   if(scrollTop >= 38000){

            $('.s15thankyou2').addClass('on');
        }


   if(scrollTop >= 38000){

            $('.s15tflower').addClass('on');
        }


   if(scrollTop >= 38000){

            $('.s15tflower1').addClass('on');
        }



   if(scrollTop >= 38000){

            $('.s15tflower2').addClass('on');
        }


   if(scrollTop >= 38000){

            $('.s15tflower3').addClass('on');
        }



   if(scrollTop >= 38000){

            $('.s15smile').addClass('on');
        }

   if(scrollTop >= 38000){

            $('.s15smile1').addClass('on');
        }


   if(scrollTop >= 38000){

            $('.s15smile2').addClass('on');
        }


   if(scrollTop >= 38000){

            $('.s15tsparkle').addClass('on');
        }

   if(scrollTop >= 38000){

            $('.s15foot').addClass('on');
        }


   if(scrollTop >= 38000){

            $('.s15foot1').addClass('on');
        }



   if(scrollTop >= 38300){

            $('.s15foot2').addClass('on');
        }


   if(scrollTop >= 38300){

            $('.s15foot3').addClass('on');
        }





   if(scrollTop >= 100){

            $('.marquee').addClass('on');
        }


    });




    $('.startPoint').click(function () {

        container.scrollTo(0, 0, 600, {
            callback: () => console.log('done!'),
            easing: easing.easeInOutCirc,
        });


    });





    (function () {


        setTimeout(()=>{
            $('.main').addClass('on');
        },1000)
	$('.logo').addClass('on')
 	$('.bg_top').addClass('on');
	 $('.main_title1').addClass('on');
	 $('.main_title2').addClass('on');
	$('.sub_title').addClass('on');
/*

        gsap.to(".box2", {
            x: 400,
            scrollTrigger: {
                trigger: ".box2",
                start: "top center",
                end: "top 100px",
                scrub: 1,
                markers: false,
                id: "scrub"
            }
        });

        gsap.to(".box3", {
            x: 400,
            rotation: 360,
            scrollTrigger: {
                trigger: ".box3",
                start: "top center",
                end: "top 100px",
                scrub: 1,
                markers: true,
                id: "scrub"
            }
        });*/

    })();



})
