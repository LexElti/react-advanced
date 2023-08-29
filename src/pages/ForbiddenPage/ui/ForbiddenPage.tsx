import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';

const ForbiddenPage = () => {
    const { t } = useTranslation('');
    const message = t('У вас нет доступа к этой странице');

    return (
        <Page data-testid="ForbiddenPage">
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

export default ForbiddenPage;
