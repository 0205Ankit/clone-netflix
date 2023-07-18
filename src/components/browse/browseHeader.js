import {
  NavBar,LinksContainer,
  NavLinks,Info,
  SearchBox,SearchIcon,
  Button,SearchInput,
  Input,ProfileInfo,Image,
  DownArrow,CloseIcon,
  ExtraProfiles,ProfileLinks,
  EditIconContainer,SignOutLink,Section,
} from '../../styles/browseStyle/browseHeader';
import Logo from '../../assets/Logo';
import { useEffect, useState, useMemo, useCallback } from 'react';
import useProfileData from '../../hooks/profilData-hook';
import { useNavigate,useLocation,useSearchParams} from 'react-router-dom';
import EditIcon from '../../assets/editIcon';
import { signOutUser } from '../../services/firebase';
import _ from 'lodash';
import { userSliceActions } from '../../reduxStore/store';
import { useDispatch } from 'react-redux';


const BrowseHeader = (props) => {
  const dispatch=useDispatch()
  const [showInput, setShowInput] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const [params]=useSearchParams()
  const [sticky, setSticky] = useState(false);
  const [profilesData] = useProfileData();
  const modalProfData = profilesData.filter((e) => {
    return e.profilename !== props.profData.profilename;
  });
  const navigate = useNavigate();
  const changeHandler = useCallback((e) => {
    if (e.target.value.trim() === '' || e.target.value.length <= 0) {
      navigate('/browse');
    } else {
      navigate(`/browse/search?q=${e.target.value}`, { replace: true });
    }
  },[navigate]);

  const debounceHandler = useMemo(() => _.debounce(changeHandler, 300), [changeHandler]);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
    return debounceHandler.cancel();
  }, [props, debounceHandler]);

  return (
    <Section sticky={sticky}>
      <NavBar spaceBetween alignCenter>
        <LinksContainer>
          <Logo width="6rem" />
          <div>
            <NavLinks
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/browse"
              end
            >
              Home
            </NavLinks>
            <NavLinks
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/browse/tv"
              end
            >
              TV Shows
            </NavLinks>
            <NavLinks
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/browse/movie"
              end
            >
              Movies
            </NavLinks>
            <NavLinks
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/browse/myList"
              end
            >
              My List
            </NavLinks>
          </div>
        </LinksContainer>
        <Info alignCenter>
          <SearchBox>
            {!showInput && (
              <Button
                onFocus={() => {
                  setShowInput(true);
                }}
              >
                <SearchIcon />
              </Button>
            )}
            {showInput && (
              <SearchInput alignCenter>
                <SearchIcon />
                <Input
                  onChange={debounceHandler}
                  type="text"
                  placeholder="Titles,people,genres"
                  onBlur={(e) => {
                    if(location.search===''){
                      setShowInput(false);
                    }
                  }}
                  autoFocus
                />
                {location.pathname === '/browse/search' && (
                  <CloseIcon
                    onClick={(e) => {
                      setShowInput(false);
                      navigate('/browse');
                    }}
                  />
                )}
              </SearchInput>
            )}
          </SearchBox>
          <ProfileInfo
            alignCenter
            onMouseOver={() => {
              if (!(params.get('movieId') || params.get('tvId'))){
                 setShowModal(true);
              }
            }}
            onMouseOut={() => {
              setShowModal(false);
            }}
          >
            <Image src={`${props.profData.imgPath}`} alt="profileImage" />
            <DownArrow />
            {showModal  && (
              <ExtraProfiles>
                {modalProfData.map((e, i) => {
                  return (
                    <ProfileLinks
                      key={i}
                      onClick={() => {
                        localStorage.setItem(
                          'user-profile',
                          JSON.stringify({ ...e }),
                        );
                        navigate('/browse')
                        window.location.reload()
                      }}
                      to="#"
                    >
                      <Image src={`${e.imgPath}`} alt={'profilePhoto'} />
                      <div>{`${e.profilename}`}</div>
                    </ProfileLinks>
                  );
                })}
                <ProfileLinks to="/manage-profile">
                  <EditIconContainer justifyCenter>
                    <EditIcon fill={'white'} width="24px" />
                  </EditIconContainer>
                  <div>Manage Profiles</div>
                </ProfileLinks>
                <SignOutLink
                to='/login'
                  onClick={async () => {
                    dispatch(userSliceActions.setUser(null))
                    localStorage.removeItem('authUser')
                    localStorage.removeItem('user-profile');
                    await signOutUser();
                  }}
                >
                  Sign out of Netflix
                </SignOutLink>
              </ExtraProfiles>
            )}
          </ProfileInfo>
        </Info>
      </NavBar>
    </Section>
  );
};

export default BrowseHeader;
