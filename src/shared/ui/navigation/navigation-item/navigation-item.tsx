import { Button } from '@mui/material';
import type { FC, JSX } from 'react';
import { Link } from 'react-router';
import { NavigationItemProps } from './navigation-item.props';

export const NavigationItem: FC<NavigationItemProps> = ({route}): JSX.Element => {
    return (
        <li>
            <Button
                color="inherit"
            >
                <Link to={route.path}>{route.name}</Link>
            </Button>
        </li>
    );
};