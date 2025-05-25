import Image from "next/image";
import "../Design/PrivacyPolicy.css";
import Icon from "../Image/Tirandpro.png";

const Privacypolicy = () => {
  return (
    <div className="PrivacyPage">
      <div className="ImageSection">
        <Image src={Icon} alt="TirandPro.png" width={100} height={100} />
      </div>
      <div className="HeadLine">
        <h1>Privacy Policy for TriendPro</h1>
      </div>
      <div className="SomeText">
        Welcome to TriendPro, a dating platform committed to respecting and
        protecting your personal information. This Privacy Policy outlines how
        we collect, use, share, and safeguard the data you provide when using
        our website.
      </div>
      <div className="InfoCollact">
        <div className="HeadInfo">1. Information We Collect</div>
        <div className="SomeText">
          When you sign up and use TriendPro, we may collect the following types
          of information:
        </div>
        <li>Personal Information: Name, email address, age, gender.</li>
        <li>Optional Content: Profile photos, messages you send or receive.</li>
        <li>
          Usage Data: Device information, IP address, and browser type for
          analytics and security.
        </li>
      </div>
      <div className="InfoCollact">
        <div className="HeadInfo">2. How We Use Your Information</div>
        <div className="SomeText">We use your information to:</div>
        <li>Create and manage your account.</li>
        <li>Connect you with compatible users.</li>
        <li>Improve our services and user experience.</li>
        <li>Send updates, offers, and notifications (you can opt out).</li>
        <li>Ensure safety, security, and compliance with legal obligations.</li>
      </div>
      <div className="InfoCollact">
        <div className="HeadInfo">3. Sharing Your Information</div>
        <div className="SomeText">
          We do not sell your personal data. We may share your information only
          in the following cases:
        </div>
        <li>
          With service providers that help operate our site (e.g., hosting,
          analytics).
        </li>
        <li>
          If legally required to comply with investigations or legal processes.
        </li>
        <li>With your consent for any other purposes.</li>
      </div>
      <div className="InfoCollact">
        <div className="HeadInfo">4. Cookies and Tracking</div>
        <div className="SomeText">
          TriendPro uses cookies and similar technologies to:
        </div>
        <li>Keep you logged in</li>
        <li>Measure and analyze website usage</li>
        <li>Improve our services</li>
      </div>
      <div className="SomeText">
        You can manage or disable cookies through your browser settings.
      </div>
      <div className="InfoCollact">
        <div className="HeadInfo">5. Your Privacy Rights</div>
        <div className="SomeText">As a user, you have the right to:</div>
        <li>Access or update your information</li>
        <li>Delete your account and personal data</li>
        <li>Opt out of marketing communications</li>
        <div className="SomeText">
          To request any of the above, contact us at: [your email or contact
          form URL]
        </div>
      </div>
      <div className="InfoCollact">
        <div className="HeadInfo">6. Data Security</div>
        <div className="SomeText">
          We implement strong security measures (encryption, secure servers,
          etc.) to protect your personal data. However, no platform is 100%
          secure, so use caution when sharing sensitive information.
        </div>
      </div>
      <div className="InfoCollact">
        <div className="HeadInfo">7. Children&#39;s Privacy</div>
        <div className="SomeText">
          TriendPro is strictly for users 18 years or older. We do not knowingly
          collect personal data from anyone under 18. If you believe a minor has
          created an account, contact us immediately for removal.
        </div>
      </div>
      <div className="InfoCollact">
        <div className="HeadInfo">8. Changes to This Policy</div>
        <div className="SomeText">
          We may update this Privacy Policy from time to time. We will notify
          you by email or post updates on this page. Your continued use of
          TriendPro means you accept the revised terms.
        </div>
      </div>
      <div className="InfoCollact">
        <div className="HeadInfo">9. Contact Us</div>
        <div className="SomeText">
          If you have any questions or requests about this Privacy Policy,
          please contact us:
          <br /> 📧 Email: Triandpro@gmail.com
          <br /> 🌐 Website: https://triendpro.com
        </div>
      </div>
    </div>
  );
};

export default Privacypolicy;
