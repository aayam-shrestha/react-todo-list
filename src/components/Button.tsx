interface Props {
  text: string;
}

const Button = ({ text }: Props) => {
  return (
    <button type="button" className="btn btn-secondary">
      {text}
    </button>
  );
};

export default Button;
