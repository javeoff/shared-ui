import { Checkbox } from '@anagram/ui/Checkbox/Checkbox';
import { useCheckbox } from '@anagram/ui/Checkbox/hooks/useCheckbox';

export const CheckboxExample = ({ ...props }) => {
  const [checked, toggle] = useCheckbox();

  return (
    <Checkbox
      label='My Label'
      option='Option 1'
      checked={checked}
      onChange={toggle}
      {...props}
    />
  );
};
