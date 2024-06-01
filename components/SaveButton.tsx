export const SaveButton = ({onClick, isDisabled}: {onClick: () => void, isDisabled: boolean}) => (
<button onClick={onClick}
  type="submit"
  disabled={isDisabled}
  className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
>
  Save
</button>);
