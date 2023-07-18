import {
  FooterColumn,
  FooterContainer,
  FooterLinks,
  Footers,
  FooterTitle,
} from "../styles/homepage/FooterStyle";

const Footer =({ bgColor }) => {

  return (
    <Footers style={{ backgroundColor: bgColor }}>
      <FooterContainer>
        <FooterTitle>
          <h4>Questions? Call 000-800-040-1843</h4>
        </FooterTitle>
        <FooterLinks>
          <FooterColumn column>
            <div>FAQ</div>
            <div>Investor Relations</div>
            <div>Privacy</div>
            <div>Speed Test</div>
          </FooterColumn>
          <FooterColumn column>
            <div>Help Center</div>
            <div>Jobs</div>
            <div>Cookie Preferences</div>
            <div>Legal Notices</div>
          </FooterColumn>
          <FooterColumn column>
            <div>Account</div>
            <div>Ways to Watch</div>
            <div>Corporate Information</div>
            <div>Only on Netflix</div>
          </FooterColumn>
          <FooterColumn column>
            <div>Media Centre</div>
            <div>Terms of Use</div>
            <div>Contact us</div>
          </FooterColumn>
        </FooterLinks>
        <span>Netflix India</span>
      </FooterContainer>
    </Footers>
  );
};

export default Footer;
