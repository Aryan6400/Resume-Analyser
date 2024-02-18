import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { Avatar } from '@mui/material';

function Navbar() {
  const navigate = useNavigate()

  function stringAvatar(name) {
    return `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
  }

  return (
    <nav className="navbar">
      <div className='nav-container'>
        <div onClick={()=>navigate('/')} className='crux-logo'>
          <div></div>
          <div style={{ display: "flex" }}>
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.18077 19.9044C7.26806 19.9044 5.62563 19.4844 4.25346 18.6445C2.88961 17.8046 1.83762 16.6444 1.09749 15.1642C0.365666 13.6756 -0.000244141 11.9624 -0.000244141 10.0247C-0.000244141 8.07876 0.373982 6.36146 1.12244 4.87286C1.87089 3.37594 2.92704 2.21167 4.29088 1.38005C5.66305 0.540116 7.2847 0.120148 9.15583 0.120148C10.7109 0.120148 12.0873 0.407057 13.2848 0.980875C14.4906 1.54638 15.4511 2.34889 16.1663 3.38842C16.8815 4.41963 17.289 5.62548 17.3888 7.00597H13.0727C12.8981 6.08287 12.4823 5.31362 11.8253 4.69822C11.1766 4.0745 10.3076 3.76265 9.2182 3.76265C8.29511 3.76265 7.48428 4.01213 6.78573 4.5111C6.08717 5.00176 5.54246 5.70864 5.15161 6.63174C4.76906 7.55484 4.57779 8.66089 4.57779 9.9499C4.57779 11.2555 4.76906 12.3782 5.15161 13.318C5.53415 14.2494 6.07054 14.9687 6.76078 15.476C7.45933 15.975 8.27847 16.2245 9.2182 16.2245C9.88349 16.2245 10.4781 16.0997 11.002 15.8503C11.5342 15.5924 11.9792 15.2224 12.3368 14.74C12.6943 14.2577 12.9397 13.6714 13.0727 12.9812H17.3888C17.2807 14.3367 16.8815 15.5384 16.1913 16.5862C15.501 17.6258 14.5613 18.4407 13.3721 19.0312C12.1829 19.6133 10.7858 19.9044 9.18077 19.9044Z" fill="url(#paint0_linear_1_9745)" />
              <defs>
                <linearGradient id="paint0_linear_1_9745" x1="12.1514" y1="0.894367" x2="-2.28901" y2="20.1337" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#5E5ADB" />
                  <stop offset="1" stop-color="#5E5ADB" stop-opacity="0.8" />
                </linearGradient>
              </defs>
            </svg>
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.0974121 19.5306V0.370016H4.47586V3.56344H4.67545C5.02473 2.45738 5.62349 1.60497 6.47173 1.00621C7.3283 0.399122 8.30544 0.0955811 9.40317 0.0955811C9.65266 0.0955811 9.93125 0.108054 10.2389 0.133002C10.555 0.149635 10.8169 0.178742 11.0248 0.220323V4.37427C10.8335 4.30774 10.53 4.24952 10.1142 4.19963C9.70671 4.14141 9.3117 4.11231 8.92915 4.11231C8.10585 4.11231 7.36572 4.29111 6.70874 4.6487C6.06008 4.99798 5.54864 5.48448 5.17442 6.1082C4.80019 6.73191 4.61308 7.45126 4.61308 8.26625V19.5306H0.0974121Z" fill="url(#paint0_linear_1_9744)" />
              <defs>
                <linearGradient id="paint0_linear_1_9744" x1="7.73358" y1="0.856132" x2="-6.85312" y2="13.2883" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#5E5ADB" />
                  <stop offset="1" stop-color="#5E5ADB" stop-opacity="0.8" />
                </linearGradient>
              </defs>
            </svg>
            <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.2394 11.4721V0.369995H16.755V19.5305H12.3766V16.125H12.177C11.7445 17.1978 11.0335 18.0752 10.0439 18.7571C9.06258 19.4391 7.85259 19.78 6.41389 19.78C5.15816 19.78 4.04795 19.5014 3.08328 18.9442C2.12692 18.3787 1.37847 17.5596 0.837923 16.4868C0.297374 15.4057 0.0270996 14.1 0.0270996 12.5699V0.369995H4.54276V11.8713C4.54276 13.0855 4.87541 14.0502 5.5407 14.7653C6.20599 15.4805 7.07919 15.8381 8.16028 15.8381C8.82557 15.8381 9.47008 15.676 10.0938 15.3516C10.7175 15.0273 11.2289 14.545 11.6281 13.9046C12.0356 13.256 12.2394 12.4451 12.2394 11.4721Z" fill="url(#paint0_linear_1_9743)" />
              <defs>
                <linearGradient id="paint0_linear_1_9743" x1="11.7167" y1="1.12957" x2="-2.526" y2="19.7361" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#5E5ADB" />
                  <stop offset="1" stop-color="#5E5ADB" stop-opacity="0.8" />
                </linearGradient>
              </defs>
            </svg>
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.09189 0.369995L8.95889 7.44293L12.8883 0.369995H17.6659L11.8903 9.95026L17.7657 19.5305H13.013L8.95889 12.6322L4.9422 19.5305H0.1521L5.99003 9.95026L0.30179 0.369995H5.09189Z" fill="url(#paint0_linear_1_9742)" />
              <defs>
                <linearGradient id="paint0_linear_1_9742" x1="12.4606" y1="1.11981" x2="-1.33766" y2="20.3472" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#5E5ADB" />
                  <stop offset="1" stop-color="#5E5ADB" stop-opacity="0.8" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className='avatar'>
          <div>{stringAvatar('Aryan Singh')}</div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;