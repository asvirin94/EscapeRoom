import Footer from '../../components/footer/footer';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../consts';
import Header from '../../components/header/header';
import { useForm } from 'react-hook-form';
import { checkHasDigits, checkHasLetter, checkPasswordLength } from '../../utils';

export default function AuthorizationPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {register, handleSubmit, formState: { errors }, getValues} = useForm();

  const onSubmit = () => {
    const {userEmail, userPassword} = getValues();
    if(typeof userEmail === 'string' && typeof userPassword === 'string') {
      dispatch(loginAction({email: userEmail, password: userPassword}));
      navigate(AppRoute.Main);
    }
  };

  return (
    <div className="wrapper">
      <Header isAuthPage/>
      <main className="decorated-page login">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet="
                img/content/maniac/maniac-size-m.webp,
                img/content/maniac/maniac-size-m@2x.webp 2x
              "
            />
            <img
              src="img/content/maniac/maniac-size-m.jpg"
              srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x"
              width="1366"
              height="768"
              alt=""
            />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="login__form">
            <form
              onSubmit={(evt) => void handleSubmit(onSubmit)(evt)}
              className="login-form"
              action="https://echo.htmlacademy.ru/"
              method="post"
            >
              <div className="login-form__inner-wrapper">
                <h1 className="title title--size-s login-form__title">Вход</h1>
                <div className="login-form__inputs">
                  <div className="custom-input login-form__input">
                    <label className="custom-input__label" htmlFor="email">E&nbsp;&ndash;&nbsp;mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Адрес электронной почты"
                      {...register('userEmail',
                        {
                          required: 'Укажите почту'
                        })}
                      aria-invalid={errors.userEmail ? 'true' : 'false'}
                    />
                    {errors.userEmail && <><br/><span style={{color: 'red'}} role="alert">{errors.userEmail?.message as string}</span></>}
                  </div>
                  <div className="custom-input login-form__input">
                    <label className="custom-input__label" htmlFor="password">Пароль
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Пароль"
                      {...register('userPassword', {
                        required: 'Введите пароль',
                        validate: {
                          checkHasDigits,
                          checkHasLetter,
                          checkPasswordLength
                        }
                      })}
                      aria-invalid={errors.userPassword ? 'true' : 'false'}
                    />
                    {errors.userPassword && <><br/><span style={{color: 'red'}} role="alert">{errors.userPassword?.message as string}</span></>}
                  </div>
                </div>
                <button
                  className="btn btn--accent btn--general login-form__submit"
                  type="submit"
                >
                  Войти
                </button>
              </div>
              <label className="custom-checkbox login-form__checkbox">
                <input
                  type="checkbox"
                  id="id-order-agreement"
                  {...register('userAgreement', {required: 'Выберите этот пункт'})}
                  aria-invalid={errors.userAgreement ? 'true' : 'false'}
                />
                {errors.userAgreement && <><br/><span style={{color: 'red'}} role="alert">{errors.userAgreement?.message as string}</span></>}
                <span className="custom-checkbox__icon">
                  <svg width="20" height="17" aria-hidden="true">
                    <use xlinkHref="#icon-tick"></use>
                  </svg>
                </span>
                <span className="custom-checkbox__label">Я&nbsp;согласен с
                  <a className="link link--active-silver link--underlined" href="#"> правилами обработки персональных данных
                  </a>&nbsp;и пользовательским соглашением
                </span>
              </label>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
