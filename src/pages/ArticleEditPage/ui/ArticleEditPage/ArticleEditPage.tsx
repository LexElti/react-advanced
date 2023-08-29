import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page';
import cls from './ArticleEditPage.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';

const ArticleEditPage = () => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);
    const title = isEdit
        ? t('Редактирование статьи с ID = ') + id
        : t('Создание новой статьи');

    return (
        <Page className={cls.ArticleEditPage} data-testid="ArticleEditPage">
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

export default ArticleEditPage;
