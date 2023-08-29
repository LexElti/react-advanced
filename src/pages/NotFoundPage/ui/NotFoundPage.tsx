import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';

const NotFoundPage = () => {
    const { t } = useTranslation();
    const message = t('Страница не найдена');

    return (
        <Page data-testid="NotFoundPage">
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Card fullWidth border="partial" padding="24">
                        <Text text={message} size="l" />
                    </Card>
                }
                off={<TextDeprecated text={message} />}
            />
        </Page>
    );
};

export default NotFoundPage;
