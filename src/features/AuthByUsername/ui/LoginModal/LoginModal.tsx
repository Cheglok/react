import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string;
}

export const LoginModal = ({ className }: LoginModalProps) => {
    return(
        <div className={classNames(cls.LoginModal, {}, [className])} >

        </div>
    );
};
