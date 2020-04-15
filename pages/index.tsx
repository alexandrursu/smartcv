import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider, Page, Card, Button, Tabs } from '@shopify/polaris';
import React, { useCallback, useState } from 'react';

import { Navigation } from '@shopify/polaris';
import { HomeMajorMonotone, OrdersMajorTwotone, ProductsMajorTwotone } from '@shopify/polaris-icons';

export default function TabsExample() {
    const [selected, setSelected] = useState(0);

    const handleTabChange = useCallback(selectedTabIndex => setSelected(selectedTabIndex), []);

    const tabs = [
        {
            id: 'all-customers',
            content: 'All',
            accessibilityLabel: 'All customers',
            panelID: 'all-customers-content'
        },
        {
            id: 'accepts-marketing',
            content: 'Accepts marketing',
            panelID: 'accepts-marketing-content'
        },
        {
            id: 'repeat-customers',
            content: 'Repeat customers',
            panelID: 'repeat-customers-content'
        },
        {
            id: 'prospects',
            content: 'Prospects',
            panelID: 'prospects-content'
        }
    ];

    return (
        <AppProvider i18n={enTranslations}>
            <Navigation location="/">
                <Navigation.Section
                    items={[
                        {
                            url: '/path/to/place',
                            label: 'Home',
                            icon: HomeMajorMonotone
                        },
                        {
                            url: '/path/to/place',
                            label: 'Orders',
                            icon: OrdersMajorTwotone,
                            badge: '15'
                        },
                        {
                            url: '/path/to/place',
                            label: 'Products',
                            icon: ProductsMajorTwotone
                        }
                    ]}
                />
            </Navigation>
            <Card>
                <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
                    <Card.Section title={tabs[selected].content}>
                        <p>Tab {selected} selected</p>
                    </Card.Section>
                </Tabs>
            </Card>
        </AppProvider>
    );
}

// export default () => (
//     <AppProvider i18n={enTranslations}>
//     </AppProvider>
// );
