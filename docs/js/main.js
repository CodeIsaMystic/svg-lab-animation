(function ($) {
  /**
   *   Variables
   * 
  **/
  const $body = $('body'),
    $coin = $('#Coin'),
    path = [ { x: -90, y: 120 }, { x: -45, y: -220 }, { x: 0, y: 120 } ],
    $BulbIdea = $('#BulbIdea'),
    $BulbIdeaLight = $('#MainBulb2'),
    $Part1 = $('#Part1'),
    $Jowd = $('#Jowd'),
    $h1 = $('h1'),
    $MainBulb = $('#MainBulb'),
    $Liquids = $('.liquid'),
    $Liquid01 = $('#Liquid1'),
    $Liquid02 = $('#Liquid2'),
    $Liquid03 = $('#Liquid3'),
    $Liquid04 = $('#Liquid4'),
    $Liquid05 = $('#Liquid5'),
    $Liquid06 = $('#Liquid6'),
    $Liquid07 = $('#Liquid7'),
    $Liquid08 = $('#Liquid8'),
    $Liquid09 = $('#Liquid9'),
    $LiquidInsideMask01 = $('#LiquidInside1Mask'),
    $LiquidInsideMask02 = $('#LiquidInside2Mask'),
    $LiquidInsideMask03 = $('#LiquidInside3Mask'),
    $LiquidInsideMask04 = $('#LiquidInside4Mask'),
    $LiquidInsideMask05 = $('#LiquidInside5Mask'),
    $LiquidInsideMask06 = $('#LiquidInside6Mask'),
    $LiquidInsideMask07 = $('#LiquidInside7Mask'),
    $bulb1 = $('#Bulb1 .bulb'),
    $bulb2 = $('#Bulb2 .bulb'),
    $bulb3 = $('#Bulb3 .bulb'),
    $meterBcg = $('#meterBcg'),
    $meterStroke = $('#meterStroke'),
    $part2Light = $('#Part2 .light'),
    //$part2LightLeft = $('#Part2 .light-left'),
    //$part2LightMid = $('#Part2 .light-mid'),
    //$part2LightRight = $('#Part2 .light-right'),
    $printerLightsTop = $('#PrinterLightTop, #PrinterLightTop_2_'),
    $printerLightsBottom = $('#PrinterLightBottom, #PrinterLightBottom_1_'),
    //$mainLight = $('#MainLight'),
    $paper = $('#Paper'),
    $paperText = $('#PaperText text'),
    $slider = $('#Slider'),
    $pointer = $('#pointer'),
    $stage = $('#stage'),
    $MainMask = $('#MainMask'),
    $smile = $('#smile');

  const $mainTl = new TimelineMax();

  /**
   * Set the ClearStage Function
   * Hiding here various pieces of the svg
   *
   * return a Timeline
   */
  function clearStage() {
    const clearTl = new TimelineMax();

    clearTl
      .set($coin, { x: -90, y: 120, scale: 0.5, transformOrigin: 'center center' })
      .set($MainBulb, { fill: '#ffffff' })
      .set($Liquids, { stroke: '#ffffff' })
      .set($Jowd, { autoAlpha: 1, x: '1400%', scale: 2.5, transformOrigin: 'bottom center' })
      .set($stage, { autoAlpha: 0.5 })
      .set($MainMask, {attr: { x: 932}})
      // Clear Liquid
      .set($LiquidInsideMask01, { attr: { y: 492 }}) /* rect (l.32 index.html) ==> y value == y + height (77+415)*/
      .set($LiquidInsideMask02, { attr: { y: 494}})
      .set($LiquidInsideMask03, { attr: { y: 491 }})
      .set($LiquidInsideMask04, { attr: { y: 650 }})
      .set($LiquidInsideMask05, { attr: { y: 654}})
      .set($LiquidInsideMask06, { attr: { y: 651 }})
      .set($LiquidInsideMask07, { attr: { y: 651}})
      .set($LiquidInsideMask07, { attr: { y: 651 }})
      //  Set the pointer
      .set($pointer, { rotation: -45, transformOrigin: 'bottom center'})
      // Clear Paper
      .set($paper, { y: '+=55'});

    return clearTl;
  }

  /**
   * Set the Intro Function
   * Introducing background, headings and Jowd
   *
   * return a Timeline
   */
  function getIntroTl() {
    const introTl = new TimelineMax();

    introTl
      .set($h1, { y: '-=30px'})
      .set($body, { className: '+=is-active' }, 'zoom-out+=1' )
      .to($Jowd, 0.2, { x: '1000%', ease: Power4.easeInOut})
      .fromTo( $h1,0.5, { x: '-46%', autoAlpha: 0}, { x: '-50%', autoAlpha: 1 }, '-=0.4')
      .fromTo($smile,0.4,{  scale: 0.4, transformOrigin: 'center center'},{ scale: 1, ease: Power4.easeInOut }, '+=1')
      .add('zoom-out')
      .to($Jowd, 1,{ x: '0%', scale: 1, ease: Power4.easeInOut},'zoom-out+=1') //  zouming out after 1s
      .to( $h1, 0.5,{ autoAlpha: 0}, 'zoom-out+=1' ) //  zouming out after 1s
      .to( $MainMask, 1, { attr: {  x: 131},  ease: Power4.easeInOut},'zoom-out+=1') //  zouming out after 1s
      .set($h1, { y: '-=60px',
        text: 'and this is my Greensock Lab!',
      }) // following h1 text
      .add('text-in')
      .to( $h1,0.3,{ y: '+=20px', autoAlpha: 1,  ease: Power4.easeInOut}, 'text-in' )
      .to( $h1, 0.2, { y: '+=10px', autoAlpha: 0,  ease: Power4.easeInOut},'+=2'
      )
      .set($h1, { y: '-=30px', text: "Let's have some fun..."}) // following h1 text
      .to($h1, 0.3, { y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut})
      .to($h1, 0.2, {  y: '+=10px',  autoAlpha: 0, ease: Power4.easeInOut},'+=2')
      .to( $stage, 0.2,{autoAlpha: 1, ease: Power0.none},'-=0.2' );

    return introTl;
  }

  /**
   * Set the getIdea Function
   * Animating Bulbs, Coin and changing the headings
   *
   * return a Timeline
   */
  function getIdeaTl() {
    const ideaTl = new TimelineMax();

    ideaTl
      .set($BulbIdea, { autoAlpha: 1, immediateRender: false})
      .from($BulbIdea, 0.5, { y: '+=40px', ease: Bounce.easeOut})

      .set($h1, { y: '-=30px', text: 'You have a cool Idea, right?'}) // following h1 text
      .to($h1, 0.3, { y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut})
      .to( $h1,0.2,{ y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut},'+=1.5')
      .set($h1, { y: '-=30px', text: 'and Now Whaat?...' })

      .fromTo($BulbIdeaLight, 0.2, { fill: '#FFFFFF' }, { fill: '#73C996', repeat: 3, yoyo: true })
      .fromTo( $BulbIdeaLight, 0.2,{ fill: '#FFFFFF' },{ fill: '#F8876E', repeat: 3,  yoyo: true})
      .fromTo( $BulbIdeaLight, 0.8, { fill: '#FFFFFF'}, { fill: '#F8AD43' })
      .to($BulbIdea, 0.6, {  y: '-=20px', scale: 1.1, transformOrigin: 'center bottom', ease: Power4.easeOut})
      .to($BulbIdea, 0.2, { y: '+=120px', scale: 0.8, ease: Back.easeIn})

      // idea / coin out of the head
      .set( $coin,{  autoAlpha: 1 }, '+=0.3' )
      .to($coin, 3.5, { rotation: 720, bezier: { curvines: 0.3, values: path }, ease: SlowMo.ease.config(0.9, 0.7, false)})
      .to( $h1,0.3, { y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut },'+=1.5')

      .to( $h1, 0.2, { y: '+=10px', autoAlpha: 0,  ease: Power4.easeInOut}, '+=1')
      .set( $h1,{  y: '-=30px',text: 'Let GreenSock do the rest!' })
      .to( $h1, 0.3, { y: '+=20px',autoAlpha: 1, ease: Power4.easeInOut }, '+=.5')
      .to( $h1, 0.2, {  y: '+=10px',  autoAlpha: 0,  ease: Power4.easeInOut}, '+=1.2')
      .to($Part1, 0.06, {rotation: 5, y: '+=5px', x: '+=3px', transformOrigin: 'bottom right', repeat: 5, yoyo: true});

    return ideaTl;
  }

  /**
   * Set the getPart2 Function
   * Animating the First Machine and changing the headings
   *
   * return a Timeline
   */
  function getPart2Tl() {
    const part2Tl = new TimelineMax();

    part2Tl
      .add('part2-lights')
      .to($pointer, 2, { rotation: 20 })
      .staggerTo( $part2Light, 0.1,{ fill: '#F8AD43'}, 0.1, 'part2-lights')
      .staggerTo( $part2Light, 0.1, { fill: '#F8876E'}, 0.1,'part2-lights+=0.5' )
      .staggerTo( $part2Light, 0.1, { fill: '#73C996' }, 0.1, 'part2-lights+=1')
      .to( $meterBcg, 0.2,{ fill: '#5AB783'}, 'part2-lights+=1.2')
      .to( $meterStroke, 0.2,{ stroke: '#448962' },'part2-lights+=1.2')
      .to($slider, 1.2, { x: '-=10px', ease: Power4.easeInOut }, 'part2-lights+=1.4')
      .set( $bulb1, { fill: '#5AB783'}, 'part2-lights+=2.6')
      .set($bulb2, { fill: '#F8876E' },'part2-lights+=3' )
      .set( $bulb3, { fill: '#F8AD43' },'part2-lights+=3.4');

    return part2Tl;
  }

  /**
   * Set the fillTubes (pipes) Function
   * New Timeline function to fill the pipes with gsap animation
   * Using the jakearchibald.com/2013/animated-line-drawing-svg animation
   *
   * return a new Timeline
   */
  function getFillTubesTl() {
    const fillTubesTl = new TimelineMax();

    /**
		 *  Javascript snippet to Get the all $Liquids Path Length
		 *  	(the Liquid order is mixed up in the Illustrator file)
		
		const path = document.querySelector('#Liquid1');
		const length = path.getTotalLength();
		
		console.log(length);

		* 01 - 345
		* 02 - 101
		* 03 - 124
		* 04 - 124
		* 05 - 228
		* 06 - 124
		* 07 - 213
		* 08 - 393
		* 09 - 131
	  */

    // Get an Array of each Liquids Path (9)
    const liquidLength = [131, 213, 228, 124, 124, 124, 101, 345, 393];
    //console.log($Liquids);

    /**
     * Reset all liquids to invisible state  (there are exceptions)
     * forEach Loop all the Liquids to set their own Path with Anonymous Function
     *
     * @param index of the liquidLength Array
     * @param element Liquid0$ var
     */
    $Liquids.each(function (index, element) {
      TweenMax.set(element, {
        strokeDasharray: liquidLength[index],
        strokeDashoffset: liquidLength[index],
      });
    });

    fillTubesTl
      .set($Liquids, { stroke: '#F8876E'})
      .to($Liquid01, 2, { strokeDashoffset: 0, ease: Power0.easeNone})
      //  create a Tween
      .add('flask01')
      .set($h1, { y: '-=30px', text: 'create A Tween' })
      .to($h1, 0.3, { y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut})
      .to($h1, 0.2, {  y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut,}, '+=2'
      )
      .set($h1, { y: '-=30px', text: 'and another one'})
      .to( $Liquid02,0.5, {  strokeDashoffset: 0, ease: Power0.easeNone },'-=0.2')
      // add another one
      .add('flask02')
      .to($h1, 0.3, { y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut })
      .to( $h1, 0.2, {   y: '+=10px', autoAlpha: 0,  ease: Power4.easeInOut },'+=2'
      )
      .set($h1, {  y: '-=30px', text: 'then a Timeline',})
      .to( $Liquid03, 0.5, { strokeDashoffset: 0,ease: Power0.easeNone, },  '-=0.1')
      // then a Timeline
      .add('flask03')
      .to($h1, 0.3, {  y: '+=20px',  autoAlpha: 1,  ease: Power4.easeInOut, })
      .to(  $h1, 0.2,{ y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut},'+=2')
      .set($h1, {y: '-=30px', text: 'and multiple Timelines'})
      .to($Liquid04, 0.5, { strokeDashoffset: 0, ease: Power0.easeNone})
      .to($Liquid05, 0.6, { strokeDashoffset: 0, ease: Power0.easeNone })
      // and multiple Timelines
      .to($Liquid06, 0.7, { strokeDashoffset: 0, ease: Power0.easeNone})
      .add('flask04')
      .to($h1, 0.3, { y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut})
      .to($h1, 0.2,{ y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut}, '+=2'
      )
      .set($h1, { y: '-=30px', text: 'fine-tune easing'})
      .to($Liquid07, 1.4, { strokeDashoffset: 0, ease: Power0.easeNone})
      //  fine-tune easing
      .to($Liquid08, 1.5, { strokeDashoffset: 0, ease: Power0.easeNone})
      .add('flask06')
      .to($h1, 0.3, { y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut})
      .to($h1, 0.2, {  y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut},'+=2')
      .set($h1, { y: '-=30px', text: 'Master Greensock Animations'})
      .to($Liquid09, 0.6, { strokeDashoffset: 0, ease: Power0.easeNone})
      .add('flask07')
      .to($h1, 0.3, { y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut})
      .to($h1, 0.2,{ y: '+=10px',  autoAlpha: 0, ease: Power4.easeInOut },'+=2')
      .set($h1, {scale: 0.9, y: '-=30px', text: 'and most importantly ...'})

      // and most importantly + have fun
      .to($h1, 0.3, { y: '+=20px', autoAlpha: 1,  ease: Power4.easeInOut})
      .to($h1, 2, { scale: 1, ease: RoughEase.ease.config(
        {
          template: Power0.easeNone,  strength: 2,
          points: 60,
          taper: 'none',
          randomize: true,
          clamp: false
        }),
      })
      .to($h1, 0.3, { scale: 1.1,autoAlpha: 0,ease: Power0.easeNone})
      .set($h1, { scale: 0.9,text: 'Have some fun!'})
      .to($h1, 0.3, { scale: 1.5, autoAlpha: 1, ease: Power4.easeInOut }, '+=0.3')
      .to($h1, 0.2, { autoAlpha: 0, ease: Power4.easeInOut }, '+=1')
      .set($h1, { y: '-=30px',text: 'Is not Greensock really cool ?'})
      .add('main-flask')

      //  Filling in all flasks
      .to($LiquidInsideMask01, 6, { attr: { y: 415 }, ease: Power0.easeNone }, 'flask01')
      .to( $LiquidInsideMask02, 8.4, { attr: { y: 451 }, ease: Power0.easeNone}, 'flask02')
      .to( $LiquidInsideMask03, 5, { attr: {  y: 452 }, ease: Power0.easeNone }, 'flask03')

      .to( $LiquidInsideMask04, 6, {  attr: { y: 602 }, ease: Power0.easeNone }, 'flask04')
      //.to($LiquidInsideMask01, 6, {attr: {y: 415}, ease: Power0.easeNone}, 'flask01')
      .to( $LiquidInsideMask05, 3,  {  attr: { y: 563  },  ease: Power0.easeNone }, 'main-flask')
      .to( $LiquidInsideMask06, 2, { attr: { y: 608 }, ease: Power0.easeNone  }, 'flask06')
      .to( $LiquidInsideMask07, 2, { attr: { y: 608 }, ease: Power0.easeNone }, 'flask07' );

    return fillTubesTl;
  }

  function getFinalCTATl() {
    const finalCTATl = new TimelineMax();

    const lightsBlink = new TimelineMax({ repeat: -1, yoyo: true });

    lightsBlink
      .fromTo($printerLightsTop, 0.1, { fill: '#5AB783' }, { fill: '#F8AD43', immediateRender: false })
      .fromTo($printerLightsBottom, 0.1, { fill: '#5AB783' }, { fill: '#F8AD43', immediateRender: false }, '+=0.2')
      .fromTo($printerLightsTop, 0.1, { fill: '#F8AD43' }, { fill: '#F8876E', immediateRender: false }, '-=0.2')
      .fromTo($printerLightsBottom, 0.1, { fill: '#F8AD43' }, { fill: '#F8876E', immediateRender: false }, '+=0.2')
      .fromTo($printerLightsTop, 0.1, { fill: '#F8876E' }, { fill: '#5AB783', immediateRender: false }, '-=0.2')
      .fromTo($printerLightsBottom, 0.1, { fill: '#F8876E' }, { fill: '#5AB783', immediateRender: false }, '+=0.2');

    // set the repeat options to manage your message with the timeline ({repeat: 1, repeatDelay: 5})
    const hideAndSeek = new TimelineMax();

    hideAndSeek
      .to($paper, 0.6, { y: '+=55', ease: SteppedEase.config(10) })
      // add some space to center with the axeY of the <text> tag
      .set($paperText, { text: 'YES U CAN!' })
      .to($paper, 0.6, { y: '-=55', ease: SteppedEase.config(10) })
      .to($paper, 0.6, { y: '+=55', ease: SteppedEase.config(10) }, '+=5')
      .set($paperText, { text: '&nbsp;&nbsp;&nbsp;WHY NOT' })
      .to($paper, 0.6, { y: '-=55', ease: SteppedEase.config(10) })
      .to($paper, 0.6, { y: '+=55', ease: SteppedEase.config(10) }, '+=5');

    finalCTATl
      .fromTo($MainBulb, 0.05, { fill: '#FFFFFF' }, { fill: '#F8AD43', repeat: 10, yoyo: true })
      .to($h1, 0.3, { y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut }, '+=0.3')
      // nesting Timeline
      .add(lightsBlink, '2')
      .to($paper, 3, { y: 0, ease: SteppedEase.config(10) }, '2.5')
      .add(hideAndSeek, '7.5');

    return finalCTATl;
  }

  /**
   * Set a Init Function for all the Timelines
   */
  function init() {
    $mainTl
      .add(clearStage())
      .add(getIntroTl(), 'scene-intro')
      .add(getIdeaTl(), 'scene-idea')
      .add(getPart2Tl(), 'scene-part2')
      .add(getFillTubesTl(), 'scene-tubes')
      .add(getFinalCTATl(), 'scene-final');

    /** Start the animation step by step using labels
     *   $mainTl.seek('scene-final');
     */
  }

  init();
})(jQuery);
