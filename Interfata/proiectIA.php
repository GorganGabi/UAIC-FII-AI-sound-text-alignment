<!DOCTYPE html>
<html lang="en">
<head>
	<title>Text Alignment</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="proiectIA.css">
</head>
<body>
	<div class="header">
		<h2>Text Alignment</h2>
	</div>

  <div class="main">
    <h1>Fun way to align your text</h1>
    <p>Inset your text down below</p>
    <form action="#">
      <textarea rows="2" cols="50" class="mainTexarea" placeholder="Textul tau aici"></textarea>
    </form>
    <p>Insert your audio file down below</p>
    <form action="upload.php" method="POST" enctype="multipart/form-data">
       <label for="browse"></label>
          <br>
             <input type="file" name="file" >
      <input type='submit' name='trimite' value='Send'>
    </form>
  </div>
  <script src="https://unpkg.com/wavesurfer.js"></script>
<div id="waveform" ></div>
<script type="text/javascript">
  var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    scrollParent: true,
    waveColor: 'green',
    progressColor: 'white'
});
  wavesurfer.on('ready', function () {
    wavesurfer.play();
});

  wavesurfer.load('muzica2.mp3');
</script>
<div id="textFormDiv">
<embed src="test.txt" id="textform">
</div>
   <audio id="audiofile" src="muzica2.mp3" controls autostart></audio><br>
        <div id="subtitles"></div>
        <script>
        ( function(win, doc) {
            var audioPlayer = doc.getElementById("audiofile");
            var subtitles = doc.getElementById("subtitles");
            var syncData = [
                  { "end": "0.225","start": "0.125","text": "There" },
                  {"end": "0.485","start": "0.225","text": "were" },
                  /* ... and so on ... full json is in the demo */
                ];
            createSubtitle();

            function createSubtitle()
            {
                var element;
                for (var i = 0; i < syncData.length; i++) {
                    element = doc.createElement('span');
                    element.setAttribute("id", "c_" + i);
                    element.innerText = syncData[i].text + " ";
                    subtitles.appendChild(element);
                }
            }

            audioPlayer.addEventListener("timeupdate", function(e){
                syncData.forEach(function(element, index, array){
                    if( audioPlayer.currentTime >= element.start && audioPlayer.currentTime <= element.end )
                        subtitles.children[index].style.background = 'yellow';
                });
            });
        }(window, document));
        </script>
	<div class="footer">
  		<p> 2018 &copy; All rights reserved | developed by UAIC Students</p>
	</div>

</body>
</html>