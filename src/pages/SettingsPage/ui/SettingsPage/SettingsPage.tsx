import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { UiDesignSwitcher } from '@/features/uiDesignSwitcher';
import { Text } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Card } from '@/shared/ui/redesigned/Card';

const SettingsPage = () => {
    const { t } = useTranslation();

    return (
        <Page data-testid="SettingsPage">
            <Card fullWidth border="partial" padding="24">
                <VStack gap="16">
                    <Text title={t('Настройки пользователя')} />
                    <UiDesignSwitcher />
                </VStack>
            </Card>
        </Page>
    );
};

export default SettingsPage;
