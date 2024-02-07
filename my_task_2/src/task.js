import React, { useEffect, useState } from "react";

const Task = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tommy, setTommy] = useState(true);
  const [bigdrop, setBigdrop] = useState(false);
  const [cuker, setCuker] = useState(false);

  useEffect(() => {
    const timing = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => {
      clearTimeout(timing);
    };
  });

  const firstbtn=()=>{
    setTommy(true);
    setCuker(false);
    setBigdrop(false);
  }

  const secondbtn=()=>{
    setBigdrop(true);
    setTommy(false);
    setCuker(false);
  }

  const thirdbtn=()=>{
    setCuker(true);
    setTommy(false);
    setBigdrop(false);
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>Experience</h1>
      <div>
        <button className="btn" onClick={firstbtn}>Tommy</button>
        <button className="btn" onClick={secondbtn}>BigDrop</button>
        <button className="btn" onClick={thirdbtn}>Cuker</button>
        {tommy && <Tommy />}
        {bigdrop && <Bidrop/>}
        {cuker && <Cuker/>}
      </div>
    </div>
  );
};

const Tommy = () => {
  return (
    <div className="expcontainer">
      <h3 className="expcontent">Full Stack developer</h3>
      <h6 className="expcontentText">Tommy</h6>
      <p>
        Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke
        leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge
        disrupt.
      </p>
      <p>
        Post-ironic selvage chambray sartorial freegan meditation. Chambray
        chartreuse kombucha meditation, man bun four dollar toast street art
        cloud bread live-edge heirloom.
      </p>
      <p>
        Butcher drinking vinegar franzen authentic messenger bag copper mug food
        truck taxidermy. Mumblecore lomo echo park readymade iPhone migas
        single-origin coffee franzen cloud bread tilde vegan flexitarian.
      </p>
    </div>
  );
};

const Bidrop = () => {
  return (
    <div className="expcontainer">
      <h3 className="expcontent">Front-End Engineer</h3>
      <h6 className="expcontentText">Big Drop</h6>
      <p>
        Hashtag drinking vinegar scenester mumblecore snackwave four dollar
        toast, lumbersexual XOXO. Cardigan church-key pabst, biodiesel
        vexillologist viral squid.
      </p>
      <p>
        Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la croix
        cardigan neutra retro tattooed copper mug. Meditation lomo biodiesel
        scenester
      </p>
      <p>
        Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape
        authentic. Helvetica fixie church-key, small batch jianbing messenger
        bag scenester +1
      </p>
    </div>
  );
};

const Cuker = () => {
  return (
    <div className="expcontainer">
      <h3 className="expcontent">Engineering Intern</h3>
      <h6 className="expcontentText">Cuker</h6>
      <p>
        I'm baby woke mumblecore stumptown enamel pin. Snackwave prism pork
        belly, blog vape four loko sriracha messenger bag jean shorts DIY
        bushwick VHS. Banjo post-ironic hella af, palo santo craft beer
        gluten-free.
      </p>
      <p>
        YOLO drinking vinegar chambray pok pok selfies quinoa kinfolk pitchfork
        street art la croix unicorn DIY. Woke offal jianbing venmo tote bag,
        palo santo subway tile slow-carb post-ironic pug ugh taxidermy squid.
      </p>
      <p>
        Pour-over glossier chambray umami 3 wolf moon. Iceland kale chips
        asymmetrical craft beer actually forage, biodiesel tattooed
        fingerstache. Pork belly lomo man braid, portland pitchfork locavore man
        bun prism.
      </p>
    </div>
  );
};
export default Task;
