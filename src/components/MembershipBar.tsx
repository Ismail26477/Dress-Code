import { Link } from "react-router-dom";

const MembershipBar = () => (
  <div className="fixed bottom-14 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-primary text-primary-foreground z-30 flex items-center justify-between px-4 py-2 text-xs">
    <span>Join Club, membership rewards await!</span>
    <Link to="/account" className="bg-gold text-gold-foreground font-bold px-4 py-1.5 rounded-full text-xs">
      Sign in
    </Link>
  </div>
);

export default MembershipBar;
