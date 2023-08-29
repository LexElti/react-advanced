import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';

const AdminPanelPage = () => {
    const { t } = useTranslation('about');
    const title = t('Админ панель');

    return (
        <Page data-testid="AdminPanelPage">
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Card fullWidth border="partial" padding="24">
                        <Text title={title} />
                    </Card>
                }
                off={<TextDeprecated title={title} />}
            />
        </Page>
    );
};

export default AdminPanelPage;
