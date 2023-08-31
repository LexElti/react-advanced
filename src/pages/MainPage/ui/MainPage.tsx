import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { Card } from '@/shared/ui/redesigned/Card';

const MainPage = () => {
    const { t } = useTranslation();
    const title = t('Главная страница');

    return (
        <Page data-testid="MainPage">
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

export default MainPage;
