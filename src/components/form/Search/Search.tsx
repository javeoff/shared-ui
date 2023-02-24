import { FC } from 'react';
import styled from 'styled-components';

import { Icon } from '../../app/Icon/Icon';
import { IInputProps, Input } from '@anagram/ui/components/form/Input/Input';

interface IProps extends IInputProps {
  isClearable?: boolean;
}

export const Search: FC<IProps> = ({ isClearable, ...props }) => {
  const { onChange, value } = props;
  const isShowClear = isClearable && value;

  return (
    <SWrapper>
      <Input
        {...props}
        rightContent={
          isShowClear ? (
            <SCloseIcon onClick={onChange ? () => onChange('') : undefined}>
              <Icon.Close size='sm' />
            </SCloseIcon>
          ) : (
            <Icon.Search size='sm' />
          )
        }
      />
    </SWrapper>
  );
};

const SWrapper = styled.div`
  position: relative;
`;

const SCloseIcon = styled.div`
  cursor: pointer;
`;
