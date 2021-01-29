import React from 'react';
import { Button, Wrap } from './add-post.styles';
import Link from 'next/link';

export const AddPost = () => {
    return (
        <Wrap>
            <Link href="/posts/new">
                <Button>Add</Button>
            </Link>
        </Wrap>
    );
};