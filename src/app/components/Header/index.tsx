import Button from './button'
import  {ButtonProps} from './button'

interface HeaderProps {
    ButtonDetails: ButtonProps[];
    threadId: string;

}

const Header: React.FC<HeaderProps> = ({ButtonDetails,threadId}) => {
    return (
        <div className='flex bg-gray-100 p-4 shadow rounded-lg items-center justify-between'>
            <h1 className='text-lg font-bold text-grey-800 mb-1 pr-3'>Thread</h1>
            <h2 className='text-base font-semibold text-slate-400 mb-1'>{threadId}</h2>
            {ButtonDetails.map((button) => (
                <Button key={button.text} {...button} />
            ))}
        </div>
    );
}

export default Header;