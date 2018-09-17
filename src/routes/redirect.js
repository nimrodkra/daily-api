import Router from 'koa-router';
import post from '../models/post';
import { EntityNotFoundError } from '../errors';
import { add as addEvent } from '../events';

const router = Router({
  prefix: '/r',
});

router.get(
  '/:id',
  async (ctx) => {
    const model = await post.get(ctx.params.id, 'url');
    if (model) {
      if (ctx.session.userId) {
        ctx.log.info(`redirecting user ${ctx.session.userId} to post ${model.id}`);
        addEvent(ctx, 'view', model.id);
        ctx.set('Cache-Control', 'max-age=31536000');
        await ctx.render('redirect.hbs', { url: model.url });
      } else {
        ctx.log.info(`redirecting bot to post ${model.id}`);
        ctx.status = 301;
        ctx.redirect(model.url);
      }
    } else {
      throw new EntityNotFoundError('post', 'id', ctx.params.id);
    }
  },
);

export default router;
