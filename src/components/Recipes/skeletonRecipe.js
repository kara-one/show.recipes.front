import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import React from 'react';

const skeletonRecipe = () => {
    return (
        <div className="mt-3 col-lg-4 col-md-6 col-12">
            <div className="border border-info" style={{ height: '100%' }}>
                <SkeletonTheme color="#eee" highlightColor="#f5f5f5">
                    <div style={{ fontSize: 0, lineHeight: 0 }}>
                        <Skeleton width={'100%'} height={300} />
                    </div>

                    <div style={{ padding: '15px 1.25rem' }}>
                        <p style={{ fontSize: '1.25rem', lineHeight: 1.4 }}>
                            <Skeleton width={'100%'} count={2} />
                        </p>
                        <p style={{ fontSize: '1rem', lineHeight: 1.5 }}>
                            <Skeleton width={'100%'} count={5} />
                        </p>
                    </div>
                </SkeletonTheme>
            </div>
        </div>
    );
};
export default skeletonRecipe;
