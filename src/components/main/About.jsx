import "../css/main-componet.css";
import LineBreak from "../UI/LineBreak";

function About() {
  return (
    <>
      <div className="about">
        <h1>Keep Calm and code on with DarkCode Coffee</h1>
        <p className="row-left">
          Introducing DarkCode Coffee - the IT geek's best-kept secret for
          fueling caffeine-powered coding marathons! This brew is the ultimate
          hack for your taste buds, brewed with a proprietary blend of
          high-octane beans that will keep your code running faster than a
          quantum computer.
          <br />
          <br />
          DarkCode Coffee is the go-to fuel for tech wizards, with its bold
          flavor profile that's as smooth as a well-optimized algorithm. With
          every sip, you'll feel the power of binary coursing through your
          veins, igniting your coding skills and unlocking new levels of
          productivity.
        </p>
        <p className="row-right">
          This coffee is brewed with an encrypted blend of dark roast beans that
          are roasted to perfection by a team of master coffee hackers. The
          result is a complex and robust flavor profile that will make your
          taste buds sing in binary code.
          <br />
          <br /> With DarkCode Coffee, you'll never experience a system crash
          during your coding sessions again. It's the coffee that keeps your
          code running smoothly, eliminating bugs and glitches with every sip.
          And the best part? It's compatible with all coding languages, from
          Python to Java, making it the go-to choice for all tech aficionados.
        </p>
        <p className="row-left">
          So, whether you're debugging lines of code or pushing the boundaries
          of innovation, DarkCode Coffee is your trusty sidekick in the world of
          IT. Say goodbye to lagging energy levels and hello to a coffee
          experience that's as fast and furious as your coding skills. Get ready
          to unlock the full potential of your inner tech ninja with DarkCode
          Coffee!
        </p>
        <LineBreak />
      </div>
    </>
  );
}

export default About;
